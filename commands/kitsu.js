exports.run = (client, message, args) => {

  const fetch = require('node-fetch');

  // Possible arguments
  const kitsuCommands = {
	'help': 'help',
	'anime': 'anime anime_name', 
	'manga': 'manga manga_name'
  }
  const kitsuDetails = {
	'help': 'Returns a list of available commands',
	'anime': 'Returns an anime that matches the search prompt', 
	'manga': 'Returns a manga that matches the search prompt'
  }

  if ( args.length && args[0].toLowerCase() in kitsuCommands ) {

		switch(args[0].toLowerCase()) {
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
				break;
			case 'manga':
				break;
			default:
				break;
		}
		/*
		//Concatenates all args to form the servant name called for the function
		var servantName = args.join(" ").toLowerCase();
		var invalidServantName = args.join("+").toLowerCase();
		var searchUrl = "https://www.google.com.ar/search?q=" + invalidServantName + "+site%3Ahttps%3A%2F%2Fapps.atlasacademy.io";

		fetch('https://api.atlasacademy.io/export/JP/nice_servant_lang_en.json')
		.then(response => response.json())
			.then(data => {
			for ( var i = 0; i < data.length; ++i ) {
				if ( data[i].name.toLowerCase() == servantName ) {
				let commandFile2 = require(`./scrapeServant.js`);
				commandFile2.run(data[i], client, message);
				return;
				}
			}
			message.channel.send(`Invalid Servant name. Try Google: ${searchUrl}`);
			})*/
  } else {
		message.channel.send(`Kitsu: ${args[0].toLowerCase()} argument not recognised. 
							 Use "!kitsu help" for a list of available commands.`);
  }
}
