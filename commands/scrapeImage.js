exports.run = (servantUrl, imageNumber, client, message) => {
var servantCall = servantUrl;
var imageNumber = imageNumber;
var request = require('request');
var cheerio = require('cheerio');
const Discord = require('discord.js');


//Servant details. Name is name, ascensions is an array with the ascension tier,
//QP cost and materials needed for every tier
var servant = {
  name: '',
  ascensionImage0 = '',
  ascensionImage1 = '',
  ascensionImage2 = '',
  ascensionImage3 = ''
};
// Use /(icons\/servant_card\/[0-9]*.jpg)/ for regex the URL
// Message to be sent to Discord channel
var sendMessage = '';

request(servantCall, function(error, response, html) {
  if(!error && response.statusCode == 200) {
    //$ = cheerio.load('div', '<div id="mw-content-text">...</div>');
    var $ = cheerio.load(html);
    var tableWithName = $('td.desc').first();
    var servantName = $(tableWithName).children().first().text();
    servant.name = servantName;
    sendMessage = "**" + servantName+ " Ascensions**\n";

    //Begin a switch case that scrapes the image required by imageNumber
    switch (imageNumber) {
      case "0":
      var aImage0 = $('#Default Form').children().text();
      console.log(aImage0);
      break;

      case "1":
      var aImage1 = $('#1st Ascension Form').children().text();
      console.log(aImage1);
      break;

      case "2":
      var aImage2 = $('#2nd Ascension Form').children().text();
      console.log(aImage2);
      break;

      case "3":
      var aImage3 = $('#Final Ascension Form').children().text();
      console.log(aImage3);
      break;
    }

    //console.log(sendMessage);
    //message.channel.send(`${sendMessage}`).catch(console.error);
  }
});
}
