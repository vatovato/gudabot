exports.run = (client, message, connection, args) => {

var userID = message.author.id;
var username = message.author.username;
var nickname = message.member.nickname;
var wishowner = '';
const Discord = require('discord.js');

console.log("args: " + args);
//if the user only calls !wishlist, it assumes it's asking for its own wishlist. Otherwise it looks for the args in the db
if(args == "") {
console.log(username + " (" + nickname + ") wants to call his wishlist.");
connection.query(`SELECT * FROM wishlist WHERE userID = '${userID}'`, function(err, rows, fields) {
  if(err) throw err;
  if(rows.length == 0) {
    message.channel.send(`${username} you're not on the list yet. Use !addwl [wishlist] first.`);
  } else {
    var userUsername = rows[0].username;
    var userNickname = rows[0].nickname;
    var userWishlist = rows[0].wishlist;
    var embedName = '';
      if(userNickname == "null") {
        embedName = userUsername;
      } else {
        embedName = userNickname;
      }
    var image = rows[0].imageURL;
    const embed = new Discord.MessageEmbed()
    .setTitle(`${embedName}'s Wishlist`)
    .setThumbnail(image)
    .setDescription(userWishlist)
    message.channel.send(embeds: [embed]);
  }
});

}
 else {
  wishowner = args.toString().replace(/,/g, " ");
  console.log(username + " wants to call " + wishowner + "'s wishlist.");
  connection.query(`SELECT * FROM wishlist WHERE username LIKE '%${wishowner}%'`, function(err, rows, fields) {
    if (err) throw err;
    if(rows.length == 0) {
      connection.query(`SELECT * FROM wishlist WHERE nickname LIKE '%${wishowner}%'`, function(err2, rows2, fields2) {
        if (err2) throw err2;
        if(rows2.length == 0) {
          message.channel.send(`I can't find anybody with that name in the database.`);
        } else {
          var userNickname = rows2[0].nickname;
          var userWishlist = rows2[0].wishlist;
          var image = rows2[0].imageURL;
          const embed = new Discord.MessageEmbed()
          .setTitle(`${userNickname}'s Wishlist`)
          .setThumbnail(image)
          .setDescription(userWishlist)
          message.channel.send(embeds: [embed]);
        }
      });
    } else {
      var userUsername = rows[0].username;
      var userWishlist = rows[0].wishlist;
      var image = rows[0].imageURL;
      const embed = new Discord.MessageEmbed()
      .setTitle(`${userUsername}'s Wishlist`)
      .setThumbnail(image)
      .setDescription(userWishlist)
      message.channel.send(embeds: [embed]);
    }
  });
}
}
