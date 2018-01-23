exports.run = (servantUrl, urlRef, client, message) => {
var servantCall = servantUrl;
var urlRef = urlRef;
var request = require('request');
var cheerio = require('cheerio');
const Discord = require('discord.js');
var servant = {
  name: '',
  image: ''
};

// Retrieves Servant Name from Servant specific URL
request("http://fate-go.cirnopedia.org/servant_all.php#nav", function(error, response, html) {
  if(!error && response.statusCode == 200) {
    //$ = cheerio.load('div', '<div id="mw-content-text">...</div>');
    var $ = cheerio.load(html);
    var fullTable = $('tr[id="'+urlRef+'"]');
    var tablesColumns = $(fullTable).find('td').toArray();
    var i = 0;
    for (let tableColumns of tablesColumns){
      switch (i){
        case 2:
        servant.image = $(tableColumns).find('div').attr('style');
        console.log(servant.image);
          break;
        case 3:
        servant.name = $(tableColumns).find('a').text();
        console.log(servant.name);
          break;
      }
      i++;
    }
    }
  });

/* request("http://fate-go.cirnopedia.org/servant_all.php#nav", function(error, response, html) {
  if(!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var table = $('table.sortable');
    var tableIconBody = $(table).find('tbody');
    var tableA = $(tableIconBody).find('tr').toArray();
    console.log(tableA);
  }
});*/
}
