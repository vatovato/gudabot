const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
// Adds express to bypass Heroku's 30 minutes sleep
const express = require('express');
const app = express();
var http = require('http');
const Enmap = require('enmap');
const EnmapLevel = require('enmap-level');

const tableSource = new EnmapLevel({name: "friend"});
const friend = new Enmap({provider: tableSource});


// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 5000;

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Make express look in the 'public' directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', (request, response) => {
    // ejs render automatically looks in the views folder
    response.render('index');
});

app.listen(port, () => {
    // will echo 'Our app is running on http://localhost:5000 when run locally'
    console.log('Our app is running on http://localhost:' + port);
});

// pings server every 15 minutes to prevent dynos from sleeping
setInterval(() => {
 http.get('http://gudabot.herokuapp.com');
}, 900000);

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        let eventFunction = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        // super-secret recipe to call events with all their proper arguments *after* the `client` var.
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});

client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.indexOf(process.env.PREFIX) !== 0) return;

    // This is the best way to define args. Trust me.
    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    //sqlite portion of the add Friend Code command
    if(command === "addfc") {
      var authorId = message.author.id;
      var authorName = message.author.username;
      var fc = args.join(" ");
      if(args.length == 0) {
        message.channel.send(`**${authorName}**, you did not add your Friend Code. Use !addfc friend_code. For example, !addfc 123,123,123.`);
      } else if(friend.has(`${authorId}`)) {
        console.log(authorName + " wants to update his Friend Code.");
        friend.set(`${authorId}`,`${fc}`);
        var updatedFriendCode = friend.get(`${authorId}`);
        message.channel.send(`**${authorName}**, you updated your Friend Code to **${updatedFriendCode}**.`);
      } else {
      console.log(authorName + " wants to add his Friend Code.");
      friend.set(`${authorId}`,`${fc}`);
      var newFriendCode = friend.get(`${authorId}`);
      message.channel.send(`**${authorName}**, you created your Friend Code as **${newFriendCode}**.`);
    }
      return;
    }

    //sqlite portion of the request Friend Code command
    if(command === "myfc") {
      var authorId = message.author.id;
      var authorName = message.author.username;
      console.log(authorName + " wants to call his Friend Code.");
      if(!friend.has(`${authorId}`)) {
        message.channel.send(`**${authorName}**, you're not on the table yet. Use !addfc friend_code first. For example, !addfc 123,123,123.`);
      } else {
      var friendCode = friend.get(`${authorId}`);
      console.log("Friend Code: " + friendCode);
      message.channel.send(`**${authorName}**, your Friend Code is **${friendCode}**.`);
    }
      return;
    }

    // Calls the command from the commands folder, along with Discord Client
    // and arguments
    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }


});

client.login(process.env.BOT_TOKEN);
