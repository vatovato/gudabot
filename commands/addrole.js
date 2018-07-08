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
			if(message.member.roles.has(NotificationsID)){ //If they're on the role, do nothing.
				message.channel.send(message.author.username+", you're already on the role.");
			}
			else{
				console.log("Adding " + message.author.username + " to Notifications role.");
				message.member.addRole(NotificationsID).catch(console.error); //If they don't, add it.
				message.channel.send("Added Notifications role to user " + message.author.username+".");
			}
			break;
		case "saber":
		case "lancer":
		case "archer":
		case "rider":
		case "caster":
		case "assassin":
		case "berserker": //For all Class Roles
			if(message.member.roles.has(SaberID)||message.member.roles.has(LancerID)||message.member.roles.has(ArcherID)||message.member.roles.has(RiderID)||message.member.roles.has(CasterID)||message.member.roles.has(AssassinID)||message.member.roles.has(BerserkerID)){//Check if the user has a Class Role already.
				message.channel.send(message.author.username+", you already have a Class.");
			}
			else{ //If the user does not have a class, then add them to the requested class.
				switch(role){ //Determine which class.
					case "saber":
						console.log("Adding " + message.author.username + " to Saber role.");
						message.member.addRole(SaberID).catch(console.error); //Make the user a Saber.
						message.channel.send("Added Saber role to user " + message.author.username+".");
						break;
					case "archer":
						console.log("Adding " + message.author.username + " to archer role.");
						message.member.addRole(ArcherID).catch(console.error); //Make the user an Archer.
						message.channel.send("Added Archer role to user " + message.author.username+".");
						break;
					case "lancer":
						console.log("Adding " + message.author.username + " to Lancer role.");
						message.member.addRole(LancerID).catch(console.error); //Make the user a Lancer.
						message.channel.send("Added Lancer role to user " + message.author.username+".");
						break;
					case "rider":
						console.log("Adding " + message.author.username + " to Rider role.");
						message.member.addRole(RiderID).catch(console.error); //Make the user a Rider.
						message.channel.send("Added Rider role to user " + message.author.username+".");
						break;
					case "caster":
						console.log("Adding " + message.author.username + " to Caster role.");
						message.member.addRole(CasterID).catch(console.error); //Make the user a Caster.
						message.channel.send("Added Caster role to user " + message.author.username+".");
						break;
					case "assassin":
						console.log("Adding " + message.author.username + " to Assassin role.");
						message.member.addRole(AssassinID).catch(console.error); //Make the user a Assassin.
						message.channel.send("Added Assassin role to user " + message.author.username+".");
						break;
					case "berserker":
						console.log("Adding " + message.author.username + " to Berserker role.");
						message.member.addRole(BerserkerID).catch(console.error); //Make the user a Berserker.
						message.channel.send("Added Berserker role to user " + message.author.username+".");
						break;
				}
			}
			break;
		default: //when the args are not a valid role
			message.channel.send("You cannot make yourself a " + role);
			break;
	}
}
