exports.run = (client, message, args) => {

var moment = require('moment');
var now = moment.utc();

var argsDate = args[0];
var loginStreak = args[1];
var totalLogins = args [2];

console.log("argsDate: " + argsDate);
console.log("loginStreak: " + loginStreak);
console.log("totalLogins: " + totalLogins);

var finishDate = moment(`${argsDate}`, "YYYY-MM-DD");
console.log("finishDate: " + finishDate);

var now = moment();
console.log("now: " + now);

var days = finishDate.diff(now, 'days');
console.log("days: " + days);
var quartzFromTotalLogins = 0;
var quartzFromLoginStreaks = 0;
var ticketsFromLoginStreaks = 0;

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
  console.log("quartzFromTotalLogins: " + quartzFromTotalLogins);
  console.log("quartzFromLoginStreaks: " + quartzFromLoginStreaks);
  console.log("ticketsFromLoginStreaks: " + ticketsFromLoginStreaks);

}
