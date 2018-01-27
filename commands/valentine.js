exports.run = (client, message, args) => {
var moment = require('moment');
var times = {
  time: [],
  serClass: []
};
var now = moment.utc();
var flag = 0;
var argClass = args[0];
console.log("Requested valentine command.");
times.time[0] = moment.utc('2018-01-10T00:00:00');
times.serClass[0] = 'Undefined Servant';
times.time[1] = moment.utc('2018-01-26T00:00:00');
times.serClass[1] = 'Rider';
times.time[2] = moment.utc('2018-01-26T12:00:00');
times.serClass[2] = 'Assassin';
times.time[3] = moment.utc('2018-01-27T00:00:00');
times.serClass[3] = 'Lancer';
times.time[4] = moment.utc('2018-01-27T12:00:00');
times.serClass[4] = 'Archer';
times.time[5] = moment.utc('2018-01-28T00:00:00');
times.serClass[5] = 'Rider';
times.time[6] = moment.utc('2018-01-28T12:00:00');
times.serClass[6] = 'Saber';
times.time[7] = moment.utc('2018-01-29T00:00:00');
times.serClass[7] = 'Rider';
times.time[8] = moment.utc('2018-01-29T12:00:00');
times.serClass[8] = 'Saber';
times.time[9] = moment.utc('2018-01-30T00:00:00');
times.serClass[9] = 'Caster';
times.time[10] = moment.utc('2018-01-30T12:00:00');
times.serClass[10] = 'Berserker';
times.time[11] = moment.utc('2018-01-31T00:00:00');
times.serClass[11] = 'Saber';
times.time[12] = moment.utc('2018-01-31T12:00:00');
times.serClass[12] = 'Archer';
times.time[13] = moment.utc('2018-02-01T00:00:00');
times.serClass[13] = 'Assassin';
times.time[14] = moment.utc('2018-02-01T12:00:00');
times.serClass[14] = 'Caster';
times.time[15] = moment.utc('2018-02-02T00:00:00');
times.serClass[15] = 'Lancer';
times.time[16] = moment.utc('2018-02-02T12:00:00');
times.serClass[16] = 'Saber';
times.time[17] = moment.utc('2018-02-10T00:00:00');
times.serClass[17] = 'Undefined Servant';
if(typeof argClass == 'undefined') {
for(let i=1; i<17; i++) {

  if(times.time[i-1].diff(now, 'minutes') <= 0 && times.time[i].diff(now, 'minutes') >= 0) {
    /*console.log("Now: " + now.utc());
    console.log("Difference against i-1: " + now.diff(times.time[i-1], 'hours'));
    console.log("Difference against i: " + times.time[i].diff(now,'hours'));*/
    var hours = Math.floor(times.time[i].diff(now, 'minutes') / 60);
    var minutes = times.time[i].diff(now, 'minutes') % 60;

    message.channel.send(`Current rate up is for **${times.serClass[i-1]} Class**. Next rate up for **${times.serClass[i]} Class** is in ${hours} hours and ${minutes} minutes.`);
    flag = 1;
    return;
  }
  if (flag === 1) {
    console.log("Flag is 1");
    return;
  }
}
if(flag === 0) {

  var hours = Math.floor(times.time[1].diff(now, 'minutes') / 60);
  var minutes = times.time[1].diff(now, 'minutes') % 60;

  message.channel.send(`No rate up at this time. Next rate up is for ${times.serClass[1]} Class in ${hours} hours and ${minutes} minutes.`);
}
} else {
  argClass = argClass.toLowerCase();

  var flag2 = 0;

  for(let j = 1; j<times.time.length; j++) {
    if(times.serClass[j].toLowerCase() == argClass && times.time[j].diff(now,'minutes')>0) {
      var rateUpTime = moment(times.time[j]).format("dddd, MMMM Do YYYY, h:mm:ss a");
      message.channel.send(`Next rate up for ${argClass} is on ${rateUpTime}.`);
      flag2 = 1;
      return;
    }
  }
  if(flag === 0) {
    message.channel.send(`No more rate ups for ${argClass} Class servants, or wrong Class entered.`);
  }
}
}
