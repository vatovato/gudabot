exports.run = (client, message, connection) => {

var authorName = message.author.username;
var authorId = message.author.id;

  connection.query(`SELECT * FROM rolls_global WHERE globalID = 0`, function(err, rows, fields) {
    if (err) throw err;
      console.log(authorName + " requested global roll count.");
      var quartz = rows[0].total_quartz;
      var money = rows[0].total_money;
      var servants = rows[0].servants;
      var essences = rows[0].essences;
      message.channel.send(`This entire channel has spent ${quartz} Quartz and $${money} to obtain ${servants} 5* Servants and ${essences} 5* CEs.`);

});
}
