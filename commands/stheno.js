exports.run = (client, message, args) => {
    message.channel.send({files: ["https://i.imgur.com/Xm7R7kz.png"]}).catch(console.error);
}
