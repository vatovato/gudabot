exports.run = (client, message, args) => {
var moment = require('moment');
var times = {
  time: [],
  serClass: []
};
var now = moment.utc();
var flag = 0;

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

for(let i=1; i<17; i++) {
  /* console.log("i: " + i);
  console.log("Time -1 vs now: " + times.time[i-1].diff(now, 'minutes'));
  console.log("Time +1 vs now: " + times.time[i+1].diff(now,'minutes'));
  console.log(times.serClass[i]);*/
  if(now.diff(times.time[i-1], 'minutes') <= 0 && now.diff(times.time[i+1],'minutes') >= 0) {
    var hours = Math.floor(times.time[i+1].diff(now, 'minutes') / 60);
    var minutes = times.time[i+1].diff(now, 'minutes') % 60;
    console.log("The time now is: " + now.format());
    console.log("Current rate up is for " + times.serClass[i] + ".");
    console.log("Next rate up for " + times.serClass[i+1] + " Class is in " + hours + " hours and " + minutes + " minutes.");
    message.channel.send(`Current rate up is for ${times.serClass[i]} Class. Next rate up for ${times.serClass[i+1]} Class is in ${hours} hours and ${minutes} minutes.`);
    flag = 1;
    return;
  }
  if (flag === 1) {
    console.log("Flag is 1");
    return;
  }
}
if(flag === 0) {
  console.log("Flag is 0");
  var hours = Math.floor(times.time[1].diff(now, 'minutes') / 60);
  var minutes = times.time[1].diff(now, 'minutes') % 60;
  console.log("No rate up at this time. Next rate up is for " + times.serClass[1] + " Class in " + hours + " hours " + minutes + " minutes.");
  message.channel.send(`No rate up at this time. Next rate up is for ${times.serClass[1]} Class in ${hours} hours and ${minutes} minutes.`);
}
}
