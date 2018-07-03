exports.run = (client, message, args) => {
   //if (!message.channel.id=="408032674582757387"){ //restricts command to only work in #search-channel, which I think would be a good thing.
   //    return();
   //}
  // let myRole = message.guild.roles.find("name", "Notifications");
       if(message.member.roles.has('463714859503058955')){ //If they're on the role, delete them.
            message.member.removeRole('463714859503058955');
           message.channel.send("Removed " +message.member.nickname+" from the Notifications role.");
       }
       else{
           message.channel.send(message.member.nickname+", you're not on the role.");
       }
}
