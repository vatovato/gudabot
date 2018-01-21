
exports.run = (client, message, args) => {
    var servantName = args.join(" ").toLowerCase();
    var invalidServantName = args.join("+").toLowerCase();
    var searchUrl = "https://www.google.com.ar/search?q=" + invalidServantName + "+site%3Ahttp%3A%2F%2Ffate-go.cirnopedia.org";
    var urlRef = '';
    var servantUrl ='';
    var client = client;
    var message = message;
    console.log(`Required ascension materials for ${servantName}`);

    var callSwitch = require(`./switch.js`);
    urlRef = callSwitch.parseName(servantName);

    if (urlRef.length == 0) {
      message.channel.send(`Invalid Servant name. Try Google: ${invalidServantName}`);
    } else {
      // If it did find a result, urlRef has the servant cirno code
      // and the function can proceed to scrape the images
      servantUrl = 'http://fate-go.cirnopedia.org/servant_profile.php?servant=' + urlRef
      console.log(`URL for Servant: ${servantUrl}`);
      let commandFile2 = require(`./scrapeAscension.js`);
      commandFile2.run(servantUrl, client, message);
        }
    /* let age = args[0];
    let sex = args[1];
    let location = args[2];
    message.channel.send(`Hello, ${message.author.username}, I see you're a ${age} old ${sex} from ${location}. Wanna date?`).catch(console.error);
*/
}
