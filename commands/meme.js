exports.run = (client, message, pool) => {

    // Spam protection
    canUseCommand(client, message, pool)
    .then( response => {
        if ( response ) {
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
    });
}

// Spam protection
async function canUseCommand(client, message, pool) {
    
    var canUse = true;
    var timestamp = Math.floor(Date.now()/1000);
	const archivedRole='384924912982425601';

    const [rows,fields] = await pool.promise().query(`SELECT * FROM meme WHERE userID = '${message.author.id}'`);

    if( rows && rows.length == 0) {
        console.log("User did not use command before. Log timestamp");
        pool.query(`INSERT INTO meme SET userID = '${message.author.id}', username = '${message.author.username}', timestamp = ${timestamp}, warnings = 0`);
    } else if ( rows ) {
        var previousWarnings = rows[0].warnings;
        var previousTimestamp = rows[0].timestamp;
        var userWishlist = rows[0].wishlist;
        var cooldown = timestamp - previousTimestamp;
            
        console.log(`'${message.author.username} used meme ${cooldown} seconds ago`);
        if ( cooldown >= 60 ) {
            pool.query(`UPDATE meme SET timestamp = ${timestamp}, warnings = 0 WHERE userID = '${message.author.id}'`);
		} else {
            var warningMessage = '';
            switch(previousWarnings) {
                case 0:
                    warningMessage = `<@${message.author.id}> Command has already been used in the past minute. Please wait ${60 - cooldown} seconds before using again.`;
                    break;
                case 1:
                    warningMessage = `Last warning <@${message.author.id}>: Using this command in the next ${60 - cooldown} seconds will get you archived.`;
                    break;
                case 2:
                default:
                    message.member.roles.add(archivedRole).catch(console.error);
                    warningMessage = `User <@${message.author.id}> has been archived for spamming.`;
                    break;
			}
                
            canUse = false;
		    message.channel.send({content: warningMessage});
            message.delete();
            previousWarnings++;
            pool.query(`UPDATE meme SET warnings = ${previousWarnings} WHERE userID = '${message.author.id}'`);
		}
    }
    
    return canUse;
}