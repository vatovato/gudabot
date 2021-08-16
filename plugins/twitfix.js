// Called by bot.js when message has twitter links
exports.run = (client, message) => {
    const fetch = require('node-fetch');
    const regex = /(https?:\/\/[^\s]+)/g; // Regex to find all twitter links

    const linksArray = message.content.match(regex);
    var searchUrl = "https://api.twitter.com/2/tweets?ids=";

    var fixedLinks = {}; // id to fxtwitter link lookup

    for ( var i = 0; i < linksArray.length; ++i ) {
        console.log("String (" + linksArray[i] + ") matched. Checking tweet content..." );

        const twitterID = linksArray[i].replace(/\?.*$/,"").split('/').pop(); // Remove ?s= at the end, split with / and take the last element

        if ( twitterID && twitterID.length ) {
            fixedLinks[twitterID] = linksArray[i].replace("https://twitter.com/","https://fxtwitter.com/");
            console.log("Twitter ID is (" + twitterID.toString() + ")" );
            console.log(fixedLinks);

            if ( i > 0 ) {
                searchUrl += ",";     
		    }
            searchUrl += twitterID;
        }
	}
        
    searchUrl += "&expansions=attachments.media_keys";

	console.log("Querying twitter api for tweet info (" + searchUrl + ")");
    fetch(searchUrl, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + process.env.TWITTER_BEARER,
        },
    })
    .then(response => response.json())
    .then(data => {
        var twitterIDs = []; // List of tweets to repost
        for ( var j = 0; j < data.includes.media.length; ++j ) {
            if ( data.includes.media[j].type == "video" || data.includes.media[j].type == "animated_gif" ) {
                // Found a video/gif, find the tweet id by searching one that contain this video/gif's media key
                for ( var k = 0; k < data.data.length; ++k ) {
                    if (  data.data[k].attachments.media_keys.includes(data.includes.media[j].media_key) ) {
                        if ( !twitterIDs.includes(data.data[k].id) ) {
                            twitterIDs.push(data.data[k].id);                     
						}
					}           
				}
			}     
		}

        var newMessage = "Found " + twitterIDs.length + " tweets with video content.\n";
        for ( var l = 0; l < twitterIDs.length; ++l ) {
            if ( twitterIDs[l] in fixedLinks ) {
                newMessage += fixedLinks[twitterIDs[l]] + "\n";
            } else {
                console.log("Error: cannot find twitter ID in the fixedLink object");     
			}
		}
		message.channel.send(newMessage);  
    });
}