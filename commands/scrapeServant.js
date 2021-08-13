exports.run = (data, client, message) => {

  const Discord = require('discord.js');
  var servant = {
    url: 'https://apps.atlasacademy.io/db/JP/servant/' + data.collectionNo,
    name: data.name,
    image: data.extraAssets.faces.ascension[4],
    serClass: data.className,
    rarity: data.rarity.toString() + "★",
    baseHP: data.hpBase.toString(),
    baseATK: data.atkBase.toString(),
    maxHP: data.hpMax.toString(),
    maxATK: data.atkMax.toString(),
    cards: data.cards[0] + data.cards[1] + data.cards[2] + data.cards[3] + data.cards[4],
    np: "**Noble Phantasm: " + data.noblePhantasms[data.noblePhantasms.length - 1].name.trim() + "(" + data.noblePhantasms[data.noblePhantasms.length - 1].card + ")**",
    npDesc: data.noblePhantasms[data.noblePhantasms.length - 1].detail,
    growthCurve: data.growhtCurve 
  };
  console.log("Servant Data Initialised");

  var alignments = "N/A";
  console.log("Alignments: "+alignments);

  var traits = '';
  for ( var i = 0; i < data.traits.length; ++i ) {
    if ( i > 0 ) {
      traits += ", ";
    }
    traits += data.traits[i].name;
  }
  console.log("Traits: "+traits);

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
  .addField("Alignments",alignments, true)
  .addField("Traits",traits)
  .addField("Cards", servant.cards)
  .addField(servant.np, servant.npDesc)

  message.channel.send({embeds: [embed]});
}
