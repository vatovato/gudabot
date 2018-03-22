exports.run = (client, message, connection, args) => {

var userID = message.author.id;
var username = message.author.username;
var nickname = message.member.nickname;
var wishowner = '';

//if the user only calls !wishlist, it assumes it's asking for its own wishlist. Otherwise it looks for the args in the db
if(typeof(args) == "undefined") {
  wishowner = nickname;
} else {
  wishowner = args;
}

const Discord = require('discord.js');

console.log(nickname + " wants to call " + wishowner + "'s wishlist.");
connection.query(`SELECT * FROM wishlist WHERE nickname LIKE '%${wishowner}%'`, function(err, rows, fields) {
  if (err) throw err;
  if(rows.length == 0) {
    console.log("User did not exist.");
    message.channel.send(`**${nickname}**, the name you entered isn't even remotely similar to anything in the database. What the hell...`);
  } else {
    var userNickname = rows[0].nickname;
    var userWishlist = rows[0].wishlist;
    var image = rows[0].imageURL;
    const embed = new Discord.RichEmbed()
    .setTitle(`${userNickname}'s Wishlist`)
    .setThumbnail(image)
    .setDescription(`${userWishlist}`)
    message.channel.send({embed});
  }
});
}
