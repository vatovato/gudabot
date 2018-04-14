exports.run = (servantUrl, imageNumber, client, message, urlRef) => {
var servantCall = servantUrl;
var imageNumber = imageNumber;
var request = require('request');
var cheerio = require('cheerio');
const Discord = require('discord.js');
var message = message;

var ascensionImage0 = '';
var ascensionImage1 = '';
var ascensionImage2 = '';
var ascensionImage3 = '';

if(message.channel.name !== "ascension-images") {
  message.channel.send("This command only works in the " + `<#408036456813166592>` + " channel.");
} else {
request(servantCall, function(error, response, html) {
  if(!error && response.statusCode == 200) {
    //$ = cheerio.load('div', '<div id="mw-content-text">...</div>');
    var $ = cheerio.load(html);

    //Begin a switch case that scrapes the image required by imageNumber
    switch (imageNumber) {
      case "0":
      ascensionImage0 = "http://fate-go.cirnopedia.org/icons/servant_card/" + urlRef + "1.jpg";
      //var aImage0 = $('a[title="Default Form"]').attr('href');
      //ascensionImage0 = "http://fate-go.cirnopedia.org/" + aImage0;
      //message.channel.send("",{files: [ascensionImage0]}).catch(console.error);
      message.guild.channels.find("name", "ascension-images").sendMessage("",{files: [ascensionImage0]}).catch(console.error);
      break;

      case "1":
      ascensionImage1 = "http://fate-go.cirnopedia.org/icons/servant_card/" + urlRef + "2.jpg";
      //var aImage1 = $('a[title="1st Ascension Form"]').attr('href');
      //ascensionImage1 = "http://fate-go.cirnopedia.org/" + aImage1;
      message.guild.channels.find("name", "ascension-images").sendMessage("",{files: [ascensionImage1]}).catch(console.error);
      break;

      case "2":
      ascensionImage2 = "http://fate-go.cirnopedia.org/icons/servant_card/" + urlRef + "3.jpg";
      //var aImage2 = $('a[title="2nd Ascension Form"]').attr('href');
      //ascensionImage2 = "http://fate-go.cirnopedia.org/" + aImage2;
      message.guild.channels.find("name", "ascension-images").sendMessage("",{files: [ascensionImage2]}).catch(console.error);
      break;

      case "3":
      ascensionImage3 = "http://fate-go.cirnopedia.org/icons/servant_card/" + urlRef + "4.jpg";
      //var aImage3 = $('a[title="Final Ascension Form"]').attr('href');
      //ascensionImage3 = "http://fate-go.cirnopedia.org/" + aImage3;
      message.guild.channels.find("name", "ascension-images").sendMessage("",{files: [ascensionImage3]}).catch(console.error);
      break;

      case "4":
      ascensionImage4 = "http://fate-go.cirnopedia.org/icons/chibi_servant_card/servant_" + urlRef + ".png";
      message.guild.channels.find("name", "ascension-images").sendMessage("",{files: [ascensionImage4]}).catch(console.error);
      break;

      case "5":
      if(urlRef == "005" || urlRef == "106" || urlRef == "183" || urlRef == "099" || urlRef == "094" || urlRef == "160" || urlRef == "001.1") {
      ascensionImage5 = "http://fate-go.cirnopedia.org/icons/chibi_servant_card/servant_" + urlRef + "5.png";
      message.guild.channels.find("name", "ascension-images").sendMessage("",{files: [ascensionImage5]}).catch(console.error);
    } else {
      message.channel.send("This Servant doesn't have an extra costume.");
    }
      break;
    }

    //console.log(sendMessage);

  }
});
}
}
