exports.run = (client, message, connection) => {

var authorName = message.author.username;
var authorId = message.author.id;
var sendMessage = "";

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
      var servantNames = rows[0].servantName;
      var essenceNames = rows[0].essenceName;
      sendMessage = `**${authorName}**
Quartz Spent: ${quartz} - Money Spent: $${money}
This got you ${servants} 5* Servants and ${essences} 5* CEs.`;
      if(rows[0].servantName.length > 0) {
       sendMessage += `\nServants obtained: ${servantNames}`;
      }
      if(rows[0].essenceName.length > 0) {
       sendMessage += `\nEssences obtained: ${essenceNames}`;
      }
      message.channel.send(sendMessage);
    }
  });
}