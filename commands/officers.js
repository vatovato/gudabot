exports.run = (client, message, args) => {
    message.channel.send({files: ["https://i.imgur.com/MRylHRc.jpg"]}).catch(console.error);
}
