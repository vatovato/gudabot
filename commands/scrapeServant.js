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
        /* case 2:
        servant.image = $(tableColumns).find('div').attr('style');
        console.log(servant.image);
          break;*/
        case 3:
        servant.name = $(tableColumns).find('a').text();
        servant.name = servant.name.replace(/[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B|\n\r/g, "");
        console.log(servant.name);
          break;
      }
      i++;
    }
    servant.image = "http://fate-go.cirnopedia.org/icons/servant/servant_"+urlRef+"1.png";
    message.channel.send(`Name: ${servant.name}
Image: ${servant.image}`);
  }

  });
}
