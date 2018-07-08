exports.run = (client, message, args) => {

       if(message.member.roles.has('463714859503058955')){ //If they're on the role, delete them.
            console.log("Removing " + message.author.username + " from Notifications role.");
            message.member.removeRole('463714859503058955').catch(console.error);
            message.channel.send("Removed " +message.author.username+" from the Notifications role.");
       }
       else{
           message.channel.send(message.author.username+", you're not on the role.");
       }
}
