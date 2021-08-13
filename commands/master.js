/*exports.run = (client, message, args) => {
var request = require('request');
var cheerio = require('cheerio');
const Discord = require('discord.js');


// Message to be sent to Discord channel
var sendMessage = "**Weekly Master Missions**\n\n";
request("http://fate-go.cirnopedia.org/master_mission_us.php#nav", function(error, response, html) {
  if(!error && response.statusCode == 200) {
    //$ = cheerio.load('div', '<div id="mw-content-text">...</div>');
    var $ = cheerio.load(html);
    // Finds the first table with id="rounded-corner"
    var tableWithObjectives = $('table[id="rounded-corner"]').first();
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
            missions.objective = missions.objective.trim();
            sendMessage += missions.objective + "\n";
            break;
        }
        i++;
      }
    }
    sendMessage = sendMessage.replace(/&quot;/g, '\\"');
    sendMessage = sendMessage.replace(/&apos;/g, '\\´');
    sendMessage += "\n\n**Recommended Areas**\n\n";

    // Finds second table, with the Free Quests
    var tableFreeQuests = $('table[class="height2"]');
    var tableQBody = $(tableFreeQuests).find('tbody');
    var rowsFree = $(tableQBody).find('tr').toArray();
    for (let rowFree of rowsFree) {
      var quests = {
        quest: '',
        ap: '',
        target: '',
        map: ''
      };
      var columnsFree = $(rowFree).find('td').toArray();
      var j = 0;
      for (let columnFree of columnsFree) {
        switch(j) {
          case 0:
          quests.quest = $(columnFree).text().replace(/[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B|\n\r/g, "");
          quests.quest = quests.quest.trim();
          //sendMessage += "- " + quests.quest;
          break;
          case 1:
          quests.ap = $(columnFree).html().replace(/(<\/?(\s|\S)*>)/g, "");
          quests.ap = quests.ap.trim();
          //sendMessage += " (" + quests.ap + ") to target ";
          break;
          case 3:
          quests.target = $(columnFree).html().replace(/(<\/?(\s|\S)*>)/g, "");
          quests.target = quests.target.trim();
          //sendMessage += quests.target + ". ";
          break;
          case 4:
          quests.map = $(columnFree).html().replace(/(<\/?(\s|\S)*>)/g, "");
          quests.map = quests.map.trim();
          quests.map = quests.map.replace(/:/g, '\ - ');
          //sendMessage += "Map: " + quests.map + ".\n";
          break;
        }
        j++;
      }
      sendMessage += "- **" + quests.map + ".** " + quests.quest + " (" + quests.ap + ") to target " + quests.target + ".\n";
    }
    message.channel.send(`${sendMessage}`).catch(console.error);
  }
});
}
*/
exports.run = (client, message, args) => {

  const fetch = require('node-fetch');

  fetch('https://api.atlasacademy.io/export/NA/nice_master_mission.json')
    .then(response => response.json())
      .then(data => {
        var sendMessage = "**Weekly Master Missions**\n\n";
        for ( var i = 0; i < data[2].missions.length; ++i ) {
            var count = i+1;
            var mission = count.toString() + ". " + data[2].missions[i].name + "\n";
            console.log("Adding Mission: " + mission);
            sendMessage += mission;
          }
        message.channel.send(sendMessage);
        })
}
