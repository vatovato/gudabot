exports.run = (client, message, args) => {
    message.channel.send(`Current event - Valentine's Day: http://fate-go.cirnopedia.org/quest_event_us_20180125.php#nav`).catch(console.error);
}
