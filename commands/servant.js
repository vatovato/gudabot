
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
  //URL for the servant called in servantName
  var servantUrl ='';
  var client = client;
  var message = message;
  var serName = '';
  console.log(`Required cirno page for ${servantName}`);

    var callSwitch  = require(`./switch.js`);
    urlRef = callSwitch.parseName(servantName);

    if (urlRef.length == 0) {
      message.channel.send(`Invalid Servant name. Try Google: ${searchUrl}`);
    } else {
    //message.channel.send('Link to Cirno: http://fate-go.cirnopedia.org/servant_profile.php?servant=' + urlRef);
    servantUrl = 'http://fate-go.cirnopedia.org/servant_profile.php?servant=' + urlRef;
    request(servantUrl, function(error, response, html) {
      if(!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var tableWithName = $('table[id="rounded-corner"]').first();
        var rowName = $(tableWithName).find('td[class="desc"]').first().html().replace(/(<\/?(\s|\S)*>)/g, "");
        serName = rowName;
      }
    });
    console.log(serName);
    message.channel.send(`URL: ${servantUrl}
Name: ${serName}`);
  }
}
