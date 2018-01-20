exports.run = (client, message, args) => {
    var servantName = args.join(" ").toLowerCase();
    var urlRef = '';
    var servantUrl ='';
    var client = client;
    var message = message;
    console.log(`Required image for ${servantName}`);

    console.log(`urlRef before switch: ${urlRef}`);
    var callSwitch  = require(`./switch.js`);
    urlRef = callSwitch.parseName(servantName);
    console.log(`urlRef after switch: ${urlRef}`);

    if (urlRef.length == 0) {
      message.channel.send("You haven't written a valid Servant name");
    } else {
    servantUrl = 'http://fate-go.cirnopedia.org/servant_profile.php?servant=' + urlRef
    console.log(`URL for Servant: ${servantUrl}`);
    let commandFile2 = require(`./scrapeImage.js`);
    commandFile2.run(servantUrl, client, message);
  }
  }
