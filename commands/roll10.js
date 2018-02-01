exports.run = (client, message, args) => {
var request = require('request');
var cheerio = require('cheerio');
const Discord = require('discord.js');
/*eslint-env browser, node*/
//var phantom = require('node-phantom');
function eventFire(el, etype){
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }


//URL that has the gacha simulator
var rollsUrl = 'https://grandorder.gamepress.gg/summon-simulator#1';

// Array with results of gacha
var rollResults = [];

// Message to be sent to Discord channel
var sendMessage = '';

request(rollsUrl, function(error, response, html) {
  if(!error && response.statusCode == 200) {
    eventFire(document.getElementById('summon-button'), 'click');

/*    phantom.create(function(error,ph) {
      ph.createPage(function(error,page) {
        page.open('https://grandorder.gamepress.gg/summon-simulator#1',function() {
            page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
              page.evaluate(function() {
            let buttonLink = document.querySelector('button[id="summon-button"]');
            buttonLink.click();
          });
          phantom.exit();
        });
        });
      });
    });*/

    // Retrieves the table with the results
    var $ = cheerio.load(html);
    var tableResults = $('#results');
    var rowsResults = $(tableResults).find('tr').toArray();

    for (let rowResults of rowsResults){
      var servant = [];
      var columnsResults = $(rowResults).find('td').toArray();
      for (let columnResults of columnsResults){
            servant += $(columnResults).html().replace(/(<\/?(\s|\S)*>)/g, "");
      }
      console.log(`Roll results: ${rollResults}`);

    }
    //console.log(sendMessage);

    //message.channel.send(`${sendMessage}`).catch(console.error);
  }
});
}
