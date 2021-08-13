exports.run = (client, message, args) => {
    message.channel.send({files: ["https://i.imgur.com/1BkeMuX.jpg"]}).catch(console.error);
}
