var request = require('request');
var cheerio = require('cheerio');
const Discord = require('discord.js');


//Servant details. Name is name, ascensions is an array with the ascension tier,
//QP cost and materials needed for every tier
var servant = {
  name: '',
  ascensions: []
};

// Message to be sent to Discord channel
var sendMessage = '**Weekly Master Missions**\n';

request(servantCall, function(error, response, html) {
  if(!error && response.statusCode == 200) {
    //$ = cheerio.load('div', '<div id="mw-content-text">...</div>');
    var $ = cheerio.load(html);
    // Finds the first table with id="rounded-corner"
    var tableWithObjectives = $('td.rounded-corner').first();
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
    //console.log(sendMessage);
    message.channel.send(`${sendMessage}`).catch(console.error);

    //console.log(servant.ascensions[0].materials[0].imageUrl);

  }
});
}
