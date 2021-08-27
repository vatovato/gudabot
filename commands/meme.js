exports.run = (client, message, pool) => {

    // Spam protection
    if ( canUseCommand(client, message, pool) ) {
        const fetch = require('node-fetch');
        const albumHashes = [
            'blnRJ4Q', // 0 - Sephi's testing album
            'QI9iDQL', // 1 - Sephi's reupload of all the old memes
            'O6qGyc0', // 2 - Furiosa's reupload of all the old memes + new memes
        ];
        const albumID = albumHashes[2];
        fetch("https://api.imgur.com/3/album/"+ albumID + "/images", {
            method: 'GET',
            headers: {
                'Authorization': 'Client-ID ' + process.env.IMGUR_ID,
            },
        })
        .then(response => response.json())
        .then(data => {
        
            var place = Math.floor((Math.random() * data.data.length)); // Random number between 0 and length of album - 1
            var memeUrl = data.data[place].link;
            console.log("Found " + data.data.length + " memes in album https://imgur.com/a/" + albumID);
            console.log("Meme: " + memeUrl);
            message.channel.send({files: [memeUrl]});
        });
    }
}

// Spam protection
function canUseCommand(client, message, pool) {
    
    var canUse = true;
    var timestamp = Date.now();
	const archivedRole='384924912982425601';

    pool.query(`SELECT * FROM meme WHERE userID = '${message.author.id}'`, function(err, rows, fields) {
        if(err) throw err;
        if(rows.length == 0) {
            console.log("User did not use command before. Log timestamp");
            pool.query(`INSERT INTO meme SET userID = '${message.author.id}', username = '${message.author.username}', timestamp = '${timestamp}', warnings = '0'`);
        } else {
            var previousWarnings = rows[0].warnings;
            var previousTimestamp = rows[0].memeTime;
            var userWishlist = rows[0].wishlist;
            var cooldown = Math.floor((timestamp - previousTimestamp)/1000);

            if ( cooldown >= 60 ) {
                pool.query(`UPDATE meme SET timestamp = '${timestamp}', warnings = '0' WHERE userID = '${message.author.id}'`);
			} else {
                var warningMessage = '';
                switch(previousWarnings) {
                    case 0:
                        warningMessage = `Command has already been used in the past minute. Please wait ${cooldown} seconds before using again.`;
                    case 1:
                        warningMessage = `Last warning: Using this command in the next ${cooldown} seconds will get you archived.`;
                    case 2:
                        message.member.roles.add(archivedRole).catch(console.error);
                        warningMessage = `User has been archived for spamming`;
				}
                
                canUse = false;
		        message.channel.send({content: warningMessage, allowedMentions: {repliedUser: true}, reply: { messageReference: message }});
                previousWarnings++;
                pool.query(`UPDATE meme SET warnings = '${previousWarnings}' WHERE userID = '${message.author.id}'`);
			}
        }
    });

    return canUse;
}