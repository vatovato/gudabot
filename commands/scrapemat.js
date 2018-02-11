exports.run = (client, message, args, callback) => {

  var request = require('request');
  var cheerio = require('cheerio');
  const Discord = require('discord.js');
  var wikiUrl = args;
  console.log("URL: " + wikiUrl);
  var servantList = '';
  var finalList = '';
    request(wikiUrl, function(error, response, html) {
    var list = '';
    if (error) throw error;
    if(!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var divWithName = $('div[class="InumWrapper hidden"]').toArray();
      for(let divs of divWithName) {
        var servantName = $(divs).find('a').attr('title');
        //console.log(servantName);
        list += servantName + ", ";
        }
        callback(list);
}
});

}
