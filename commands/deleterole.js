exports.run = (client, message, args) => {

	const SaberID='465534758827589642';
	const LancerID='465552289684520970';
	const ArcherID='465552334580088832';
	const RiderID='465552440532402187';
	const CasterID='465552490952261652';
	const AssassinID='465552550138216478';
	const BerserkerID='465552649446752261';
	const NotificationsID='463714859503058955';
	var role= args.join(" ").toLowerCase();
	switch(role){ //Check what role the user requested
		case "notifications": //Notifications
			if(!message.member.roles.has(NotificationsID)){ //If they don't have the role, do nothing
				message.channel.send(message.author.username+", you don't have the Notifications role.");
			}
			else{
				console.log("Removing " + message.author.username + " from Notifications role.");
				message.member.removeRole(NotificationsID).catch(console.error); //If they do, remove it.
				message.channel.send("Removed Notifications role from user " + message.author.username+".");
			}
			break;
		case "saber":
			if(!message.member.roles.has(SaberID)){ //If they don't have the role, do nothing
				message.channel.send(message.author.username+", you don't have the Saber role.");
			}
			else{
				console.log("Removing " + message.author.username + " from Saber role.");
				message.member.removeRole(SaberID).catch(console.error); //If they do, remove it.
				message.channel.send("Removed Saber role from user " + message.author.username+".");
			}
			break;
		case "lancer":
			if(!message.member.roles.has(NotificationsID)){ //If they don't have the role, do nothing
				message.channel.send(message.author.username+", you don't have the Lancer role.");
			}
			else{
				console.log("Removing " + message.author.username + " from Lancer role.");
				message.member.removeRole(LancerID).catch(console.error); //If they do, remove it.
				message.channel.send("Removed Lancer role from user " + message.author.username+".");
			}
			break;
		case "archer":
			if(!message.member.roles.has(ArcherID)){ //If they don't have the role, do nothing
				message.channel.send(message.author.username+", you don't have the Archer role.");
			}
			else{
				console.log("Removing " + message.author.username + " from Archer role.");
				message.member.removeRole(ArcherID).catch(console.error); //If they do, remove it.
				message.channel.send("Removed Archer role from user " + message.author.username+".");
			}
			break;
		case "rider":
			if(!message.member.roles.has(RiderID)){ //If they don't have the role, do nothing
				message.channel.send(message.author.username+", you don't have the Rider role.");
			}
			else{
				console.log("Removing " + message.author.username + " from Rider role.");
				message.member.removeRole(RiderID).catch(console.error); //If they do, remove it.
				message.channel.send("Removed Rider role from user " + message.author.username+".");
			}
			break;
		case "caster":
			if(!message.member.roles.has(CasterID)){ //If they don't have the role, do nothing
				message.channel.send(message.author.username+", you don't have the Caster role.");
			}
			else{
				console.log("Removing " + message.author.username + " from Caster role.");
				message.member.removeRole(CasterID).catch(console.error); //If they do, remove it.
				message.channel.send("Removed Caster role from user " + message.author.username+".");
			}
			break;
		case "assassin":
			if(!message.member.roles.has(AssassinID)){ //If they don't have the role, do nothing
				message.channel.send(message.author.username+", you don't have the Assassin role.");
			}
			else{
				console.log("Removing " + message.author.username + " from Assassin role.");
				message.member.removeRole(AssassinID).catch(console.error); //If they do, remove it.
				message.channel.send("Removed Assassin role from user " + message.author.username+".");
			}
			break;
		case "berserker":
			if(!message.member.roles.has(BerserkerID)){ //If they don't have the role, do nothing
				message.channel.send(message.author.username+", you don't have the Berserker role.");
			}
			else{
				console.log("Removing " + message.author.username + " from Berserker role.");
				message.member.removeRole(BerserkerID).catch(console.error); //If they do, remove it.
				message.channel.send("Removed Berserker role from user " + message.author.username+".");
			}
			break;
		default: //when the args are not a valid role
			message.channel.send("You don't have the " + role + "role. Probably for good reason.");
			break;
	}
}
