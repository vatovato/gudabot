exports.run = (client, message, args) => {
    var servantName = args.join(" ").toLowerCase();
    var invalidServantName = args.join("+").toLowerCase();
    var searchUrl = "https://www.google.com.ar/search?q=" + invalidServantName + "+site%3Ahttp%3A%2F%2Ffate-go.cirnopedia.org";
    var imageNumber = servantName.slice(-1);
    servantName = servantName.slice(0, -2);
    var urlRef = '';
    var servantUrl ='';
    var client = client;
    var message = message;
    if (isNaN(imageNumber)) {
      imageNumber = '0';
      servantName = args.join(" ").toLowerCase();
    }
    console.log(`Servant name: ${servantName}
Image number: ${imageNumber}`);
    // Checks if the number placed is a number between 1 and 4
    if(imageNumber >= 0 && imageNumber <= 3) {
      //Calls the switch else table with all the servant nicknames
      // and their cirno 3-digit code
      var callSwitch  = require(`./switch.js`);
      var returnValue = callSwitch.parseName(servantName);
      returnValue = returnValue.split(" ");
      urlRef = returnValue[0];

      // If the search in the table didn't bring any results,
      // shows an error message.
      if (urlRef.length == 0) {
        message.channel.send(`Invalid Servant name. Try Google: ${searchUrl}`);
      } else {
        // If it did find a result, urlRef has the servant cirno code
        // and the function can proceed to scrape the images
        servantUrl = 'http://fate-go.cirnopedia.org/servant_profile.php?servant=' + urlRef
        console.log(`URL for Servant: ${servantUrl}`);
        let commandFile2 = require(`./scrapeImage.js`);
        commandFile2.run(servantUrl, imageNumber, client, message);
          }
    } else {
      message.channel.send(`There's no such thing as a level ${imageNumber} Ascension`);
    }
}
