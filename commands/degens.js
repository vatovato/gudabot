exports.run = (client, message, args) => {
    message.channel.send({files: ["https://media.giphy.com/media/8rElMK4TD4wSun2WBJ/giphy.gif?width=321&height=181"]}).catch(console.error);
}
