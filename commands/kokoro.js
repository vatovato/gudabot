exports.run = (client, message, args) => {
    message.channel.send({files: ["https://i.imgur.com/TP8Hz49.jpg"]}).catch(console.error);
}
