const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
    /* const umu = client.emojis.get("401386848796016650");
    message.reply(`${umu}`); */

    const embed = new Discord.RichEmbed()
        .setTitle("UMU","umu")
        .setImage("https://cdn.discordapp.com/emojis/401386848796016650.png")
        .setDescription("umu")
        .setFooter("umu")
        .addField("umu","umu",true)

    message.channel.send({ embed });
};
