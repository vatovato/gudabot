exports.run = (data, client, message) => {

  const Discord = require('discord.js');
  var servant = {
    url: '',
    name: '',
    image: '',
    serClass: '',
    rarity: '',
    baseHP: '',
    baseATK: '',
    maxHP: '',
    maxATK: '',
    cards: '',
    np: '',
    npDesc: '',
    growthCurve: '',
    alignments: '',
    traits: ''
  };
  console.log("Initialise Servant Data");

  servant.url = "https://apps.atlasacademy.io/db/JP/servant/" + data.collectionNo;
  console.log("Url: "+servant.url);

  servant.name = data.name;
  console.log("Name: "+servant.name);

  servant.image = data.extraAssets.faces.ascension[4];
  console.log("Image URL: "+servant.image);

  servant.serClass = data.className;
  console.log("Class: "+servant.serClass);

  servant.rarity = data.rarity.toString() + "★";
  console.log("Rarity: "+servant.rarity);

  servant.baseHP = data.hpBase.toString();
  console.log("BaseHP: "+servant.baseHP);

  servant.baseATK = data.atkBase.toString();
  console.log("BaseATK: "+servant.baseATK);

  servant.maxHP = data.hpMax.toString();
  console.log("MaxHP: "+servant.maxHP);

  servant.maxATK = data.atkMax.toString();
  console.log("MaxATK: "+servant.maxATK);

  servant.cards = `${data.cards[0]}, ${data.cards[1]}, ${data.cards[2]}, ${data.cards[3]}, ${data.cards[4]}`;
  console.log("Cards: "+servant.cards);

  servant.np = "**Noble Phantasm: " + data.noblePhantasms[data.noblePhantasms.length - 1].name.trim() + "(" + data.noblePhantasms[data.noblePhantasms.length - 1].card + ")**";
  console.log("NP Name: "+servant.np);

  servant.npDesc = data.noblePhantasms[data.noblePhantasms.length - 1].detail;
  console.log("NP Descr: "+servant.npDesc);

  servant.growthCurve = data.growhtCurve;
  console.log("Growth Curve: "+servant.growthCurve.toString());

  servant.alignments = "N/A";
  console.log("Alignments: "+servant.alignments);

  for ( var i = 0; i < data.traits.length; ++i ) {
    if ( i > 0 ) {
      servant.traits += ", ";
    }
    servant.traits += data.traits[i].name;
  }
  console.log("Traits: "+servant.traits);

  const embed = new Discord.MessageEmbed()
  .setTitle(servant.name)
  .setThumbnail(servant.image)
  .setURL(servant.url)
  .addField("Class", servant.serClass, true)
  .addField("Rarity", servant.rarity, true)
  .addField("Base HP", servant.baseHP, true)
  .addField("Base ATK", servant.baseATK, true)
  .addField("Max HP", servant.maxHP, true)
  .addField("Max ATK", servant.maxATK, true)
  .addField("Growth Curve", servant.growthCurve, true)
  .addField("Alignments",servant.alignments, true)
  .addField("Traits",servant.traits)
  .addField("Cards", servant.cards)
  .addField(servant.np, servant.npDesc)

  message.channel.send({embeds: [embed]});
}
