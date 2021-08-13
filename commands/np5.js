exports.run = (client, message, args) => {
    message.channel.send({files: ["https://i.imgur.com/QLXShlU.png"]}).catch(console.error);
}
