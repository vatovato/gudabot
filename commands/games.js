// Constants
const Discord = require('discord.js');
const fetch = require('node-fetch');
const gamesLogo = "https://pbs.twimg.com/profile_images/1186326995254288385/_LV6aKaA_400x400.jpg";

// Possible arguments
const gamesCommands = {
'help': 'help',
'search': 'search game_name', 
'upcoming': 'upcoming'
}
const gamesDetails = {
'help': 'Show a list of available commands',
'search': 'Search a game.',
'upcoming': 'Show a list of upcoming games'
}

// Called by bot.js when games command is given
exports.run = (client, message, pool, args) => {

	if ( args.length ) {
		const commandString = args.shift();
		if ( commandString in gamesCommands ) {
			handleGamesCommand(message, pool, commandString, args).then().catch(e => console.log(e));
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
async function handleGamesCommand(message, pool, commandString, args) {
	const paginationEmbed = require('./../plugins/pagination.js');

	// Authentication
	var bearerToken = await gamesAuthenticate(message, pool);
	if ( !bearerToken || !bearerToken.length ) {
		message.channel.send(`Setting bot authentication details for first run...`);
		bearerToken = await onAuthenticationFail(message, pool);
	}

	if ( bearerToken && bearerToken.length ) {
		var gamePages = [];

		switch(commandString.toLowerCase()) {
			case 'help':
				const embed = new Discord.MessageEmbed()
				.setTitle("Games Commands")
				.setThumbnail(gamesLogo)
				.setURL("https://opencritic.com");
				for ( const [key, value] of Object.entries(gamesCommands) ) {
					embed.addField(value,gamesDetails[key]);
				}
				message.channel.send({embeds: [embed]});

				break;
			case 'search':
				//Concatenates all remaining args to form the search prompt and make an API request to IGDB
				const searchPrompt = encodeURIComponent(args.join(" "));

				if ( searchPrompt.length ) {
					// We first search the terms, parse through all the result ids (max 10), then search each id to add game info to an embed page
					var searchBody = `search "${searchPrompt}" ; 
										fields aggregated_rating,
											cover.url,
											first_release_date,
											genres.name,
											involved_companies.company.name,
											name,
											platforms.abbreviation,
											url,
											screenshots.url,
											summary;
											where version_parent = null;`;
					var searchHeaders = new fetch.Headers();
					searchHeaders.append("Client-ID", process.env.IGDB_ID);
					searchHeaders.append("Authorization", "Bearer " + bearerToken);
					var requestOptions = {
						method: 'POST',
						headers: searchHeaders,
						body: searchBody
					};

					try {
						const response = await fetch("https://api.igdb.com/v4/games/", requestOptions);
						const data = await response.json();

						if ( data && data.length > 0 ) {
							for ( var i = 0; i < data.length; ++i) {
								gamePages.push(createGameEmbed(message, data[i]));
							}
							paginationEmbed(message, gamePages, true);
						}
						else {
							message.channel.send(`Games: Couldn't find a result with the search term "${searchPrompt}"`);
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
}

// Handle JSON data and embed anime/manga message here
function createGameEmbed(message, data) {

	const descrLimit = 250;
	
	// Parse through platforms, genres and companies
	var platformString = parseArrayNames(data.platforms, 'abbreviation');
	var genreString = parseArrayNames(data.genres);
	var companiesString = parseInvolvedCompanies(data.involved_companies, false, "id");
	var dateString = formatDate(data.first_release_date);

	// Send embed to channel
	const embed = new Discord.MessageEmbed()
	.setTitle(data.name)
	.setThumbnail(data.cover ? "https:" + data.cover.url : gamesLogo)
	.setURL(data.url ? data.url : "https://www.igdb.com/")
	.addField("Companies", companiesString.length ? companiesString : "N/A", true)
	.addField("Platforms", platformString.length ? platformString : "N/A", true)
	.addField("Release Date", dateString, true)
	.addField("Genres", genreString.length ? genreString : "N/A", true)
	.addField("Avg Rating", data.aggregated_rating ? Math.floor(data.aggregated_rating).toString() : "N/A", true)
	.addField("Description", data.summary && data.summary.trim() ? (data.summary.length > descrLimit ? data.summary.substring(0, descrLimit-3) + "..." : data.summary) : "N/A")
	.setTimestamp();

	return embed;
}

// Handle JSON data and embed upcoming/recent games tables here
function createUpcomingEmbed(list) {

	// Create embed /*
	const embed = new Discord.MessageEmbed()
	.setTitle("Upcoming Releases")
	.setThumbnail(gamesLogo)
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
	}
	
	embed.addField('\u200b', listString );

	return embed;
}

function parseArrayNames(list, nameKey = 'name') {

	var namesString = list ? '' : "N/A";
	if ( list && list.length ) {
		for (var i = 0; i < list.length; ++i) {
			namesString += (i > 0 ? ", " : "" ) + list[i][nameKey];
		}
	} else {
		console.log("No entries found");
	}

	return namesString;
}

function parseInvolvedCompanies(list) {

	var namesString = list ? '' : "N/A";
	if ( list && list.length ) {
		for (var i = 0; i < list.length; ++i) {
			namesString += (i > 0 ? ", " : "" ) + list[i].company.name;
		}
	} else {
		console.log("No entries found");
	}

	return namesString;
}

function formatDate(unixTime) {

	var date = new Date(unixTime*1000);
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

async function gamesAuthenticate(message, pool) {
	
	var bearerToken = '';
	const [rows,fields] = await pool.promise().query(`SELECT * FROM tokens WHERE service = 'twitch'`);

	if(rows && rows[0].bearer) {
		return rows[0].bearer;
	}
}

async function onAuthenticationFail(message, pool) {
	console.log("Games: Twitch authentication failed! Attempting to create a new token")
	var bearerToken = '';

	try {
		var authUrl = "https://id.twitch.tv/oauth2/token?client_id=" + process.env.IGDB_ID + "&client_secret=" + process.env.IGDB_SECRET + "&grant_type=client_credentials";
		const response = await fetch(authUrl, {method: 'post'});
		const data = await response.json();

		if ( data && data.access_token ) {
			bearerToken = data.access_token;
            pool.query(`UPDATE tokens SET bearer = '${bearerToken}' WHERE service = 'twitch'`);
            message.channel.send(`Games: Database authentication update complete. Please try again.`);
		} else {
			message.channel.send(`Games: Database authentication failed. Please contact the bot's dev.`);
		}

	} catch(err) {
		console.log(err);
	}

	return bearerToken;
}