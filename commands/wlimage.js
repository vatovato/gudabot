exports.run = (client, message, connection, args) => {

  var userID = message.author.id;
  var username = message.author.username;
  var nickname = message.member.nickname;
  var request = require('request');
  const fetch = require('node-fetch');

  //Concatenates all args to form the servant name called for the function
  var servantName = args.join(" ").toLowerCase();
  var invalidServantName = args.join("+").toLowerCase();
  var searchUrl = `https://www.google.com.ar/search?q= ${invalidServantName} +site%3Ahttps%3A%2F%2Fapps.atlasacademy.io`;

  console.log(`Required adding ${servantName} image to ${username}'s wishlist.`);

  fetch('https://api.atlasacademy.io/export/JP/nice_servant_lang_en.json')
    .then(response => response.json())
      .then(data => {
        data.forEach((item) => {
          if ( item.name.toLowerCase() == servantName ) {
            connection.query(`SELECT * FROM wishlist WHERE userID = '${userID}'`, function(err, rows, fields) {
              if (err) throw err;
              if(rows.length == 0) {
                console.log("User did not exist.");
                message.channel.send(`**${username}**, you don't exist in the table yet. Use !addwl [wishlist] first.`);
              } else {
                connection.query(`UPDATE wishlist SET imageURL = '${item.extraAssets.faces.ascension[4]}' WHERE userID = ${userID}`);
                message.channel.send(`${username}, you added your image. Call !wl to see it.`);
              }
            });
            return;
          }
        })
        message.channel.send(`Invalid Servant name. Try Google: ${searchUrl}`);
      })
  
}
