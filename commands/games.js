// Constants
const openLogo = "https://pbs.twimg.com/profile_images/788570574687604737/LnEOrVcP_400x400.jpg";
const Discord = require('discord.js');

// Possible arguments
const gamesCommands = {
'help': 'help',
//'search': 'search game_name', 
'upcoming': 'upcoming <optional: detailed>'//,
//'recent': 'recent'
}
const gamesDetails = {
'help': 'Show a list of available commands',
//'search': 'Search a game.',// If no search terms are given, a random one will be returned', 
'upcoming': 'Show a list of upcoming games',
//'recent': 'Show a list of recently released games'
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
				var searchUrl = "https://kitsu.io/api/edge/" + commandString + "?filter[text]=" + searchPrompt + "&include=genres";

				console.log("Querying " + searchUrl);
				try {
					const response = await fetch(searchUrl);
					const data = await response.json();

					console.log("Found " + data.meta.count.toString() + " results");
					if ( data.meta.count > 0 ) {
						var embedPages = [];
						var upcomingTable = [];
						for ( var i = 0; i < Math.min(10,data.meta.count); ++i) {
							upcomingTable.push([data.name, data.Platforms, data.firstReleaseDate]);
							embedPages.push(createGameEmbed(message, commandString, data.data[i].attributes, data.included));
						}
						paginationEmbed(message, embedPages, true, 120000);
					}
					else {
						message.channel.send(`Kitsu: Couldn't find a result with the search term "${searchPrompt}"`);
					}
				} catch(err) {
					console.log(err);
				}
			}
			else {
				message.channel.send(`Kitsu: Searching a random ${commandString}`);
				console.log("Querying the api for a random result");
				try {
					// Query manga/anime for total number of entries
					const response = await fetch("https://kitsu.io/api/edge/" + commandString);
					const data = await response.json();

					// Lookup a random entry
					var randomNumber = Math.floor(Math.random() * data.meta.count);
					var randomUrl = "https://kitsu.io/api/edge/" + commandString + "?page[limit]=1&page[offset]=" + randomNumber.toString() + "&include=genres";
					console.log("Querying " + randomUrl);
					const randResponse = await fetch(randomUrl);
					const randItem = await randResponse.json();

					var randomEmbed = createGameEmbed(message, commandString, randItem.data[0].attributes, randItem.included);
					message.channel.send({embeds: [randomEmbed]});

				} catch(err) {
					console.log(err);
				}
			}
			break;
		case 'upcoming':
			//Display a list of upcoming games
			try {
				var upcomingEmbeds = [];

				for ( var i = 0; i < 5; ++i ) {
					var searchUrl = "https://api.opencritic.com/api/game?platforms=all&sort=date&time=upcoming&order=asc&skip=" + (i*20).toString();
					const response = await fetch(searchUrl);
					const data = await response.json();

					if ( data && data.length ) {
						//console.log("Found " + data.length.toString() + " upcoming games results");
						// Separate pages by 10 entries
						var upcomingTableOne = [];
						var upcomingTableTwo = [];
						for ( var j = 0; j < Math.min(10,data.length); ++j ) {
							upcomingTableOne.push(collectBasicDetails(data[j]));
						}
						for ( j = 10; j < Math.min(20,data.length); ++j ) {
							upcomingTableOne.push(collectBasicDetails(data[j]));
						}
						upcomingEmbeds.push(createUpcomingEmbed(upcomingTableOne));
						// If there were less than 10 entries, then the 2nd table would be empty
						if ( upcomingTableTwo.length ) {
							upcomingEmbeds.push(createUpcomingEmbed(upcomingTableTwo));
						}

						// Stop looking for more results if the current request had less than 20 entries
						if ( data.length != 20 ) {
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

	// Create embed
	
	var nameColumn = '';
	var platformsColumn = '';
	var dateColumn = '';

	// Parse through lists
	for ( var i = 0; i < list.length; ++i ) {
		if ( i > 0 ) {
			nameColumn += "\n";
			platformsColumn += "\n";
			dateColumn += "\n";
		}
		nameColumn += list[i][0];
		// Trim platform string as it can be too long for the narrow embed field column
		const platformsString = parseArrayNames(list[i][1]);
		platformsColumn += platformsString.length > 20 ? platformsString.subString(0, 17) + "..." : platformsString;
		dateColumn += formatDate(list[i][2]);
	}
	
	// Create embed
	const embed = new Discord.MessageEmbed()
	.setTitle("Upcoming Releases")
	.setThumbnail(openLogo)
	.setURL("https://opencritic.com/browse/all/upcoming/date")
	.addField("Name", nameColumn.length ? nameColumn : "N/A", true)
	.addField("Platforms", platformsColumn.length ? platformsColumn : "N/A", true)
	.addField("Release Date", dateColumn.length ? dateColumn : "N/A", true)
	.setTimestamp();

	/*
	const embed = new Discord.MessageEmbed()
	.setTitle("Upcoming Releases")
	.setThumbnail(openLogo)
	.setURL("https://opencritic.com/browse/all/upcoming/date")
	.setTimestamp();

	for ( i = 0; i < list.length; ++i) {
		embed.addField("Name", list[i][0].length ? list[i][0] : "N/A")
		.addField("ReleaseDate", formatDate(list[i][2]), true)
		.addField("Platforms", parseArrayNames(list[i][1], true), true)
	}*/

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