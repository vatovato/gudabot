exports.run = (client, message, connection) => {

var authorId = message.author.id;
console.log("authorId: " + authorId);
var authorName = message.author.username;


  console.log(authorName + " wants to delete themselves from the shout list.");
  connection.query(`SELECT * FROM shout WHERE userId ='${authorId}'`, function(err, rows, fields) {
    if (err) throw err;
    if(rows.length == 0) {
      console.log("User did not exist.");
      message.channel.send(`**${authorName}**, you do not exist in the shout list.`);
    } else {
      connection.query(`DELETE FROM shout WHERE userId = '${authorId}'`);
      message.channel.send(`**${authorName}**, you have been deleted from the shout list.`);
    }
  });
 }
