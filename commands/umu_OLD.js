const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
    /* const umu = client.emojis.get("401386848796016650");
    message.reply(`${umu}`); */
var umuType = args.join(" ").toLowerCase();

if(umuType == "rojo" or "") {
    const embed = new Discord.MessageEmbed()
        .setTitle("UMU","umu")
        .setImage("https://cdn.discordapp.com/emojis/401386848796016650.png")
        .setDescription("umu")
        .setFooter("umu")
        .addField("umu","umu",true)

    message.channel.send({ embed });
  } else if (umuType == "blanco") {
    const embedBlanco = new Discord.MessageEmbed()
    .setTitle("UMU","umu")
    .setImage("https://i.imgur.com/Z8amJs7.png")
    .setDescription("umu")
    .setFooter("umu")
    .addField("umu","umu",true)
    message.channel.send({embedBlanco});
  }
};
