// Global constants
const leagueID = '1049182'; // [2021-2022 League] This needs to be updated every year
const leagueLogo = "https://resources.premierleague.com/premierleague/photo/2018/12/14/aface409-82b3-45c3-a20e-1aa1ea9d583d/PL-Lion.png"; // English Premier League Logo

// Possible arguments
const fantasyCommands = {
'help': 'help',
'table': 'table',
'user': 'user player_name',
'deadline': 'deadline'
}
const fantasyDetails = {
'help': 'Shows a list of available commands',
'table': 'Shows the current leaderboard for the FGOEra Fantasy League',
'user': 'Shows Fantasy League info about the given user',
'deadline': 'Shows a countdown of the current gameweek\'s transfer deadline'
}

// Called by bot.js when fantasy command is given
exports.run = (client, message, args) => {
	if ( args.length ) {
		const commandString = args.shift();
		if ( commandString in fantasyCommands ) {
			handleFantasyCommand(message, commandString, args).then(console.log("API Query succeeded")).catch(e => console.log(e));
		}
		else {
			message.channel.send(`Fantasy: command ${commandString} not recognised.\nUse '!fantasy help' for a list of available commands.`);
		}
	} 
	else {
		message.channel.send("Fantasy: no argument found.\nUse '!fantasy help' for a list of available commands.");
	}
}

// Asynchronous function that queries the Fantasy Premier League api
// The Fantasy Premier League API doesn't work with fetch. Maybe it just returns a plain text? Use request and parse the html instead
async function handleFantasyCommand(message, commandString, args) {
	//const fetch = require('node-fetch');
	const Discord = require('discord.js');
	const request = require('request');
	var username = message.author.username;

	switch(commandString.toLowerCase()) {
		case 'help':
			const embed = new Discord.MessageEmbed()
			.setTitle("Fantasy Premier League Commands")
			.setThumbnail(leagueLogo)
			.setURL("https://fantasy.premierleague.com/leagues/" + leagueID + "/standings/c");
			for ( const [key, value] of Object.entries(fantasyCommands) ) {
				embed.addField(value,fantasyDetails[key]);
			}
			message.channel.send({embeds: [embed]});
			break;
		case 'table':
			console.log(username + " wants to check the fantasy league table.");
			var searchUrl = "https://fantasy.premierleague.com/api/leagues-classic/" + leagueID + "/standings/";
			request(searchUrl, function(error, response, html) {
				if(!error && response.statusCode == 200) {
					const data = JSON.parse(html);
					createTableEmbed(message, commandString, data);
				} else {
					console.log(response)
				}
			});
			break;
		case 'user':
			const searchManager = args.join(" ");
			console.log(username + " wants to check " + searchManager + "'s Fantasy League data");
			// Search our league for the manager
			request("https://fantasy.premierleague.com/api/leagues-classic/" + leagueID + "/standings/", function(leagueError, leagueResponse, leagueHtml) {
				if(!leagueError && leagueResponse.statusCode == 200) {
					const leagueData = JSON.parse(leagueHtml);
					for ( var i = 0; i < leagueData.standings.results.length; ++i ) {
						if ( searchManager == leagueData.standings.results[i].player_name ) {
							const managerID = leagueData.standings.results[i].entry;
							const managerIndex = i;
							// Search the player data for current week + player (footballer) info
							request("https://fantasy.premierleague.com/api/bootstrap-static/", function(gameError, gameResponse, gameHtml) {
								if(!gameError && gameResponse.statusCode == 200) {
									const gameData = JSON.parse(gameHtml);
									for ( var j = 0; j < gameData.events.length; ++j ) {
										if ( gameData.events[j].is_current ) {
											// Search manager data for their lineup
											const gameWeek = gameData.events[j].id;
											const managerURL = "https://fantasy.premierleague.com/api/entry/" + managerID.toString() + "/event/" + gameWeek.toString() +"/picks/"
											request(managerURL, function(manError, manResponse, manHtml) {
												if(!manError && manResponse.statusCode == 200) {
													const manData = JSON.parse(manHtml);
													// Pass league, game and manager json data
													createUserEmbed(message, commandString, managerIndex, gameWeek, leagueData, gameData, manData);
													return;
												} else {
													console.log(manResponse)
												}
											});
										} else if ( j == gameData.events.length ) {
											// No current gameweek
											message.channel.send("Fantasy: Cannot find current gameweek. Is the season over?");
										}
									}
								} else {
									console.log(gameResponse)
								}
							});
						} else if ( i == leagueData.standings.results.length ) {
							// No manager of the name has been found
							message.channel.send("Fantasy: Cannot find the manager " + searchManager + ". Please use <!fantasy table> for a list of managers");
						}
					}
				} else {
					console.log(leagueResponse)
				}
			});
			break;
		case 'deadline':
			console.log(username + " wants to check the fantasy league transfer deadline.");
			var searchUrl = "https://fantasy.premierleague.com/api/bootstrap-static/";
			const currentTime = Date.now() / 1000; // Date.now() returns time in milliseconds
			request(searchUrl, function(error, response, html) {
				if(!error && response.statusCode == 200) {
					const data = JSON.parse(html);
					if ( data ) {
						console.log("Fantasy: " + data.events.length.toString() + " events found.");
						for ( var i = 0; i < data.events.length; ++i ) {
							if ( data.events[i].deadline_time_epoch > currentTime ) { // Find the first gameweek in the future 
								message.channel.send("Fantasy League: The next transfer deadline is <t:" + data.events[i].deadline_time_epoch.toString() + ":R>");
								return;
							}
							else if ( i == data.events.length ) {
								message.channel.send("Fantasy: Cannot find a transfer deadline. Is the season over?");
							}
						}
					}
				} else {
					console.log(response)
				}
			});
			break;
		default:
			break;
	}
}

// Handle JSON data and embed league table message here
function createTableEmbed(message, type, item) {
	const Discord = require('discord.js');

	var playerTable = '';
	var weekTable = '';
	var totalTable = '';

	// Parse through standings
	for ( var i = 0; i < item.standings.results.length; ++i ) {
		if ( i > 0 ) {
			playerTable += "\n";
			weekTable += "\n";
			totalTable += "\n";
		}
		playerTable += item.standings.results[i].player_name;// + " (" + item.standings.results[i].entry_name + ")";
		weekTable += item.standings.results[i].event_total.toString();
		totalTable += item.standings.results[i].total.toString();
	}
	
	// Create embed
	const embed = new Discord.MessageEmbed()
	.setTitle(item.league.name)
	.setThumbnail(leagueLogo)
	.setURL("https://fantasy.premierleague.com/leagues/" + leagueID + "/standings/c")
	.addField("Player", playerTable.length ? playerTable : "N/A", true)
	.addField("Weekly Points", weekTable.length ? weekTable : "N/A", true)
	.addField("Total Points", totalTable.length ? totalTable : "N/A", true)
	.setTimestamp();

	message.channel.send({embeds: [embed]});
}

// Handle JSON data and embed user info message here
function createUserEmbed(message, type, managerIndex, gameWeek, leagueData, gameData, manData) {
	const Discord = require('discord.js');

	// Object containing player indices for lookup in the gamedata
	var playerIndices = {};
	var rolesLists = ['','','',''];

	var captainIndex = 0;
	var viceCaptainIndex = 0;

	// Loop through players picked and add them to the playerIndices object
	//console.log("Fantasy: Searching for players...");
	for ( var i = 0; i < manData.picks.length; ++i ) {
		var position = i + 1;
		playerIndices[manData.picks[i].element] = position;
		if ( manData.picks[i].is_captain ) {
			captainIndex = playerIndices[manData.picks[i].element];
		} else if ( manData.picks[i].is_vice_captain ) {
			viceCaptainIndex = playerIndices[manData.picks[i].element];
		}
	}
	//console.log(playerIndices.length.toString() + " players found");

	// Loop through gameData elements and find the players that match. Yes, we have to loop because players are not ordered by Element for some reason
	var playerCount = 0;
	console.log("Fantasy: Looping through " + gameData.elements.length + " players...");
	for ( var j = 0; j < gameData.elements.length && playerCount < playerIndices.length; ++j ) {
		if ( gameData.elements[j].id in playerIndices ) {
			playerCount++;

			console.log("Fantasy: Player " + gameData.elements[j].first_name + " " + gameData.elements[j].second_name + " found!");
			if ( !rolesLists[gameData.elements[j].element_type - 1].length ) {
				rolesLists[gameData.elements[j].element_type - 1] += ", ";
			}
			// Add <Player Name (TEAM)> to rolesLists at the index of its player type. 
			rolesLists[gameData.elements[j].element_type - 1] += `${gameData.elements[j].first_name} ${gameData.elements[j].second_name} (${gameData.teams[gameData.elements[j].team_code].short_name})`;
			if ( captainIndex == gameData.elements[j].id ) {
				rolesLists[gameData.elements[j].element_type - 1] += "(C)";
			}
			if ( viceCaptainIndex == gameData.elements[j].id ) {
				rolesLists[gameData.elements[j].element_type - 1] += "(VC)";
			}
		}
	}
	
	// Create embed
	const embed = new Discord.MessageEmbed()
	.setTitle(leagueData.standings.results[managerIndex].player_name + " (" + leagueData.standings.results[managerIndex].entry_name + ")")
	.setThumbnail(leagueLogo)
	.setURL("https://fantasy.premierleague.com/entry/" + leagueData.standings.results[managerIndex].entry + "/event/" + gameWeek)
	.addField("Rank", leagueData.standings.results[managerIndex].rank.toString() , true)
	.addField("Weekly Points", leagueData.standings.results[managerIndex].event_total.toString() , true)
	.addField("Total Points", leagueData.standings.results[managerIndex].total.toString() , true)
	.addField("Goalkeepers", rolesLists[0].length ? rolesLists[0] : "N/A")
	.addField("Defenders", rolesLists[1].length ? rolesLists[1] : "N/A")
	.addField("Midfielders", rolesLists[2].length ? rolesLists[2] : "N/A")
	.addField("Forwards", rolesLists[3].length ? rolesLists[3] : "N/A")
	.setTimestamp();

	message.channel.send({embeds: [embed]});
}