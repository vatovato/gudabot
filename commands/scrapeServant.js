exports.run = (servantUrl, client, message) => {
var servantCall = servantUrl;
var urlRef = urlRef;
var request = require('request');
var cheerio = require('cheerio');
const Discord = require('discord.js');
var servantName = '';

// Retrieves Servant Name from Servant specific URL
request(servantCall, function(error, response, html) {
  if(!error && response.statusCode == 200) {
    //$ = cheerio.load('div', '<div id="mw-content-text">...</div>');
    var $ = cheerio.load(html);
    var tableWithName = $('td.desc').first();
    servantName = $(tableWithName).children().first().text();
  }

request("http://fate-go.cirnopedia.org/servant_all.php#nav", function(error, response, html) {
  if(!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var table = $('table.sortable');
    var tableIconBody = $(table).find('a').attr(`href="#${urlRef}"`).toArray();
    console.log(tableIconBody);
  }
})

}
