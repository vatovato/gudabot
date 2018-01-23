exports.run = (client, message, args) => {
    const badCiv = client.emojis.get(380227835014414336);
    message.channel.send("No !nobu command until you give me a nice video! " + badCiv).catch(console.error);
}
