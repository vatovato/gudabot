exports.run = (client, message, args) => {

var author = message.author.username;
var moment = require('moment');
var now = moment.utc();

if(typeof(args[2]) == "undefined") {
  message.channel.send("You did not add all three parameters. Use !quartz [YYYY-MM-DD] [total logins] [login streak]");
  return;
}

var argsDate = args[0];
var totalLogins = args [1];
var loginStreak = args[2];

//Begin error checking
if(!moment(argsDate, 'YYYY-MM-DD').isValid()) {
  message.channel.send("Your date was not in the YYYY-MM-DD format. Try again.");
  return;
}

if(loginStreak - totalLogins > 0) {
  message.channel.send(`You can't have a login streak of ${loginStreak} that is higher than the total logins of ${totalLogins}.`);
  return;
}

if(moment(argsDate).isBefore(moment())) {
  message.channel.send("The finish date you placed is before today.");
  return;
}

var eventDates = {
  date: [],
  quartz: [],
  tickets: [],
  eventName: []

}
//End error checking

console.log(author + " requested quartz with args " + args);

var iDates = 0;

function createDay(quartz, ticket, date, eventName) {
  eventDates.quartz[iDates] = quartz;
  eventDates.tickets[iDates] = ticket;
  eventDates.date[iDates] = date;
  eventDates.eventName[iDates] = eventName;
  iDates++;
}
createDay(0, 0, "2018-01-11", "Ignored the reward from user survey");
createDay(1, 6, "2018-01-18", "Brunhildr release: No maintenance. 1 quartz from MC quest. 25 quartz from campaign. 1 ticket from Brunhildr trial Q. 5 tickets from campaign.");
createDay(25, 5, "2018-01-22", "Brunhildr login: 25 quartz from campaign. 5 tickets from campaign.");
createDay(10, 1, "2018-01-25", "Valentines: 3 quartz from maintenance. 3 quartz from pre-launch. 4 from main quest (on the same day?). 1 ticket from Bride trial quest.");
createDay(0, 0, "2018-01-27", "Ignored 200 anniversary as we already received that.");
createDay(0, 5, "2018-02-01", "Mana prism shop renewal");
createDay(6, 0, "2018-02-09", "Kara no Kyoukai: 3 quartz from maintenance. 3 quartz from pre-launch.");
createDay(9, 7, "2018-02-10", "KnK quests: 9 quartz from missions. 7 tickets from missions.");
createDay(0, 1, "2018-02-21", "Chaldea Boys: Guessing no maintenance. 1 ticket from Shirou trial quest.");
createDay(3, 0, "2018-02-28", "Prison tower: 3 quartz from maintenance.");
createDay(0, 11, "2018-03-01", "Mana prism shop renewal. 6 tickets from Prison Tower quests");
createDay(0, 0, "2018-03-07", "Bait Karna/Arjuna banner: Guessing no maintenance. Ignored quartz from AnimeJapan campaign.");
createDay(3, 0, "2018-03-11", "Heavens Feel promotion/Strengthening quests: 3 quartz from maintenance.");
createDay(16, 0, "2018-03-14", "America release: Ignored tutorial summon renewal promotion. 3 quartz from maintenance. 3 quartz from pre-launch. Probably 10 quartz from stream/similar stuff.");
createDay(35, 0, "2018-03-15", "America quests: 21 quartz from main quest. 14 quartz from free quests.");
createDay(6, 0, "2018-03-26", "7 Spirits: 3 quartz from maintenance. 3 quartz from pre-launch");
createDay(7, 0, "2018-03-27", "7 Spirits Quests: 7 quartz from main quest.");
createDay(0, 5, "2018-04-01", "Mana prism shop renewal");
createDay(4, 0, "2018-04-05", "Fate/Zero Pre-launch. Ignored the special campaign. 3 quartz from maintenance. 1 quartz from MC quest.");
createDay(0, 0, "2018-04-09", "Ignored Machi x Asobi special campaign");
createDay(6, 0, "2018-04-11", "Fate/Zero: 3 quartz from maintenance. 3 quartz from pre-launch.");
createDay(9, 6, "2018-04-12", "Fate/Zero quests: 3 quartz from main quest. 6 quartz from missions. 6 tickets from missions.");
createDay(0, 3, "2018-04-21", "300 days campaign: 3 tickets.");
createDay(3, 0, "2018-04-26", "Medb banner: 3 quartz from maintenance.");
createDay(0, 5, "2018-05-01", "Mana prism shop renewal");
createDay(0, 0, "2018-05-02", "Cu Alter banner: Guessing no maintenance.");
createDay(0, 0, "2018-05-09", "Kintoki banner: Guessing no maintenance.");
createDay(6, 0, "2018-05-15", "Rashoumon: 3 quartz from maintenance. 3 quartz from pre-launch.");
createDay(6, 11, "2018-05-18", "Rashoumon quests: 6 quartz from main quest. 1 ticket from main quest. 5 tickets from DP. 5 tickets from missions.");
createDay(13, 0, "2018-05-29", "Journey to the West: 3 quartz from maintenance. 3 quartz from pre-launch. 7 quartz from main quest (on the same day?).");
createDay(0, 5, "2018-06-01", "Mana prism shop renewal");
createDay(13, 0, "2018-06-13", "X-million downloads: 3 quartz from maintenance. Conservative estimate of 10 quartz");
createDay(33, 1, "2018-06-25", "1 year anniversary: 3 quartz from maintenance. 30 quartz from promotion. 1 ticket from Da Vinci trial quest.");
createDay(0, 10, "2018-06-26", "1 year anniversary logins: 10 tickets from log-ins.");
createDay(6, 0, "2018-06-27", "Onigashima: 3 quartz from maintenance. 3 quartz from pre-launch.");
createDay(4, 10, "2018-06-28", "Onigashima quests: 4 quartz from quests. 5 tickets from DP. 5 tickets from quests.");
createDay(0, 5, "2018-07-01", "Mana prism shop renewal");
createDay(16, 0, "2018-07-06", "Camelot release: 3 quartz from maintenance. 3 quartz from pre-launch. 10 quartz from stream.");
createDay(30, 0, "2018-07-07", "Camelot quests: 16 quartz from main quest. 14 quartz from free quests.");
createDay(6, 0, "2018-07-26", "Summer event part 1: 3 quartz from maintenance. 3 quartz from pre-launch.");
createDay(8, 4, "2018-07-27", "Summer event part 1 quests: 7 quartz from quests. 1 quartz from Hidden Island free quest. 4 tickets from quests.");
createDay(0, 4, "2018-07-30", "400 days campaign: 4 tickets.");
createDay(0, 5, "2018-08-01", "Mana prism shop renewal");
createDay(0, 0, "2018-08-06", "Summer event part 2: Guessing no maintenance and pre-launch.");
createDay(5, 4, "2018-08-07", "Summer event part 2 quests: 5 quartz from main quest. 4 tickets from brilliant summer quests.");
createDay(3, 0, "2018-08-15", "Titoria Light banner: Guessing no maintenance.");
createDay(6, 0, "2018-08-23", "Loli event: 3 quartz from maintenance. 3 quartz from pre-launch.");
createDay(2, 11, "2018-08-24", "Loli event quests:  2 quartz from missions. 6 tickets from missions. 5 ticket from raids");
createDay(0, 5, "2018-09-01", "Mana prism shop renewal");
createDay(0, 0, "2018-09-05", "Class exclusive banner: Guessing no maintenance.");
createDay(3, 0, "2018-09-12", "Nero fest rerun: 3 quartz from maintenance. Likely no pre-launch.");
createDay(0, 8, "2018-09-13", "Nero fest rerun quests: 8 tickets from exhibition quests.");
createDay(3, 5, "2018-09-19", "X-million Jalter banner: 3 quartz from maintenance. Conservative estimate of 5 tickets");
createDay(7, 0, "2018-09-26", "Halloween rerun: 3 quartz from maintenance. Likely no pre-launch. 4 quartz from main quest on the same day.");
createDay(0, 5, "2018-10-01", "Mana prism shop renewal");
createDay(6, 0, "2018-10-03", "New Halloween event: 3 quartz from maintenance. 3 quartz from pre-launch. Nothing else.");
createDay(0, 0, "2018-10-17", "Ignored Nico Nico broadcast.");
createDay(0, 0, "2018-10-18", "Fate/Extella banner: Guessing no maintenance.");
createDay(3, 0, "2018-10-24", "Round table banner/Hunting quests: 3 quartz from maintenance.");
createDay(3, 0, "2018-10-31", "X-mas rerun: 3 quartz from maintenance. Likely no pre-launch. Nothing else.");
createDay(0, 5, "2018-11-01", "Mana prism shop renewal");
createDay(0, 5, "2018-11-07", "500 days anniversary: 5 summon tickets.");
createDay(0, 0, "2018-11-06", "Shirou banner: Guessing no maintenance");
createDay(6, 0, "2018-11-12", "New X-mas event: 3 quartz from maintenance. 3 quartz from pre-launch.");
createDay(4, 1, "2018-11-13", "New X-mas event quests: 4 quartz from main quest. 1 ticket from main quest.");
createDay(0, 0, "2018-11-14", "GoodCiv banner: Guessing no maintenance.");
createDay(0, 0, "2018-11-15", "Ignored Nico Nico broadcast 2.");
createDay(16, 0, "2018-11-21", "Babylonia release: 3 quartz from maintenance. 3 quartz from pre-launch. 10 quartz from stream.");
createDay(35, 0, "2018-11-22", "Babylonia quests: 21 quartz from main quest. 14 quartz from free quests.");
createDay(0, 5, "2018-11-23", "We'll probably get something Thanksgiving-related. 5 tickets as a conservative estimate.");
createDay(0, 0, "2018-11-28", "Babylonia banner 2: Guessing no maintenance.");
createDay(0, 5, "2018-12-01", "Mana prism shop renewal");
createDay(46, 0, "2018-12-06", "Solomon/Merlin release: 3 quartz from maintenance. 3 quartz from pre-launch. 10 quartz from stream. 30 quartz from 'final battle prep'-campaign.");
createDay(0, 7, "2018-12-07", "Solomon/Merlin quests: 7 tickets from main quest.");

var finishDate = moment(`${argsDate}`, "YYYY-MM-DD");

var now = moment();

var days = finishDate.diff(now, 'days');
var quartzFromTotalLogins = 0;
var quartzFromLoginStreaks = 0;
var ticketsFromLoginStreaks = 0;
var quartzFromEvents = 0;
var ticketsFromEvents = 0;

for (let i = 0; i < days; i++)
  {
    loginStreak++;
    totalLogins++;


    if ((totalLogins == 10) || (totalLogins == 20) || (totalLogins == 30) || (totalLogins == 40) || (totalLogins == 50))
    {
      quartzFromTotalLogins += 4;
    }
    else if (totalLogins == 75)
    {
      quartzFromTotalLogins += 10;
    }
    else if (totalLogins % 50 == 0)
    {
      quartzFromTotalLogins += 20;
    }


    if ((loginStreak % 7 == 2) || (loginStreak % 7 == 4))
    {
      quartzFromLoginStreaks++;
    }
    else if ((loginStreak % 7 == 6) || (loginStreak % 7 == 1))
    {
      quartzFromLoginStreaks += 2;
    }
    else if (loginStreak % 7 == 0)
    {
      ticketsFromLoginStreaks++;
    }
  }

for(let i = 0; i < eventDates.date.length ; i++) {
  if(moment(eventDates.date[i]).isBetween(now, finishDate)) {
    quartzFromEvents += eventDates.quartz[i];
    ticketsFromEvents += eventDates.tickets[i];
  }
}
var totalQuartzFromLogins = quartzFromTotalLogins + quartzFromLoginStreaks;
var dateChar = moment(argsDate).format("MMMM Do, YYYY");
var totalQuartz = totalQuartzFromLogins + quartzFromEvents;
var totalTickets = ticketsFromLoginStreaks + ticketsFromEvents;


message.channel.send(`From today until **${dateChar}** you will get:

- **${totalQuartzFromLogins} Quartz** from logins and login streaks,
- **${ticketsFromLoginStreaks} Tickets** from login streaks,
- **${quartzFromEvents} Quartz** from Events,
- **${ticketsFromEvents} Tickets** from Events.
**For a total of ${totalQuartz} Quartz and ${totalTickets} Tickets.**

_Note that these numbers are estimates and could be lower or higher. They do not take apologems or Facebook giveaways into account._`);

}
