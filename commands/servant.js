
exports.run = (client, message, args) => {

  var request = require('request');
  var cheerio = require('cheerio');
  const Discord = require('discord.js');
//Concatenates all args to form the servant name called for the function
  var servantName = args.join(" ").toLowerCase();
  var invalidServantName = args.join("+").toLowerCase();
  var searchUrl = "https://www.google.com.ar/search?q=" + invalidServantName + "+site%3Ahttp%3A%2F%2Ffate-go.cirnopedia.org";
  //Stores the 3 digit code that identifies a Servant in cirno
  var urlRef = '';
  var wikiRef = '';
  //URL for the servant called in servantName
  var servantUrl ='';
  var client = client;
  var message = message;
  console.log(`Required cirno page for ${servantName}`);

    var callSwitch  = require(`./switch.js`);
    var returnValue = callSwitch.parseName(servantName);
    returnValue = returnValue.split(" ");
    urlRef = returnValue[0];
    wikiRef = returnValue[1];

    if (urlRef.length == 0) {
      message.channel.send(`Invalid Servant name. Try Google: ${searchUrl}`);
    } else {
    //message.channel.send('Link to Cirno: http://fate-go.cirnopedia.org/servant_profile.php?servant=' + urlRef);
    servantUrl = 'http://fate-go.cirnopedia.org/servant_profile.php?servant=' + urlRef;
    let commandFile2 = require(`./scrapeServant.js`);
    commandFile2.run(servantUrl, urlRef, wikiRef, client, message);
  }
}
