exports.run = (client, message, args) => {

//message.channel.send("Sorry, turns out persistence isn't free in Heroku so no automatic friend code adding and calling.");
var authorId = message.author.id;
console.log("authorId: " + authorId);
var authorName = message.author.username;
var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_URL);

//connection.connect();

  console.log(authorName + " wants to call his friend code.");
  connection.query(`SELECT * FROM friends WHERE userId ='${authorId}'`, function(err, rows, fields) {
    if (err) throw err;
    if(rows.length == 0) {
      console.log("User did not exist.");
      message.channel.send(`**${authorName}**, you did not create your entry yet. Use !addfc friend_code. For example, !addfc 123,123,123.`);
    } else {
      var friendCode = rows[0].friendCode;
      message.channel.send(`**${authorName}**, your Friend Code is **${friendCode}**.`);
    }
  });
connection.end();
}
