exports.run = (client, message, args) => {
var request = require('request');
var cheerio = require('cheerio');
const Discord = require('discord.js');

var sendMessage = "**Weekly Master Missions**\n\n";
request("https://grandorder.wiki/Master_Missions", function(error, response, html) {
  if(!error && response.statusCode == 200) {
    //$ = cheerio.load('div', '<div id="mw-content-text">...</div>');
    var $ = cheerio.load(html);
    var tableWithData = $('table[class=wikitable]').first();
    var dataRows = $(tableWithData).find('td').toArray();
    for (let i of dataRows) {
      sendMessage += $(i).text().trim() + "\n";

    }
    message.channel.send(sendMessage);
    //console.log(tableWithData.html());
  }
  });
}
