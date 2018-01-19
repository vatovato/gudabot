exports.run = (client, message, args) => {
var request = require('request');
var cheerio = require('cheerio');
const Discord = require('discord.js');

//URL that has the gacha simulator
var rollsUrl = 'https://grandorder.gamepress.gg/summon-simulator#1';

// Array with results of gacha
var rollResults = [];

// Message to be sent to Discord channel
var sendMessage = '';

request(rollsUrl, function(error, response, html) {
  if(!error && response.statusCode == 200) {
    //$ = cheerio.load('div', '<div id="mw-content-text">...</div>');
    var $ = cheerio.load(html);
    // Calls the onClick() function inside the button with id="summon-button"
    $('#summon-button').click();
    // Retrieves the table with the results
    var tableResults = $('#results');
    var rowsResults = $(tableResults).find('tr').toArray();

    for (let rowResults of rowsResults){
      var servant = [];
      var columnsResults = $(rowResults).find('td').toArray();
      for (let columnResults of columnsResults){
            servant += $(columnResults).html().replace(/(<\/?(\s|\S)*>)/g, "");
      }
      servant.push(rollResults);
      console.log(rollResults);

    }
    //console.log(sendMessage);

    //message.channel.send(`${sendMessage}`).catch(console.error);
  }
});
}
