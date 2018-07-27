exports.run = (client, message, args) => {
	const ArchivedRole='384924912982425601';
	var target= message.mentions.members.first(); //Finding the victim
	if (message.member.hasPermission("KICK_MEMBERS", options.checkAdmin)){ //Check to see if the caller is a mod.
		if(!target){message.channel.send("I'm sorry, but that command didn't include a valid @ mention."); return;}//First of all let's see if there was even a valid mention in there.
		if(!target.hasPermission("KICK_MEMBERS", options.checkAdmin)){//Check to see if the TARGET is a mod.
			if(!target.roles.has(ArchivedRole)){//And finally check if the target is already archived
				message.channel.send(target.nickname " has proven to be a troublemaker (or a dabber), and has been summarily archived. Consider this lesson carefully.");//If the target was unarchived, archive them.
				target.addRole(ArchivedRole).catch(console.error);
			}else{//If the target was archived, unarchive them.
				message.channel.send(target.nickname " has been released from the Archive. Pending good behavior.");
				target.removeRole(ArchivedRole).catch(console.error);
			}
		}else{ //If the target was a mod, taunt the caller about their failure.
			message.channel.send("You cannot archive that user, because they are a mod/admin. Also, your attempt just pinged them, so, have fun with that.");
		}
	}else{ //If the caller is not a mod, then they get slapped.
		if (!message.channel.id=="436192216134844447"){ //If the message is from the archive, ignore it completely.
			message.channel.send(message.author.username+" has proven to be a troublemaker, and has been summarily archived. Consider this lesson carefully.");
			message.member.addRole(ArchivedRole).catch(console.error);
		}
}
}
