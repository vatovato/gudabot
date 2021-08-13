exports.run = (client, message, args) => {
const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
  .setTitle("List of Bot commands")
  .setColor(0x00AE86)
  .setThumbnail("https://cdn.discordapp.com/avatars/400632904553725952/3a9d2c61bd096f6b57aa5cc8d625698b.png")
  .addField("**!ascension** servant_name","List of cost and materials for servant's ascension. For characters with multiple versions, try their job first (e.g. saber shiki).")
  .addField("**!skill servant_name**","List of cost and materials for servant's skill ascension. Works the same as !ascension.")
  .addField("**!event**","URL to the current or future event.")
  .addField("**!help**","You just used this one...")
  .addField("**!image servant_name [0-3]**","Brings the Ascension level image for the requested Servant, where 0 is the base level and 3 is the final ascension level (e.g. !image salter 0).")
  .addField("**!npchart**","Link to NP Damage Comparisons")
  .addField("**!master** or **!masterwiki**","Brings the Weekly Master Missions and their recommended areas")
  .addField("**!servant**","Brings some servant information and a link to the servant's cirnopedia")
  .addField("**!valentine**","Shows current and next servant rate ups for Valentine event")
  .addField("**!yt [search_string]**","Returns a link to YouTube with the search string")
  .addField("**!bondce [servant_name]**","Brings the Bond CE for the Servant")
  .addField("**!drop [material_name]**","Brings the best farming spot for the Material")
  .addField("**!daily**","Daily EXP Cards and Training Grounds")
  .addField("**!addfc [friend code] & !myfc**","!addfc [friend code] adds your friend code and any other information you may need to a database, which you can then call back with !myfc every time you have a slot open and want to add friends from this channel")
  .addField("**!roll10 & !myrolls & !resetrolls**", "!roll10 simulates using 30 Quartz in game to summon 10 cards. !myrolls tells you how much money and quartz you've spent, while !resetrolls resets that counter back to zero.")
  .addField("**!quartz [end_date format YYYY-MM-DD] [total logins] [login streak]", "Returns an approximate amount of quartz and tickets you get from today until the end date. You must provide all three variables, like so: !quartz 2018-04-04 120 50, where the date is March 4th, your total login count is 120 and your current login streak is 50.")
  .addField("**!friendlist**", "Link to the Excel with the names of Era / Discord users for adding friends")
  .addField("!wl & !wlimage & !addwl", "Add your wishlist with !addwl, then call your wishlist with !wl or a friend's wishlist with !wl [username]. Add an image with !wlimage [servant_name]")
  .addField("!addrole & !deleterole", "Adds or deletes user from the Notifications role, which is used to ping FGO related notifications to those who want to receive them.")
  .addField("**Meme functions**","!umu, !padoru, !weeb, !officer...")

message.channel.send({embeds: [embed]}).catch(console.error);
}
