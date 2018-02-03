const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
// Adds express to bypass Heroku's 30 minutes sleep
const express = require('express');
const app = express();
var http = require('http');
const sql = require("sqlite");
sql.open("./friend.sqlite");


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
        message.channel.send("You did not add your Friend Code. Use !addfc friend_code. For example, !addfc 123,123,123.");
      } else {
      console.log(authorName + " wants to add / update his friend code.");
      sql.get(`SELECT * FROM friends WHERE userId ="${authorId}"`).then(row => {
        if (!row) {
          console.log("User did not exist. Creating.");
          sql.run("INSERT INTO friends (userId, friendCode) VALUES (?, ?)", [authorId, fc]);
          message.channel.send(`**${authorName}**, you have created your Friend Code as **${fc}**.`);
        } else {
          console.log("User already exists. Updating.");
          sql.run(`UPDATE friends SET friendCode = "${fc}" WHERE userId = "${authorId}"`);
          message.channel.send(`**${authorName}**, you have updated your Friend Code to **${fc}**.`);
        }

      }).catch(() => {
        console.error;
        console.log("Error.");
        sql.run("CREATE TABLE IF NOT EXISTS friends (userId TEXT, friendCode TEXT)").then(() => {
          console.log("Table did not exist. Creating table and inserting user.");
          sql.run("INSERT INTO friends (userId, friendCode) VALUES (?, ?)", [authorId, fc]);
          message.channel.send(`Table did not exist. Created table and added **${fc}** to User **${authorName}**.`);
        });
      });
    }
      return;
    }

    //sqlite portion of the request Friend Code command
    if(command === "myfc") {
      var authorId = message.author.id;
      var authorName = message.author.username;
      console.log(authorName + " wants to call his Friend Code.");
      sql.get(`SELECT * FROM friends WHERE userId ="${authorId}"`).then(row => {
      if (!row) {
        message.channel.send("You don't exist inside the table. First use !addfc friend_code. For example, !addfc 123,123,123.");
      } else {
        message.channel.send(`Friend Code for **${authorName}** is **${row.friendCode}**.`)
      }
      //sql.run(`UPDATE friends SET friendCode = ${fc} WHERE userId = ${authorId}`);
    }).catch(() => {
      console.error;
      console.log("Error.");
          message.channel.send(`Something went wrong, please try again.`);
    });
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
