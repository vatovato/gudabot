exports.run = (client, message, connection, args) => {
var username = message.author.username;
var userID = message.author.id;
if(args.length < 2) {
  message.channel.send(`${username} you did not use the command correctly. Add your nickname first and then the wishlist.`);
  return;
}

var nickname = message.member.nickname;
var wishlist = args.toString().replace(/,/g, " ");
var defaultImage = "https://i.imgur.com/bqd5u1r.png";


  console.log(nickname + " wants to add / update his wishlist.");
  connection.query(`SELECT * FROM wishlist WHERE userID ='${userID}'`, function(err, rows, fields) {
    if (err) throw err;
    if(rows.length == 0) {
      console.log("User did not exist. Creating.");
      connection.query(`INSERT INTO wishlist SET userID = '${userID}', username = '${username}', nickname = '${nickname}', wishlist = '${wishlist}', imageURL = '${defaultImage}'`);
      message.channel.send(`**${nickname}**, you have created your wishlist as **${wishlist}**.`);
    } else {
      console.log("User already exists. Updating.");
      connection.query(`UPDATE wishlist SET nickname = '${nickname}', wishlist = '${wishlist}'  WHERE userID = '${userID}'`);
      message.channel.send(`**${nickname}**, you have updated your wishlist to **${wishlist}**.`);
    }
  });

}
