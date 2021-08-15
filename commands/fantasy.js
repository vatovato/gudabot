// Global constants
const leagueID = '1049182'; // [2021-2022 League] This needs to be updated every year
const leagueLogo = "https://resources.premierleague.com/premierleague/photo/2018/12/14/aface409-82b3-45c3-a20e-1aa1ea9d583d/PL-Lion.png"; // English Premier League Logo

// Possible arguments
const fantasyCommands = {
'help': 'help',
'table': 'table',
}
const fantasyDetails = {
'help': 'Shows a list of available commands',
'table': 'Shows the current leaderboard for the FGOEra Fantasy League',
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
async function handleFantasyCommand(message, commandString, args) {
	const fetch = require('node-fetch');
	const Discord = require('discord.js');

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
			//Concatenates all remaining args to form the search prompt, if there are any
			var searchUrl = "https://fantasy.premierleague.com/api/leagues-classic/" + leagueID + "/standings/";

			console.log("Querying " + searchUrl);
			try {
				const response = await fetch(searchUrl);
				console.log("Log response");
				console.log(response);
				const text = await response.text();
				console.log("Log text");
				if ( text ) {
					console.log(text);
					const data = JSON.parse(text);
					createTableEmbed(message, commandString, data);
				} else {
					console.log("No text");
				}

			} catch(err) {
				console.log(err);
			}
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
	.addTimestamp();

	message.channel.send({embeds: [embed]});
}