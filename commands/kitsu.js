// Called by bot.js when kitsu command is given
exports.run = (client, message, args) => {

	// Possible arguments
	const kitsuCommands = {
	'help': 'help',
	'anime': 'anime anime_name', 
	'manga': 'manga manga_name',
	'user': 'user username'
	}
	const kitsuDetails = {
	'help': 'Shows a list of available commands',
	'anime': 'Search an anime. If no search terms are given, a random one will be returned', 
	'manga': 'search a manga. If no search terms are given, a random one will be returned',
	'user': 'Shows info about a specific user'
	}

	if ( args.length ) {
		const commandString = args.shift();
		if ( commandString in kitsuCommands ) {
			handleKitsuCommand(message, commandString, args).then(console.log("API Query succeeded")).catch(e => console.log(e));
		}
		else {
			message.channel.send(`Kitsu: command ${commandString} not recognised.\nUse '!kitsu help' for a list of available commands.`);
		}
	} 
	else {
		message.channel.send("Kitsu: no argument found.\nUse '!kitsu help' for a list of available commands.");
	}
}

// Asynchronous function that queries the Kitsu api
async function handleKitsuCommand(message, commandString, args) {
	const fetch = require('node-fetch');
	switch(commandString.toLowerCase()) {
		case 'help':
			const embed = new Discord.MessageEmbed()
			.setTitle("Kitsu Commands")
			.setThumbnail("https://kitsu.io/kitsu-256-ed442f7567271af715884ca3080e8240.png")
			.setURL("https://kitsu.io/");
			for ( const [key, value] of Object.entries(kitsuCommands) ) {
				embed.addField(value,kitsuDetails[key]);
			}
			message.channel.send({embeds: [embed]});
			break;
		case 'anime':
		case 'manga':
			//Concatenates all remaining args to form the search prompt, if there are any
			const searchPrompt = encodeURIComponent(args.join(" "));
			if ( searchPrompt.length ) {
				var searchUrl = "https://kitsu.io/api/edge/" + commandString + "?filter[text]=" + searchPrompt;

				console.log("Querying " + searchUrl);
				try {
					const response = await fetch(searchUrl);
					const data = await response.json();

					console.log("Found " + data.meta.count.toString() + " results");
					if ( data.meta.count > 0 ) {
						console.log("Querying " + data.data[0].relationships.genres.links.related);
						const genreResponse = await fetch(data.data[0].relationships.genres.links.related);
						const genreData = await genreResponse.json();
						createAnimeEmbed(message, commandString, data.data[0].attributes, genreData.data);
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
					console.log("Querying " + "https://kitsu.io/api/edge/" + commandString + "?page[limit]=1&page[offset]=" + randomNumber.toString());
					const randResponse = await fetch("https://kitsu.io/api/edge/" + commandString + "?page[limit]=1&page[offset]=" + randomNumber.toString());
					const randItem = await randResponse.json();
					
					// Query Genres
					console.log("Querying " + randItem.data[0].relationships.genres.links.related);
					const genreResponse = await fetch(randItem.data[0].relationships.genres.links.related);
					const genreData = await genreResponse.json();

					createAnimeEmbed(message, commandString, randItem.data[0].attributes, genreData.data);

				} catch(err) {
					console.log(err);
				}
			}
			break;
		case 'user':
			//Concatenates all remaining args to form the search prompt, if there are any
			const searchPrompt = encodeURIComponent(args.join(" "));
			if ( searchPrompt.length ) {
				var searchUrl = "https://kitsu.io/api/edge/users?filter[text]=" + searchPrompt;

				console.log("Querying " + searchUrl);
				try {
					const response = await fetch(searchUrl);
					const data = await response.json();

					console.log("Found " + data.meta.count.toString() + " results");
					if ( data.meta.count > 0 ) {
						
						// Query waifu data
						console.log("Querying " + data.data[0].relationships.waifu.links.related);
						const waifuResponse = await fetch(data.data[0].relationships.waifu.links.related);
						const waifuData = await waifuResponse.json();
						// Query stats data
						console.log("Querying " + data.data[0].relationships.stats.links.related);
						const statsResponse = await fetch(data.data[0].relationships.stats.links.related);
						const statsData = await statsResponse.json();
						// Query favorites data
						console.log("Querying " + data.data[0].relationships.favorites.links.related);
						const favoritesResponse = await fetch(data.data[0].relationships.favorites.links.related);
						const favoritesData = await favoritesResponse.json();

						createAnimeEmbed(message, commandString, data.data[0].attributes, waifuData.data, statsData.data, favoritesData.data);
					}
					else {
						message.channel.send(`Kitsu: Couldn't find a user called "${searchPrompt}"`);
					}
				} catch(err) {
					console.log(err);
				}
			}
			else {
				message.channel.send(`Kitsu: No username has been specified.`);
			}
			break;
		default:
			break;
	}
}

// Handle JSON data and embed anime/manga message here
function createAnimeEmbed(message, type, item, genres = null) {
	const Discord = require('discord.js');

	const contentFilter = {
	'hentai': 1,
	'doujinshi': 2, 
	'yaoi': 3
	}

	// Parse through genre JSON
	var genreString = '';
	if ( genres != null ) {
		for (var i = 0; i < genres.length; ++i) {
			genreString += (i > 0 ? ", " : "" ) + genres[i].attributes.name;
			if ( genres[i].attributes.name.toLowerCase() in contentFilter ) {
				message.channel.send(`Kitsu: Hentai content has been disabled, search result cannot be displayed.`);
				return;
			}
		}
	} else {
		console.log("No genres found");
	}

	// Send embed to channel
	const embed = new Discord.MessageEmbed()
	.setTitle(item.canonicalTitle + " (" + (item.startDate ? item.startDate.slice(0, 4) : "N/A") + ")")
	.setThumbnail(item.posterImage.tiny)
	.setURL("https://kitsu.io/" + type + "/" + item.slug)
	.addField("Popularity Rank", item.popularityRank ? item.popularityRank.toString() : "N/A", true)
	.addField("Rating Rank", item.ratingRank ? item.ratingRank.toString() : "N/A", true)
	.addField("Approval", item.averageRating ? item.averageRating + "%" : "N/A", true)
	.addField("Genres", genreString.length ? genreString : "N/A", true)
	.addField("Age Rating", item.ageRating ? item.ageRating + (item.ageRatingGuide ? "- " + item.ageRatingGuide : "") : "N/A", true)
	.addField("Status", item.status ? item.status[0].toUpperCase() + item.status.substring(1) : "N/A", true)
	.addField("Synopsis", item.synopsis && item.synopsis.trim() ? (item.synopsis.length > 1000 ? item.synopsis.substring(0, 997) + "..." : item.synopsis) : "N/A")
	message.channel.send({embeds: [embed]});
	}
}

// Handle JSON data and embed user message here
function createUserEmbed(message, type, item, waifu = null, stats = null, favourites = null) {
	const Discord = require('discord.js');

	// Parse through anime categories
	var animeCategoryString = 'N/A';
	var animeCategoryCount = 0;
	if ( stats != null ) {
		for (const genre in stats[1].attributes.statsData.categories) {
			if ( stats[1].attributes.statsData.categories[genre] > animeCategoryCount ) {
				animeCategoryCount = stats[1].attributes.statsData.categories[genre];
				animeCategoryString = genre;
			}
		}
	} else {
		console.log("No genres found");
	}
	// Parse through manga categories
	var mangaCategoryString = 'N/A';
	var mangaCategoryCount = 0;
	if ( stats != null ) {
		for (const genre in stats[3].attributes.statsData.categories) {
			if ( stats[1].attributes.statsData.categories[genre] > mangaCategoryCount ) {
				mangaCategoryCount = stats[3].attributes.statsData.categories[genre];
				mangaCategoryString = genre;
			}
		}
	} else {
		console.log("No genres found");
	}
	// Parse through favourite anime
	var mangaCategoryString = 'N/A';
	var mangaCategoryCount = 0;
	if ( stats != null ) {
		for (const genre in stats[3].attributes.statsData.categories) {
			if ( stats[1].attributes.statsData.categories[genre] > mangaCategoryCount ) {
				mangaCategoryCount = stats[3].attributes.statsData.categories[genre];
				mangaCategoryString = genre;
			}
		}
	} else {
		console.log("No genres found");
	}

	// Send embed to channel
	const embed = new Discord.MessageEmbed()
	.setTitle(item.name)
	.setThumbnail(item.avatar ? item.avatar : "https://kitsu.io/kitsu-256-ed442f7567271af715884ca3080e8240.png")
	.setURL("https://kitsu.io/users/" + item.slug)
	.addField("Waifu", waifu ? waifu.canonicalName : "N/A", true)
	.addField("Anime Finished", stats ? stats[0].attributes.statsData.completed : "0", true)
	.addField("Most Watched Genre", animeCategoryString + " (" + animeCategoryCount.toString() + ")", true)
	.addField("Content Rated", item.ratingsCount.toString(), true)
	.addField("Manga Finished", stats ? stats[2].attributes.statsData.completed : "0", true)
	.addField("Most Read Genre", mangaCategoryString + " (" + mangaCategoryCount.toString() + ")", true)
	.addField("Favorites", "N/A")

	if ( waifu ) {
		embed.setImage(waifu.image.original);
	}

	message.channel.send({embeds: [embed]});
	}
}