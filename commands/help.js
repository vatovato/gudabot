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
  .addField("**Meme functions**","!umu, !padoru, !weeb, !officer...")

message.channel.send({embed}).catch(console.error);
}
