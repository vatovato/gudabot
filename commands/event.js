exports.run = (client, message, args) => {
    message.channel.send(`Current event: http://fategrandorder.wikia.com/wiki/2M_Download_Campaign_(US)
    Future event: http://fate-go.us/news/?category=NEWS&article=%2Fiframe%2F2018%2F0119_valentines%2F`).catch(console.error);
}
