
exports.run = (client, message, connection, args) => {
    var authorId = message.author.id;
    var authorName = message.author.username;
    var shoutMessage = args.join(" ");
    var client = client;
    var message = message;
    var userCounter = 0;
    var i;
    var userList = "";
    //gryffinp, kayos, sabin, shinogu, t-rex, furiosa
    if(authorId === "144201667431235584" || authorId === "137954749017358337" || authorId === "158237803275223041" || authorId === "187258463095619584" || authorId === "332174054477922306" || authorId === "329439336577761280") {
    console.log(`${authorName} is shouting the message: ${shoutMessage}`);
    connection.query(`SELECT COUNT(*) AS userCount FROM shout`, function(err, rows, fields) {
      if (err) throw err;
      userCounter = rows[0].userCount;
      console.log("userCounter: " + userCounter);
    });
    connection.query(`SELECT userId FROM shout`, function(err2, rows2, fields2) {
      for (i = 0; i < userCounter; i++) {
        var rowUser = rows2[i].userId;
        userList += `<@${rowUser}> `;
      }
      console.log("userList: " + userList);
      message.channel.send(`${userList}: ${shoutMessage}`);
    });

} else {
  message.channel.send(`You're not a mod <:disgust:427625929909600266>`);
 }
}
