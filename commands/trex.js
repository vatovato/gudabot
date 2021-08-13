exports.run = (client, message, args) => {
    message.channel.send({files: ["https://i.imgur.com/yN7aRZf.png"]}).catch(console.error);
}
