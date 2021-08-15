// Global constants
const leagueID = '1049182'; // [2021-2022 League] This needs to be updated every year
const leagueLogo = "https://resources.premierleague.com/premierleague/photo/2018/12/14/aface409-82b3-45c3-a20e-1aa1ea9d583d/PL-Lion.png"; // English Premier League Logo

// Possible arguments
const fantasyCommands = {
'help': 'help',
'table': 'table',
'deadline': 'deadline'
}
const fantasyDetails = {
'help': 'Shows a list of available commands',
'table': 'Shows the current leaderboard for the FGOEra Fantasy League',
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
		case 'deadline':
			var searchUrl = "https://fantasy.premierleague.com/api/bootstrap-static/";
			const currentTime = Date.now();
			console.log("Fantasy: Current UNIX time is " + currentTime.toString());
			request(searchUrl, function(error, response, html) {
				if(!error && response.statusCode == 200) {
					const data = JSON.parse(html);
					if ( data ) {
						console.log(data.events);
						for ( var i = 0; i < data.events; ++i ) {
							console.log("Fantasy: Deadline UNIX time is " + data.events[i].deadline_time_epoch.toString());
							if ( data.events[i].deadline_time_epoch > currentTime ) { // Find the first gameweek in the future 
								message.channel.send("The next transfer deadline is <t:" + data.events[i].deadline_time_epoch.toString() + ":R> (Hover your cursor over the countdown for a timestamp)");
								return;
							}
						}
						message.channel.send("Fantasy: Cannot find a transfer deadline. Is the season over?");
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