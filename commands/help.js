exports.run = (client, message, args) => {
const Discord = require('discord.js');

const embed = new Discord.RichEmbed()
  .setTitle("List of Bot commands")
  .setColor(0x00AE86)
  .setThumbnail("https://cdn.discordapp.com/avatars/400632904553725952/3a9d2c61bd096f6b57aa5cc8d625698b.png")
  .addField("**!ascension** servant_name","List of cost and materials for servant's ascension. For characters with multiple versions, try their job first (e.g. saber shiki).")
  .addField("**!skill servant_name**","List of cost and materials for servant's skill ascension. Works the same as !ascension.")
  .addField("**!event**","URL to the current or future event.")
  .addField("**!help**","You just used this one...")
  .addField("**!image servant_name [0-3]**","Brings the Ascension level image for the requested Servant, where 0 is the base level and 3 is the final ascension level (e.g. !image salter 0).")
  .addField("**!npchart**","Link to NP Damage Comparisons")
  .addField("**!master**","Brings the Weekly Master Missions and their recommended areas")
  .addField("**!servant**","Brings some servant information and a link to the servant's cirnopedia")
  .addField("**!valentine**","Shows current and next servant rate ups for Valentine event")
  .addField("**!yt [search_string]**","Returns a link to YouTube with the search string")
  .addField("**!bondce [servant_name]**","Brings the Bond CE for the Servant")
  .addField("**!drop [material_name]**","Brings the best farming spot for the Material")
  .addField("**Meme functions**","!umu, !padoru, !weeb, !officer...")

message.channel.send({embed}).catch(console.error);
}
