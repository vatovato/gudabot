exports.run = (client, message, args) => {
    message.channel.send("http://fate-go.cirnopedia.org/quest_event_us_20180104.php#nav").catch(console.error);
}
