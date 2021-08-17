// Possible arguments
const gamesCommands = {
'help': 'help',
'search': 'search game_name', 
'upcoming': 'upcoming'
}
const gamesDetails = {
'help': 'Show a list of available commands',
'search': 'Search a game.',// If no search terms are given, a random one will be returned', 
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
	const Discord = require('discord.js');
	const fetch = require('node-fetch');
	const paginationEmbed = require('./../plugins/pagination.js');

	var gamePages = [];

	switch(commandString.toLowerCase()) {
		case 'help':
			const embed = new Discord.MessageEmbed()
			.setTitle("Games Commands")
			.setThumbnail("https://pbs.twimg.com/profile_images/788570574687604737/LnEOrVcP_400x400.jpg")
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
						for ( var i = 0; i < Math.min(10,data.meta.count); ++i) {
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
			var searchUrl = "https://api.opencritic.com/api/game/upcoming";

			console.log("Querying " + searchUrl);
			try {
				const response = await fetch(searchUrl);
				const data = await response.json();

				if ( data && data.length ) {
					console.log("Found " + data.length.toString() + " results");

					for ( var i = 0; i < data.length; ++i ) {
						var gameEmbed = createGameEmbed(message, data[i]);
						gamePages.push(gameEmbed);
					}
					paginationEmbed(message, gamePages, true);
				}
				else {
					message.channel.send(`Games: Couldn't find a list of upcoming games on OpenCritic"`);
				}
			} catch(err) {
				console.log(err);
			}
			break;
		default:
			break;
	}
}

// Handle JSON data and embed anime/manga message here
function createGameEmbed(message, data) {
	const Discord = require('discord.js');

	// Parse through genres
	var genreString = '';
	if ( data.Genres.length ) {
		for (var i = 0; i < data.Genres.length; ++i) {
			genreString += (i > 0 ? ", " : "" ) + data.Genres[i].name;
		}
	} else {
		console.log("No genres found");
	}
	// Parse through platforms
	var platformString = '';
	if ( data.Platforms.length ) {
		for (var i = 0; i < data.Platforms.length; ++i) {
			platformString += (i > 0 ? ", " : "" ) + data.Platforms[i].shortName;
		}
	} else {
		console.log("No platforms found");
	}
	// Parse through companies
	var companiesString = '';
	if ( data.Companies.length ) {
		for (var i = 0; i < data.Companies.length; ++i) {
			companiesString += (i > 0 ? ", " : "" ) + data.Companies[i].name;
		}
	} else {
		console.log("No platforms found");
	}

	var date = new Date(data.firstReleaseDate);
	var dateString = 'N/A';
	if ( date.toString() != 'Invalid Date' ) {
		dateString = date.getUTCFullYear().toString() + "-" + (date.getUTCMonth()+1).toString() + "-" + date.getUTCDate().toString();
	}

	// Send embed to channel
	const embed = new Discord.MessageEmbed()
	.setTitle(data.name)
	.setThumbnail(data.logoScreenshot ? data.logoScreenshot.thumbnail : "https://pbs.twimg.com/profile_images/788570574687604737/LnEOrVcP_400x400.jpg")
	.setURL(data.url)
	.addField("Platforms", platformString.length ? platformString : "N/A", true)
	.addField("Companies", companiesString.length ? companiesString : "N/A", true)
	.addField("Avg Rating", data.averageScore != -1 ? data.averageScore.toString() : "N/A", true)
	.addField("Genres", genreString.length ? genreString : "N/A", true)
	.addField("Release Date", dateString, true)
	.addField("Top Critic Rating", data.topCriticScore != -1 ? data.topCriticScore.toString() : "N/A", true)
	.addField("Description", data.description && data.description.trim() ? (data.description.length > 500 ? data.description.substring(0, 497) + "..." : data.description) : "N/A");

	if ( data.screenshots.length ) {
		embed.setImage(data.screenshots[0].fullRes);
	}

	return embed;
}