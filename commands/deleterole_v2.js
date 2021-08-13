exports.run = (client, message, args) => {
var role = 
       if(message.member.roles.cache.has('463714859503058955')){ //If they're on the role, delete them.
            console.log("Removing " + message.author.username + " from Notifications role.");
            message.member.roles.remove('463714859503058955').catch(console.error);
            message.channel.send("Removed " +message.author.username+" from the Notifications role.");
       }
       else{
           message.channel.send(message.author.username+", you're not on the role.");
       }
}
