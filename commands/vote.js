exports.run = (client, message, connection, args) => {

var vote = args.toString().toLowerCase();
var voterId = message.author.id;
var voterName = message.author.username;
console.log(voterName + " voted " + vote);
if(vote === 'yes' || vote === 'no') {
connection.query(`SELECT * FROM votes WHERE voterID ='${voterId}'`, function(err, rows, fields) {
if (err) throw err;
if(rows.length == 0) {
  connection.query(`INSERT INTO votes (vote, voterID, voterName) VALUES ('${vote}', '${voterId}', '${voterName}')`);
  message.channel.send(`${voterName} you voted ${vote}`);
} else {
  connection.query(`UPDATE votes SET vote = ${vote} WHERE voterID = '${voterId}'`);
  message.channel.send(`${authorName} you updated your vote to ${vote}`);
}
});
} else {
  message.channel.send(`${authorName} just 'yes' or 'no', please.`);
}
}
