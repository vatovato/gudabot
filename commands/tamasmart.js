exports.run = (client, message, args) => {
    message.channel.send({files: ["https://i.imgur.com/3dudCNR.png"]}).catch(console.error);
}
