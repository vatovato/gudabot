exports.run = (client, message, args) => {
    var servantName = args.join(" ").toLowerCase();
    var imageNumber = servantName.slice(-1);
    servantName = servantName.slice(0, -2);
    var urlRef = '';
    var servantUrl ='';
    var client = client;
    var message = message;
    console.log(`Servant name: ${servantName}
Image number: ${imageNumber}`);

    var callSwitch  = require(`./switch.js`);
    urlRef = callSwitch.parseName(servantName);

    if (urlRef.length == 0) {
      message.channel.send("You haven't written a valid Servant name");
    } else {
    servantUrl = 'http://fate-go.cirnopedia.org/servant_profile.php?servant=' + urlRef
    console.log(`URL for Servant: ${servantUrl}`);
    /*let commandFile2 = require(`./scrapeImage.js`);
    commandFile2.run(servantUrl, client, message);*/
  }
  }
