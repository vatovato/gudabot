exports.run = (client, message, args) => {
    message.channel.send({files: ["https://i.imgur.com/QJVndxY.png"]}).catch(console.error);
}
