exports.run = (client, message, args) => {

       if(message.member.roles.has('463714859503058955')){ //If they're on the role, do nothing.
           message.channel.send(message.author.username+", you're already on the role.");
       }
       else{
           console.log("Adding " + message.author.username + " to Notifications role.");
           message.member.addRole('463714859503058955').catch(console.error); //If they don't, add it.
           message.channel.send("Added Notifications role to user " + message.author.username+".");
       }
}
