exports.run = (client, message, args) => {

var authorName = message.author.username;
var authorId = message.author.id;
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'izm96dhhnwr2ieg0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user     : 'q1851bkxpbck29af',
    password : 'aruks8byfph462fs',
    database : 'z9za3d9s22bfizav'
  });


  connection.query(`SELECT * FROM rolls_users WHERE roll_user_id ='${authorId}'`, function(err, rows, fields) {
    if (err) throw err;
    if(rows.length == 0) {
      console.log(authorName + " requested roll count but did not exist.");
      message.channel.send("You did not roll yet. Try !roll10 first.");
    } else {
      console.log(authorName + " requested roll count.");
      var quartz = rows[0].roll_user_quartz;
      var money = rows[0].roll_user_money;
      var servants = rows[0].roll_user_servants;
      var essences = rows[0].roll_user_essences;
      message.channel.send(`**${authorName}**
Quartz Spent: ${quartz} - Money Spent: $${money}
This got you ${servants} 5* Servants and ${essences} 5* CEs.`);
    }
  });

}
