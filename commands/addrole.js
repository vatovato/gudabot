exports.run = (client, message, args) => {

	var dict = {};

	dict["saber"]='465534758827589642';
	dict["lancer"]='465552289684520970';
	dict["archer"]='465552334580088832';
	dict["rider"]='465552440532402187';
	dict["caster"]='465552490952261652';
	dict["assassin"]='465552550138216478';
	dict["berserker"]='465552649446752261';
	dict["notifications"]='463714859503058955';
	dict["mafia"]='869280280467349554';
	dict["genshin"]='832605314728984606';

	var role= args.join(" ").toLowerCase();
	if ( role in dict && message.guild.roles.cache.get(dict[role]) ) {
		switch(role){ //Check what role the user requested
			case "saber":
			case "lancer":
			case "archer":
			case "rider":
			case "caster":
			case "assassin":
			case "berserker": //For all Class Roles
				if(message.member.roles.cache.has(dict["saber"])||message.member.roles.cache.has(dict["lancer"])||message.member.roles.cache.has(dict["archer"])||message.member.roles.cache.has(dict["rider"])||message.member.roles.cache.has(dict["caster"])||message.member.roles.cache.has(dict["assassin"])||message.member.roles.cache.has(dict["berserker"])){
					//If the user has a Class Role already, break out of the switch case early.
					message.channel.send(message.author.username+", you already have a Class.");
					break;
				}
			case "notifications": //Notifications
			case "mafia": //Mafia
			case "genshin": //Genshin
				if(message.member.roles.cache.has(dict[role])){ //If they're on the role, do nothing.
					message.channel.send(message.author.username+", you're already on the role.");
				}
				else{
					console.log("Adding " + message.author.username + " to " + message.guild.roles.cache.get(dict[role]).name + " role.");
					message.member.roles.add(dict[role]).catch(console.error); //If they don't, add it.
					message.channel.send("Added " + message.guild.roles.cache.get(dict[role]).name + " role to user " + message.author.username+".");
				}
				break;
			default: //when the args are not a valid role
				message.channel.send("You cannot make yourself a " + role);
				break;
		}
	}
	else {
		message.channel.send("Cannot find role " + role + " in this discord server");
	}
}
