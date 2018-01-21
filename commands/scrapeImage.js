exports.run = (servantUrl, imageNumber, client, message) => {
var servantCall = servantUrl;
var imageNumber = imageNumber;
var request = require('request');
var cheerio = require('cheerio');
const Discord = require('discord.js');


var ascensionImage0 = '';
var ascensionImage1 = '';
var ascensionImage2 = '';
var ascensionImage3 = '';


request(servantCall, function(error, response, html) {
  if(!error && response.statusCode == 200) {
    //$ = cheerio.load('div', '<div id="mw-content-text">...</div>');
    var $ = cheerio.load(html);

    //Begin a switch case that scrapes the image required by imageNumber
    switch (imageNumber) {
      case "0":
      var aImage0 = $('a[title="Default Form"]').attr('href');
      ascensionImage0 = "http://fate-go.cirnopedia.org/" + aImage0;
      console.log(`URL: ${ascensionImage0}`);
      message.channel.send("",{files: [ascensionImage0]}).catch(console.error);
      break;

      case "1":
      var aImage1 = $('a[title="1st Ascension Form"]').attr('href');
      ascensionImage1 = "http://fate-go.cirnopedia.org/" + aImage1;
      console.log(`URL: ${ascensionImage1}`);
      message.channel.send("",{files: [`${ascensionImage1}`]}).catch(console.error);
      break;

      case "2":
      var aImage2 = $('a[title="2nd Ascension Form"]').attr('href');
      ascensionImage2 = "http://fate-go.cirnopedia.org/" + aImage2;
      console.log(`URL: ${ascensionImage2}`);
      message.channel.send(`${ascensionImage2}`).catch(console.error);
      break;

      case "3":
      var aImage3 = $('a[title="Final Ascension Form"]').attr('href');
      ascensionImage3 = "http://fate-go.cirnopedia.org/" + aImage3;
      console.log(`URL: ${ascensionImage3}`);
      message.channel.send(`${ascensionImage3}`).catch(console.error);
      break;
    }

    //console.log(sendMessage);

  }
});
}
