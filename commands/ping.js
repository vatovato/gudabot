exports.run = (client, message, args) => {

var authorName = message.author.username;
var args = args.toString().toLowerCase();
if(args === "kayos" || args === "kayos90") {
  message.channel.send("A-are you insane? I don't wanna be deleted <:blobsweats:365262148814766080>");
  console.log(authorName + " tried to ping kayos!!!");
}

}
