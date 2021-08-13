exports.run = (client, message, args) => {
  let commandFile2 = require(`./master.js`);
  commandFile2.run(client, message, args);
}
