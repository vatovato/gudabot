
exports.run = (client, message, args) => {

  const fetch = require('node-fetch');

  //Concatenates all args to form the servant name called for the function
  var servantName = args.join(" ").toLowerCase();
  var invalidServantName = args.join("+").toLowerCase();
  var searchUrl = "https://www.google.com.ar/search?q=" + invalidServantName + "+site%3Ahttps%3A%2F%2Fapps.atlasacademy.io";

  console.log(`Required adding ${servantName} image to ${username}'s wishlist.`);

  fetch('https://api.atlasacademy.io/export/JP/nice_servant_lang_en.json')
    .then(response => response.json())
      .then(data => {
        for ( var i = 0; i < data.length; ++i ) {
          if ( data[i].name.toLowerCase() == servantName ) {
            let commandFile2 = require(`./scrapeServant.js`);
            commandFile2.run(data[i], client, message);
            return;
          }
        }
        message.channel.send(`Invalid Servant name. Try Google: ${searchUrl}`);
      })

    /*
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
  */
}
