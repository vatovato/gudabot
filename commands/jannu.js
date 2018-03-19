exports.run = (client, message, args) => {
var args = args.toString().toLowerCase();
if(args == "alter") {
  message.channel.send("https://cdn.discordapp.com/attachments/404408579144286209/425310765734690828/jannu_alter.gif").catch(console.error);
  return;
} else if (args == "fast") {
  message.channel.send("https://cdn.discordapp.com/attachments/404408579144286209/425335640243044362/JANNUUUU.gif").catch(console.error);
  return;
}
message.channel.send("https://cdn.discordapp.com/attachments/404408579144286209/425310265844695040/jannu.gif").catch(console.error);
}
