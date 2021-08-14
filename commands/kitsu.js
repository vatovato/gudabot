exports.run = (client, message, args) => {
	const Discord = require('discord.js');
	const fetch = require('node-fetch');

	// Possible arguments
	const kitsuCommands = {
	'help': 'help',
	'anime': 'anime anime_name', 
	'manga': 'manga manga_name'
	}
	const kitsuDetails = {
	'help': 'Shows a list of available commands',
	'anime': 'Returns an anime that matches the search prompt', 
	'manga': 'Returns a manga that matches the search prompt'
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
					//Concatenates all remaining args to form the search prompt
					const searchPrompt = encodeURIComponent(args.join(" "));
					var searchUrl = "https://kitsu.io/api/edge/" + commandString + "?" + searchPrompt;
					
					fetch(searchUrl)
					.then(response => response.json())
						.then(data => {
							console.log("Found " + data.data.length.toString() + " results");
							if ( data.data.length ) {
								const bestResult = data.data[0].attributes;
								const embed = new Discord.MessageEmbed()
								.setTitle(bestResult.canonicalTitle + "(" + bestResult.startDate.slice(0, 4) + ")")
								.setThumbnail(bestResult.posterImage.tiny)
								.setURL("https://kitsu.io/" + commandString + "/" + bestResult.slug)
								.addField("Popularity Rank", bestResult.popularityRank, true)
								.addField("Rating Rank", bestResult.ratingRank, true)
								.addField("Approval", bestResult.averageRating + "%", true)
								.addField("Age Rating", bestResult.ageRating, true)
								.addField("Synopsis", bestResult.synopsis.length > 1000 ? bestResult.synopsis.substring(0, 997) + "..." : bestResult.synopsis)
								message.channel.send({embeds: [embed]});
							}
							else {
								message.channel.send(`Kitsu: couldn't find a result with the search term "${searchPrompt}"`);
							}
						})
					break;
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
