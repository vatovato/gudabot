exports.run = (client, message, args) => {
	const ArchivedRole='384924912982425601';
	var target = 0;
	target= message.mentions.members.first();
	console.log("target: " + target); //Finding the victim
	//console.log(message.author.username + " attempted to archive " + target.displayname);
	if (message.member.permissions.has("KICK_MEMBERS") || message.author.id == "399159458590228480") { //Check to see if the caller is a mod.
		if(!target) {message.channel.send("I'm sorry, but that command didn't include a valid @ mention."); return;}//First of all let's see if there was even a valid mention in there.
		if(!target.permissions.has("KICK_MEMBERS")) {//Check to see if the TARGET is a mod.
			if(!target.roles.cache.has(ArchivedRole)){//And finally check if the target is already archived
				message.channel.send(`${target.displayname} has proven to be a troublemaker (or a dabber), and has been summarily archived. Consider this lesson carefully.`);//If the target was unarchived, archive them.
				target.addRole(ArchivedRole).catch(console.error);
			}else{//If the target was archived, unarchive them.
				message.channel.send(target.displayname + " has been released from the Archive. Pending good behavior.");
				target.removeRole(ArchivedRole).catch(console.error);
			}
		}else{ //If the target was a mod, taunt the caller about their failure.
			message.channel.send("You cannot archive that user, because they are a mod/admin. Also, your attempt just pinged them, so, have fun with that.");
		}
	} else { //If the caller is not a mod, then they get slapped.

		if ( message.author.id == "399159458590228480" ) {
			message.channel.send(`${message.author.username} is memeing`);
			message.member.roles.remove(ArchivedRole).catch(console.error); // Sephi can save himself
		}
		else {
			if (message.channel.id != "590423788735299584"){ //If the message is from the archive, ignore it completely.
				message.channel.send(`${message.member.displayname} has tried to send someone to the archive while not being a mod, and has thus thrown themselves to the archive. The irony...`);
				message.member.roles.add(ArchivedRole).catch(console.error);
			}
		}
}
}
