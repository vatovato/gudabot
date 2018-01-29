
exports.run = (client, message, args) => {

  var fullQuery = args.join(" ");
  var youTubeQuery = args.join("+").toLowerCase();
  var searchUrl = "https://www.youtube.com/results?search_query=" + youTubeQuery;
  //Stores the 3 digit code that identifies a Servant in cirno
  var client = client;
  var message = message;
  console.log(`Required youtube search for ${youTubeQuery}`);

      message.channel.send(`Search for ${fullQuery}: ${searchUrl}`);
}
