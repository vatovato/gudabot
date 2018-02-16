
//BROKEN BECAUSE SOME materials.servants ARE OVER 1024 CHARACTERS AND SO
//THE RICHEMBED CRASHES THE BOT


exports.run = (client, message, args) => {
const Discord = require('discord.js');
var requestedMat = args.join(" ").toLowerCase();
var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_URL);

if(requestedMat === "bass") {
message.channel.send("https://www.youtube.com/watch?v=XCawU6BE8P8");
return;
}
console.log("Requested Drop Rate for: " + requestedMat);

var flagPosition = '';
var flag = 0;


if(requestedMat == "help") {
  message.channel.send(`- The command accepts **plurals or singulars** of materials (except Servant specific materials such as monuments or gems).
- So if you need to know drop rates for Dragon Fangs, for example, you would type **!drop dragon fang**, **!drop dragon fangs**, **!drop fang** or **!drop fangs**.
- There are exceptions such as Void's dust, where you must avoid using the ' because it crashes the bot. In such case, please use **!drop dust** or **!drop dusts**.
- Servant specific materials can be called as follows:
  1. **Secret Gems (Gold Gems)**: **!drop Secret Gem of [servant_class]**, **!drop gold [servant_class]** or **!yellow [servant_class]**. For example, **!drop gold saber**.
  2. **Magic Gems (Red Gems)**: **!drop Magic Gems of [servant_class]**, or **!drop red [servant_class]**. For example, **!drop red archer**.
  3. **Gems (Blue Gems)**: **!drop Gems of [servant_class]**, or **!drop blue [servant_class]**. For example, **!drop gems of rider**.
  4. **Monuments** can be called with **!drop [servant_class] monument** or **!drop monument [servant_class]**, and also plural. For example, **!drop berserker monuments**.
  5. **Pieces** can be called with **!drop [servant_class] piece** or **!drop piece [servant_class]**, and also plural. For example, **!drop piece assassin**.`);
} else  if(requestedMat.length == 0) {
  message.channel.send("You didn't request any material. Type !drop help to see how to use this command.");
} else {
  connection.query(SELECT )
for (let i=0; i<materials.ap.length; i++) {
  for(let indice in materials.name[i]) {
    var matLowerCase = materials.name[i][indice].toLowerCase();
    if(matLowerCase === requestedMat) {
      flagPosition = i;
      flag = 1;
    }
  }
}

if(flag == 0) {
  message.channel.send("No material with such name. Type !drop help to see how to use this command.");
} else {

  const embed = new Discord.RichEmbed()
  .setTitle(materials.name[flagPosition][0])
  .setThumbnail(materials.image[flagPosition])
  .setURL(materials.url[flagPosition])
  .setDescription(`${materials.area[flagPosition]}: ${materials.quest[flagPosition]} [${materials.ap[flagPosition]} AP]`)
  .addField("AP Per Drop", materials.apPerDrop[flagPosition])
  .addField("Drop Chance", materials.dropChance[flagPosition])

  message.channel.send({embed});
}
}
}
