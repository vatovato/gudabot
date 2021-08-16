exports.run = (client, message, connection, args) => {

    var userID = message.author.id;
    var username = message.author.username;
    const fetch = require('node-fetch');
    const atlasacademy = require('./atlasapihelper.js');

    var servantClass = atlasacademy.getServantArgument(args);
    if ( servantClass != null ) {
    args.pop();
    }

    //Concatenates all args to form the servant name called for the function
    var servantName = args.join(" ").toLowerCase();
    var invalidServantName = args.join("+").toLowerCase();
    var searchUrl = "https://www.google.com.ar/search?q=" + invalidServantName + "+site%3Ahttps%3A%2F%2Fapps.atlasacademy.io";

    console.log(`Required adding ${servantName} image to ${username}'s wishlist.`);

    if ( args.length == 1 && args[0].includes("https://") ) {
        if ( args[0].includes(".gif") || args[0].includes(".png") || args[0].includes(".jpg") || args[0].includes(".jpeg") ) {
            connection.query(`UPDATE wishlist SET imageURL = '${args[0]}' WHERE userID = ${userID}`);
            message.channel.send(`${username}, you added your image. Call !wl to see it.`);
		} 
        else {
            message.channel.send("Invalid url given. Please use web image urls ending in one of the following extensions: (gif/png/jpg)");  
		}
    } 
    else {
        fetch('https://api.atlasacademy.io/export/JP/nice_servant_lang_en.json')
        .then(response => response.json())
            .then(data => {
            for ( var i = 0; i < data.length; ++i ) {
                if ( data[i].name.toLowerCase() == servantName ) {
                if ( servantClass == null || (servantClass != null && data[i].className == servantClass) ) {
                    connection.query(`SELECT * FROM wishlist WHERE userID = '${userID}'`, function(err, rows, fields) {
                    if (err) throw err;
                    if(rows.length == 0) {
                        console.log("User did not exist.");
                        message.channel.send(`**${username}**, you don't exist in the table yet. Use !addwl [wishlist] first.`);
                    } else {
                        connection.query(`UPDATE wishlist SET imageURL = '${data[i].extraAssets.faces.ascension[4]}' WHERE userID = ${userID}`);
                        message.channel.send(`${username}, you added your image. Call !wl to see it.`);
                    }
                    });
                    return;
                }
                }
            }
            message.channel.send(`Invalid Servant name. Try Google: ${searchUrl}`);
        })
    }
}
