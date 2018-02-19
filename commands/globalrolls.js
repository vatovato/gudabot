exports.run = (client, message, connection) => {
if(message.author.id === '329439336577761280') {
var authorName = message.author.username;
var authorId = message.author.id;
var sendMessage = "";
  connection.query(`SELECT * FROM rolls_global WHERE globalID = 0`, function(err, rows, fields) {
    if (err) throw err;
      console.log(authorName + " requested global roll count.");
      var quartz = rows[0].total_quartz;
      quartz = quartz.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      var money = rows[0].total_money;
      money = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      var servants = rows[0].servants;
      var essences = rows[0].essences;
      message.channel.send(`This entire channel has spent ${quartz} Quartz and $${money} to obtain ${servants} 5* Servants and ${essences} 5* CEs.`);
});
connection.query(`SELECT * FROM rolls_users ORDER BY roll_user_quartz DESC LIMIT 3`, function(error, rows, fields) {
  if(error) throw error;
      message.channel.send(`1. ${rows[0].roll_user_name}. ${rows[0].roll_user_quartz} Quartz, $${rows[0].roll_user_money}, ${rows[0].roll_user_servants} 5* Servants and ${rows[0].roll_user_essences} 5* Essences.
2. ${rows[1].roll_user_name}. ${rows[1].roll_user_quartz} Quartz, $${rows[1].roll_user_money}, ${rows[1].roll_user_servants} 5* Servants and ${rows[1].roll_user_essences} 5* Essences.
3. ${rows[2].roll_user_name}. ${rows[2].roll_user_quartz} Quartz, $${rows[2].roll_user_money}, ${rows[2].roll_user_servants} 5* Servants and ${rows[2].roll_user_essences} 5* Essences.`);
});
} else {
  message.channel.send("Sorry, only furiosa can use this command.");
}
}
