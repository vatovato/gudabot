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
		if(!message.member.roles.cache.has(dict[role])){ //If they don't have the role, do nothing
			message.channel.send(message.author.username+", you don't have the " + message.guild.roles.cache.get(dict[role]).name + " role.");
		}
		else{
			console.log("Removing " + message.author.username + " from " + message.guild.roles.cache.get(dict[role]).name + " role.");
			message.member.roles.remove(dict[role]).catch(console.error); //If they do, remove it.
			message.channel.send("Removed " + message.guild.roles.cache.get(dict[role]).name + " role from user " + message.author.username+".");
		}
	}
	else {
		message.channel.send("Cannot find role " + role + " in this discord server");
	}
}
