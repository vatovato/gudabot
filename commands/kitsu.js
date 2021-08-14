// Called by bot.js when kitsu command is given
exports.run = (client, message, args) => {
	const Discord = require('discord.js');
	const fetch = require('node-fetch');

	// Possible arguments
	const kitsuCommands = {
	'help': 'help',
	'anime': 'anime anime_name', 
	'manga': 'manga manga_name',
	'user': 'user username'
	}
	const kitsuDetails = {
	'help': 'Shows a list of available commands',
	'anime': 'Returns an anime that matches the search prompt', 
	'manga': 'Returns a manga that matches the search prompt',
	'user': 'Shows info about a specific user'
	}

	if ( args.length ) {
		const commandString = args.shift();
		if ( commandString in kitsuCommands ) {
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
						fetch(searchUrl)
						.then(response => response.json())
							.then(data => {
								console.log("Found " + data.meta.count.toString() + " results");
								if ( data.meta.count > 0 ) {
									//const bestResult = data.data[0].attributes;

									createEmbed(commandString, data.data[0].attributes);

									/*
									const embed = new Discord.MessageEmbed()
									.setTitle(bestResult.canonicalTitle + " (" + bestResult.startDate.slice(0, 4) + ")")
									.setThumbnail(bestResult.posterImage.tiny)
									.setURL("https://kitsu.io/" + commandString + "/" + bestResult.slug)
									.addField("Popularity Rank", bestResult.popularityRank ? bestResult.popularityRank.toString() : "N/A", true)
									.addField("Rating Rank", bestResult.ratingRank ? bestResult.ratingRank.toString() : "N/A", true)
									.addField("Approval", bestResult.averageRating ? bestResult.averageRating + "%" : "N/A", true)
									.addField("Status", bestResult.status ? bestResult.status[0].toUpperCase() + bestResult.status.substring(1) : "N/A", true)
									.addField("Age Rating", bestResult.ageRating ? bestResult.ageRating + (bestResult.ageRatingGuide ? "- " + bestResult.ageRatingGuide : "") : "N/A", true)
									.addField("Synopsis", bestResult.synopsis.length > 1000 ? bestResult.synopsis.substring(0, 997) + "..." : bestResult.synopsis)
									message.channel.send({embeds: [embed]});*/
								}
								else {
									message.channel.send(`Kitsu: couldn't find a result with the search term "${searchPrompt}"`);
								}
							})
					}
					else {
						message.channel.send(`Kitsu: no search terms have been given`);
					}
					break;
				case 'user':
				default:
					break;
			}
		}
		else {
			message.channel.send(`Kitsu: command ${commandString} not recognised.\nUse '!kitsu help' for a list of available commands.`);
		}
	} 
	else {
		message.channel.send("Kitsu: no argument found.\nUse '!kitsu help' for a list of available commands.");
	}
}

// Handle JSON data and embed message here
function createEmbed(type, item) {
	const Discord = require('discord.js');

	switch(type) {
		case 'anime':
		case 'manga':
			const embed = new Discord.MessageEmbed()
			.setTitle(item.canonicalTitle + " (" + item.startDate.slice(0, 4) + ")")
			.setThumbnail(item.posterImage.tiny)
			.setURL("https://kitsu.io/" + type + "/" + item.slug)
			.addField("Popularity Rank", item.popularityRank ? item.popularityRank.toString() : "N/A", true)
			.addField("Rating Rank", item.ratingRank ? item.ratingRank.toString() : "N/A", true)
			.addField("Approval", item.averageRating ? item.averageRating + "%" : "N/A", true)
			.addField("Status", item.status ? item.status[0].toUpperCase() + item.status.substring(1) : "N/A", true)
			.addField("Age Rating", item.ageRating ? item.ageRating + (item.ageRatingGuide ? "- " + item.ageRatingGuide : "") : "N/A", true)
			.addField("Synopsis", item.synopsis.length > 1000 ? item.synopsis.substring(0, 997) + "..." : item.synopsis)
			message.channel.send({embeds: [embed]});
		case 'user':
		default:
			break;
	}
}