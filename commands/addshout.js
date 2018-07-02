exports.run = (client, message, connection) => {

var authorId = message.author.id;
console.log("authorId: " + authorId);
var authorName = message.author.username;


  console.log(authorName + " wants to add themselves to the shout list.");
  connection.query(`SELECT * FROM shout WHERE userId ='${authorId}'`, function(err, rows, fields) {
    if (err) throw err;
    if(rows.length == 0) {
      console.log("User did not exist. Creating.");
      connection.query(`INSERT INTO shout SET userId = '${authorId}', authorName = '${authorName}'`);
      message.channel.send(`**${authorName}**, you have been added to the shout list.`);
    } else {
      message.channel.send(`**${authorName}**, you already exist on the shout list.`);
    }
  });
 }
