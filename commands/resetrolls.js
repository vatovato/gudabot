exports.run = (client, message, args) => {

var authorName = message.author.username;
var authorId = message.author.id;
var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_URL);


  connection.query(`SELECT * FROM rolls_users WHERE roll_user_id ='${authorId}'`, function(err, rows, fields) {
    if (err) throw err;
    if(rows.length == 0) {
      console.log("User requested roll reset but did not exist.");
      message.channel.send("You did not roll yet. Try !roll10 first.");
    } else {
      console.log("User requested roll reset.");
      connection.query(`UPDATE rolls_users SET roll_user_quartz = 0, roll_user_money = 0, roll_user_essences = 0, roll_user_servants=0 WHERE roll_user_id = ${authorId}`);
      message.channel.send(`**${authorName}** you have reset your rolls.`);
    }
    //connection.end();
  });

}
