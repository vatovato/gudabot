exports.run = (client, message, args) => {
    message.channel.send({files: ["https://i.imgur.com/aQHrcAK.jpg"]}).catch(console.error);
}
