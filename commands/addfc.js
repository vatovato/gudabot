exports.run = (client, message, connection, args) => {

var authorId = message.author.id;
console.log("authorId: " + authorId);
var authorName = message.author.username;
var fc = args.join(" ");
console.log("friendCode: " + fc);

if(args.length == 0) {
  message.channel.send("You did not add your Friend Code. Use !addfc friend_code. For example, !addfc 123,123,123.");
} else {
  console.log(authorName + " wants to add / update his friend code.");
  connection.query(`SELECT * FROM friends WHERE userId ='${authorId}'`, function(err, rows, fields) {
    if (err) throw err;
    if(rows.length == 0) {
      console.log("User did not exist. Creating.");
      connection.query(`INSERT INTO friends SET userId = '${authorId}', friendCode = '${fc}'`);
      message.channel.send(`**${authorName}**, you have created your Friend Code as **${fc}**.`);
    } else {
      console.log("User already exists. Updating.");
      connection.query(`UPDATE friends SET friendCode = '${fc}' WHERE userId = '${authorId}'`);
      message.channel.send(`**${authorName}**, you have updated your Friend Code to **${fc}**.`);
    }
  });
 }
}
