const { Client, Intents } = require("discord.js");

// Discord.js v13 requires us to pass Intents to specify what events the bot should receive
// Just give every non-privileged intent for now.
const botIntents = new Intents(32509);

const client = new Client({ intents: botIntents });
const fs = require("fs");
// Adds express to bypass Heroku's 30 minutes sleep
const express = require('express');
const app = express();
var http = require('http');

var mysql = require('mysql2');
var connection = mysql.createConnection(process.env.JAWSDB_URL);


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

client.on("messageCreate", message => {
    if (message.author.bot) return;
    if (!message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES") ) return; // Prevent crashes with commands that send messages in channels where bot doesn't have permissions
    // Substitute twitter links that contain videos with fxtwitter
    if (message.content.includes("https://twitter.com/")) {
        let twitFix = require(`./plugins/twitfix.js`);
        twitFix.run(client, message);
        return;
	}
    if (message.content.indexOf(process.env.PREFIX) !== 0) return;

    // This is the best way to define args. Trust me.
    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    if(command === "roll10" || command === "myrolls" || command === "resetrolls" || command === "globalrolls" || command === "myfc") {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, connection);
      return;
    }
    if(command === "addfc" || command === "wl" || command =="wlimage" || command == "addwl" || command === "yoloroll" || command === "games") {
      let commandFile = require(`./commands/${command}.js`)
      commandFile.run(client, message, connection, args);
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

client.on("messageDelete", (messageDelete) => {
 console.log(`DELETED MESSAGE ALERT: ${messageDelete.author.tag} deleted "${messageDelete.content}".`);
});

client.login(process.env.BOT_TOKEN);
