// Constants
const Discord = require('discord.js');
const openLogo = "https://pbs.twimg.com/profile_images/788570574687604737/LnEOrVcP_400x400.jpg";

// Possible arguments
const gamesCommands = {
'help': 'help',
'search': 'search game_name', 
'upcoming': 'upcoming <optional: detailed>'
}
const gamesDetails = {
'help': 'Show a list of available commands',
'search': 'Search a game.',
'upcoming': 'Show a list of upcoming games'
}

// Called by bot.js when games command is given
exports.run = (client, message, args) => {

	if ( args.length ) {
		const commandString = args.shift();
		if ( commandString in gamesCommands ) {
			handleGamesCommand(message, commandString, args).then(console.log("API Query succeeded")).catch(e => console.log(e));
		}
		else {
			message.channel.send(`Games: command ${commandString} not recognised.\nUse '!games help' for a list of available commands.`);
		}
	} 
	else {
		message.channel.send("Games: no argument found.\nUse '!games help' for a list of available commands.");
	}
}

// Asynchronous function that queries the OpenCritic api
async function handleGamesCommand(message, commandString, args) {
	//const Discord = require('discord.js');
	const fetch = require('node-fetch');
	const paginationEmbed = require('./../plugins/pagination.js');

	var gamePages = [];

	switch(commandString.toLowerCase()) {
		case 'help':
			const embed = new Discord.MessageEmbed()
			.setTitle("Games Commands")
			.setThumbnail(openLogo)
			.setURL("https://opencritic.com");
			for ( const [key, value] of Object.entries(gamesCommands) ) {
				embed.addField(value,gamesDetails[key]);
			}
			message.channel.send({embeds: [embed]});
			break;
		case 'search':
			//Concatenates all remaining args to form the search prompt, if there are any
			const searchPrompt = encodeURIComponent(args.join(" "));
			if ( searchPrompt.length ) {
				// We first search the terms, parse through all the result ids (max 10), then search each id to add game info to an embed page
				var searchUrl = "https://api.opencritic.com/api/game/search?criteria=" + searchPrompt;

				try {
					const response = await fetch(searchUrl);
					const data = await response.json();

					if ( data && data.length > 0 ) {
						for ( var i = 0; i < data.length; ++i) {
							if ( i == 0 || data[i].dist < 0.8 ) { // Dist goes from 0 (perfect match) to 1 (no match)
								searchUrl = "https://api.opencritic.com/api/game/" + data[i].id;
								const gameResponse = await fetch(searchUrl);
								const gameData = await gameResponse.json();
								gamePages.push(createGameEmbed(message, gameData));
							}
						}
						paginationEmbed(message, gamePages, true);
					}
					else {
						message.channel.send(`Kitsu: Couldn't find a result with the search term "${searchPrompt}"`);
					}
				} catch(err) {
					console.log(err);
				}
			}
			else {
				message.channel.send(`Games: No search terms have been given`);
			}
			break;
		case 'upcoming':
			//Display a list of upcoming games
			try {
				var upcomingEmbeds = [];
				const pageLimit = 8; // Max number of games per page

				for ( var i = 0; i < 5; ++i ) {
					var searchUrl = "https://api.opencritic.com/api/game?platforms=all&time=upcoming&order=asc&skip=" + (i*pageLimit*2).toString();
					console.log("Querying " + searchUrl);
					const response = await fetch(searchUrl);
					const data = await response.json();

					if ( data && data.length ) {
						// Separate pages by pageLimit
						var upcomingTableOne = [];
						var upcomingTableTwo = [];
						for ( var j = 0; j < Math.min(pageLimit,data.length); ++j ) {
							upcomingTableOne.push(collectBasicDetails(data[j]));
						}
						for ( j = pageLimit; j < Math.min(pageLimit*2,data.length); ++j ) {
							upcomingTableTwo.push(collectBasicDetails(data[j]));
						}
						upcomingEmbeds.push(createUpcomingEmbed(upcomingTableOne));
						// If there were less than 10 entries, then the 2nd table would be empty
						if ( upcomingTableTwo.length ) {
							upcomingEmbeds.push(createUpcomingEmbed(upcomingTableTwo));
						}

						// Stop looking for more results if the current request had less than 2*pageLimit entries
						if ( data.length < pageLimit*2 ) {
							break;
						}
					}
					else if ( !upcomingEmbeds.length ) {
						message.channel.send(`Games: Couldn't find a list of upcoming games on OpenCritic"`);
					}
				}
				paginationEmbed(message, upcomingEmbeds, true);

			} catch(err) {
				console.log(err);
			}
			break;
		case 'recent':
		default:
			break;
	}
}

// Handle JSON data and embed anime/manga message here
function createGameEmbed(message, data) {

	const descrLimit = 250;
	
	// Parse through platforms, genres and companies
	var platformString = parseArrayNames(data.Platforms, true);
	var genreString = parseArrayNames(data.Genres);
	var companiesString = parseArrayNames(data.Companies);
	var dateString = formatDate(data.firstReleaseDate);

	// Send embed to channel
	const embed = new Discord.MessageEmbed()
	.setTitle(data.name)
	.setThumbnail(data.logoScreenshot ? "https:" + data.logoScreenshot.thumbnail : openLogo)
	.setURL(data.url)
	.addField("Companies", companiesString.length ? companiesString : "N/A", true)
	.addField("Platforms", platformString.length ? platformString : "N/A", true)
	.addField("Release Date", dateString, true)
	.addField("Genres", genreString.length ? genreString : "N/A", true)
	.addField("Top Critic Rating", data.topCriticScore != -1 ? Math.floor(data.topCriticScore).toString() : "N/A", true)
	.addField("Avg Rating", data.averageScore != -1 ? Math.floor(data.averageScore).toString() : "N/A", true)
	.addField("Description", data.description && data.description.trim() ? (data.description.length > descrLimit ? data.description.substring(0, descrLimit-3) + "..." : data.description) : "N/A")
	.setTimestamp();

	if ( data.screenshots.length ) {
		embed.setImage("https:" + data.screenshots[0].thumbnail);
	}

	return embed;
}

// Handle JSON data and embed upcoming/recent games tables here
function createUpcomingEmbed(list) {

	// Create embed /*
	const embed = new Discord.MessageEmbed()
	.setTitle("Upcoming Releases")
	.setThumbnail(openLogo)
	.setURL("https://opencritic.com/browse/all/upcoming/date")
	.setTimestamp();

	listString = '';
	var lastDate = '';
	for ( i = 0; i < list.length; ++i) {
		if ( lastDate != list[i][2] ) {
			lastDate = list[i][2];
			if ( i > 0 ) {
				listString += "\n\n";
			}
			listString += "**" + formatDate(list[i][2]) + "**";
		}

		listString += "\n" + list[i][0] + " (" + parseArrayNames(list[i][1], true) + ")";
		
		/*
		embed.addField('\u200b', list[i][0].length ? "**" + list[i][0] + "**" : "**N/A**")
		.addField('\u200b', formatDate(list[i][2]), true)
		.addField('\u200b', parseArrayNames(list[i][1], true), true)*/
	}
	
	embed.addField('\u200b', listString );

	return embed;
}

function parseArrayNames(list, shortName = false) {

	var namesString = list ? '' : "N/A";
	if ( list && list.length ) {
		for (var i = 0; i < list.length; ++i) {
			namesString += (i > 0 ? ", " : "" ) + (shortName ? list[i].shortName : list[i].name);
		}
	} else {
		console.log("No entries found");
	}

	return namesString;
}

function formatDate(fullDate) {

	var date = new Date(fullDate);
	var dateString = 'N/A';
	if ( date.toString() != 'Invalid Date' ) {
		dateString = date.getUTCFullYear().toString() + "-" + (date.getUTCMonth()+1).toString() + "-" + date.getUTCDate().toString();
	}
	
	return dateString;
}

// Data used for upcoming/recent games tables
function collectBasicDetails(data) {
	var basicDetails = [data.name, data.Platforms, data.firstReleaseDate/*, data.Genres*/];
	return basicDetails;
}