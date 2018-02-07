exports.run = (client, message, args) => {

  var request = require('request');
  var cheerio = require('cheerio');
  const Discord = require('discord.js');
  var wikiUrl = args;
  var servantList = '';
  request(wikiUrl, function(error, response, html) {
    if(!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var divWithServants = $('div[style="display:inline-block;position:relative;margin-right:5px"]').toArray();
      for (let divs of divWithServants) {
        var servantName = $(divs).find('a').attr('title');
        servantList += servantName + " - ";
      }
}
console.log("Servants: " + servantList);
});
}
