exports.run = (client, message, args) => {
var request = require('request');
var cheerio = require('cheerio');
const Discord = require('discord.js');


// Message to be sent to Discord channel
var sendMessage = "**Weekly Master Missions**\n";

request("http://fate-go.cirnopedia.org/master_mission_us.php#nav", function(error, response, html) {
  if(!error && response.statusCode == 200) {
    //$ = cheerio.load('div', '<div id="mw-content-text">...</div>');
    var $ = cheerio.load(html);
    // Finds the first table with id="rounded-corner"
    var tableWithObjectives = $('table[id="rounded-corner"]').first();
    var testTable = $(tableWithObjectives).toArray();
    var testTable2 = $(tableWithObjectives).html().toArray();
    var testTable3 = $(tableWithObjectives).html().toString();
    console.log(`testTable: ${testTable}
testTable2: ${testTable2}
testTable3: ${testTable3}`);
    // Skips table head
    var tableBody = $(tableWithObjectives).find('tbody');
    // Retrieves all rows from table
    var rowsObjectives = $(tableBody).find('tr').toArray();

    // For every row in the table, retrieves ascension title,
    // QP cost of ascension and materials required. Since the materials
    // can be more than one, they're stored in an array
    for (let rowObjectives of rowsObjectives){
      var missions = {
        number: '',
        objective: ''
      };
      var columnsObjectives = $(rowObjectives).find('td').toArray();
      var i = 0;
      for (let columnObjectives of columnsObjectives){
        switch (i){
          case 0:
            missions.number = $(columnObjectives).html().replace(/(<\/?(\s|\S)*>)/g, "");
            sendMessage += missions.number + ". ";
            break;
          case 1:
            missions.objective = $(columnObjectives).html().replace(/(<\/?(\s|\S)*>)/g, "");
            sendMessage += missions.objective + "\n";
            break;
        }
        i++;
      }
    }
    message.channel.send(`${sendMessage}`).catch(console.error);
  }
});
}