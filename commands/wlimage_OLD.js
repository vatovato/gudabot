
exports.run = (client, message, connection, args) => {
  var userID = message.author.id;
  var username = message.author.username;
  var nickname = message.member.nickname;
  var request = require('request');

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
  console.log(`Required adding ${servantName} image to ${username}'s wishlist.`);

    var callSwitch  = require(`./switch.js`);
    var returnValue = callSwitch.parseName(servantName);
    returnValue = returnValue.split(" ");
    urlRef = returnValue[0];
    wikiRef = returnValue[1];

    if (urlRef.length == 0) {
      message.channel.send(`Invalid Servant name. Try Google: ${searchUrl}`);
    } else {
    //message.channel.send('Link to Cirno: http://fate-go.cirnopedia.org/servant_profile.php?servant=' + urlRef);
    servantUrl = "http://fate-go.cirnopedia.org/icons/servant/servant_"+urlRef+"1.png";
    connection.query(`SELECT * FROM wishlist WHERE userID = '${userID}'`, function(err, rows, fields) {
      if (err) throw err;
      if(rows.length == 0) {
        console.log("User did not exist.");
        message.channel.send(`**${username}**, you don't exist in the table yet. Use !addwl [wishlist] first.`);
      } else {
        connection.query(`UPDATE wishlist SET imageURL = '${servantUrl}' WHERE userID = ${userID}`);
        message.channel.send(`${username}, you added your image. Call !wl to see it.`);
      }
    });
  }
}
