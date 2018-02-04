exports.run = (client, message, args) => {
const Discord = require('discord.js');
var requestedMat = args.join(" ").toLowerCase();
console.log("Requested Drop Rate for: " + requestedMat);
var materials = {
  name: [],
  area: [],
  quest: [],
  ap: [],
  apPerDrop: [],
  dropChance: [],
  image: [],
};
var flagPosition = '';
var flag = 0;
materials.name[0] = ['Evil Bone', 'Bone','Evil Bones','Bones'];
materials.area[0] = 'Fuyuki';
materials.quest[0] = 'Unknown Coord. X-C';
materials.ap[0] = '4';
materials.apPerDrop[0] = '21.8';
materials.dropChance[0] = '18.4%';
materials.image[0] = 'http://fate-go.cirnopedia.org/icons/item/item_022.png';

materials.name[1] = ['Proof of Hero'];
materials.area[1] = 'Okeanos';
materials.quest[1] = 'Pirate Ship';
materials.ap[1] = '12';
materials.apPerDrop[1] = '20.2';
materials.dropChance[1] = '59.4%';
materials.image[1] = 'http://fate-go.cirnopedia.org/icons/item/item_009.png';

materials.name[2] = ['Dragon Fang', 'Fang', 'Fangs','Dragon Fangs'];
materials.area[2] = 'Okeanos';
materials.quest[2] = 'Island of Wyverns';
materials.ap[2] = '14';
materials.apPerDrop[2] = '27.9';
materials.dropChance[2] = '50.1%';
materials.image[2] = 'http://fate-go.cirnopedia.org/icons/item/item_018.png';

materials.name[3] = ['Void`s Dust', 'Voids Dust', 'Dust', 'Void Dust'];
materials.area[3] = 'Septem';
materials.quest[3] = 'Massilia';
materials.ap[3] = '9';
materials.apPerDrop[3] = '45.8';
materials.dropChance[3] = '19.7%';
materials.image[3] = 'http://fate-go.cirnopedia.org/icons/item/item_011.png';

materials.name[4] = ['Seed of Yggdrasil', 'Seed', 'Seeds'];
materials.area[4] = 'Okeanos';
materials.quest[4] = 'Bountiful Sea';
materials.ap[4] = '18';
materials.apPerDrop[4] = '58.4';
materials.dropChance[4] = '30.8%';
materials.image[4] = 'http://fate-go.cirnopedia.org/icons/item/item_008.png';

materials.name[5] = ['Ghost Lantern', 'Lantern', 'Lanterns', 'Ghost Lanterns'];
materials.area[5] = 'Okeanos';
materials.quest[5] = 'Stormy Seas';
materials.ap[5] = '15';
materials.apPerDrop[5] = '67.3';
materials.dropChance[5] = '22.3%';
materials.image[5] = 'http://fate-go.cirnopedia.org/icons/item/item_014.png';

materials.name[6] = ['Octuplet Crystal','Crystal','Crystals','Octuplet Crystals'];
materials.area[6] = 'Okeanos';
materials.quest[6] = 'Two-Current Sea';
materials.ap[6] = '14';
materials.apPerDrop[6] = '125.6';
materials.dropChance[6] = '11.1%';
materials.image[6] = 'http://fate-go.cirnopedia.org/icons/item/item_021.png';

materials.name[7] = ['Serpent Jewel','Jewel','Jewels','Serpent Jewels'];
materials.area[7] = 'Okeanos';
materials.quest[7] = 'Sunken Rock Seas';
materials.ap[7] = '17';
materials.apPerDrop[7] = '106.3';
materials.dropChance[7] = '16%';
materials.image[7] = 'http://fate-go.cirnopedia.org/icons/item/item_015.png';

materials.name[8] = ['Phoenix Feather','Phoenix Feathers','Feathers','Feather'];
materials.area[8] = 'Chaldea (Sunday)';
materials.quest[8] = 'Saber 30AP';
materials.ap[8] = '30';
materials.apPerDrop[8] = '172.9';
materials.dropChance[8] = '17.4%';
materials.image[8] = 'http://fate-go.cirnopedia.org/icons/item/item_007.png';

materials.name[9] = ['Eternal Gear', 'Eternal Gears', 'Gear', 'Gears'];
materials.area[9] = 'London';
materials.quest[9] = 'Clerkenwell';
materials.ap[9] = '18';
materials.apPerDrop[9] = '67.6';
materials.dropChance[9] = '26.6%';
materials.image[9] = 'http://fate-go.cirnopedia.org/icons/item/item_016.png';

materials.name[10] = ['Forbidden Page','Page','Pages','Forbidden Pages'];
materials.area[10] = 'London';
materials.quest[10] = 'Hyde Park';
materials.ap[10] = '20';
materials.apPerDrop[10] = '72.8';
materials.dropChance[10] = '27.5%';
materials.image[10] = 'http://fate-go.cirnopedia.org/icons/item/item_017.png';

materials.name[11] = ['Homunculus Baby','Homunculus','Baby'];
materials.area[11] = 'London';
materials.quest[11] = 'Southwark';
materials.ap[11] = '19';
materials.apPerDrop[11] = '61.4';
materials.dropChance[11] = '31%';
materials.image[11] = 'http://fate-go.cirnopedia.org/icons/item/item_020.png';

materials.name[12] = ['Meteor Horseshoe','Horseshoe','Horse Shoe','Horse Shoes','Horseshoes'];
materials.area[12] = 'Okeanos';
materials.quest[12] = 'Caldera Island';
materials.ap[12] = '17';
materials.apPerDrop[12] = '134.8';
materials.dropChance[12] = '12.6%';
materials.image[12] = 'http://fate-go.cirnopedia.org/icons/item/item_.png';

materials.name[13] = ['Claw of Chaos','Claws of Chaos','Claw','Claws'];
materials.area[13] = 'Chaldea (Wednesday)';
materials.quest[13] = 'Berserker 40AP';
materials.ap[13] = '40';
materials.apPerDrop[13] = '346.7';
materials.dropChance[13] = '11.5%';
materials.image[13] = 'http://fate-go.cirnopedia.org/icons/item/item_013.png';

materials.name[14] = ['Heart of the Foreign God','Heart','Hearts'];
materials.area[14] = 'Chaldea (Friday)';
materials.quest[14] = 'Caster 30AP';
materials.ap[14] = '30';
materials.apPerDrop[14] = '500';
materials.dropChance[14] = '6%';
materials.image[14] = 'http://fate-go.cirnopedia.org/icons/item/item_023.png';

materials.name[15] = ['Dragons Reverse Scale','Dragon Scale','Dragon Scales','Scales','Scale'];
materials.area[15] = 'Chaldea (Thursday)';
materials.quest[15] = 'Rider 40AP';
materials.ap[15] = '40';
materials.apPerDrop[15] = '476.1';
materials.dropChance[15] = '8.4%';
materials.image[15] = 'http://fate-go.cirnopedia.org/icons/item/item_012.png';

materials.name[16] = ['Secret Gem of Saber','Gold Saber','Yellow Saber'];
materials.area[16] = 'Chaldea (Sunday)';
materials.quest[16] = 'Saber 40AP';
materials.ap[16] = '40';
materials.apPerDrop[16] = '149.4';
materials.dropChance[16] = '26.8%';
materials.image[16] = 'http://fate-go.cirnopedia.org/icons/item/item_057.png';

materials.name[17] = ['Secret Gem of Archer','Gold Archer','Yellow Archer'];
materials.area[17] = 'Chaldea (Monday)';
materials.quest[17] = 'Archer 40AP';
materials.ap[17] = '40';
materials.apPerDrop[17] = '117.8';
materials.dropChance[17] = '34%';
materials.image[17] = 'http://fate-go.cirnopedia.org/icons/item/item_058.png';

materials.name[18] = ['Secret Gem of Lancer','Gold Lancer','Yellow Lancer'];
materials.area[18] = 'Chaldea (Tuesday)';
materials.quest[18] = 'Lancer 40AP';
materials.ap[18] = '40';
materials.apPerDrop[18] = '146.6';
materials.dropChance[18] = '27.3%';
materials.image[18] = 'http://fate-go.cirnopedia.org/icons/item/item_059.png';

materials.name[19] = ['Secret Gem of Rider','Gold Rider','Yellow Rider'];
materials.area[19] = 'Chaldea (Thursday)';
materials.quest[19] = 'Rider 40AP';
materials.ap[19] = '40';
materials.apPerDrop[19] = '115.3';
materials.dropChance[19] = '34.7%';
materials.image[19] = 'http://fate-go.cirnopedia.org/icons/item/item_060.png';

materials.name[20] = ['Secret Gem of Caster','Gold Caster','Yellow Caster'];
materials.area[20] = 'Chaldea (Friday)';
materials.quest[20] = 'Caster 40AP';
materials.ap[20] = '40';
materials.apPerDrop[20] = '49.8';
materials.dropChance[20] = '80.3%';
materials.image[20] = 'http://fate-go.cirnopedia.org/icons/item/item_061.png';

materials.name[21] = ['Secret Gem of Assassin','Gold Assassin','Yellow Assassin'];
materials.area[21] = 'Chaldea (Saturday)';
materials.quest[21] = 'Assassin 40AP';
materials.ap[21] = '40';
materials.apPerDrop[21] = '183.2';
materials.dropChance[21] = '21.8%';
materials.image[21] = 'http://fate-go.cirnopedia.org/icons/item/item_062.png';

materials.name[22] = ['Secret Gem of Berserker','Gold Berserker','Yellow Berserker'];
materials.area[22] = 'Chaldea (Wednesday)';
materials.quest[22] = 'Berserker 40AP';
materials.ap[22] = '40';
materials.apPerDrop[22] = '167.6';
materials.dropChance[22] = '23.9%';
materials.image[22] = 'http://fate-go.cirnopedia.org/icons/item/item_063.png';

materials.name[50] = ['Magic Gem of Saber','Red Saber', 'Saber Red'];
materials.area[50] = 'Chaldea (Sunday)';
materials.quest[50] = 'Saber 30AP';
materials.ap[50] = '30';
materials.apPerDrop[50] = '23.9';
materials.dropChance[50] = '125.3%';
materials.image[50] = 'http://fate-go.cirnopedia.org/icons/item/item_049.png';

materials.name[23] = ['Magic Gem of Archer','Red Archer','Archer Red'];
materials.area[23] = 'Chaldea (Monday)';
materials.quest[23] = 'Archer 30AP';
materials.ap[23] = '30';
materials.apPerDrop[23] = '22.9';
materials.dropChance[23] = '130.9%';
materials.image[23] = 'http://fate-go.cirnopedia.org/icons/item/item_050.png';

materials.name[24] = ['Magic Gem of Lancer','Red Lancer','Lancer Red'];
materials.area[24] = 'Chaldea (Tuesday)';
materials.quest[24] = 'Lancer 30AP';
materials.ap[24] = '30';
materials.apPerDrop[24] = '23.5';
materials.dropChance[24] = '127.8%';
materials.image[24] = 'http://fate-go.cirnopedia.org/icons/item/item_051.png';

materials.name[25] = ['Magic Gem of Rider','Red Rider','Rider Red'];
materials.area[25] = 'Chaldea (Thursday)';
materials.quest[25] = 'Rider 20AP';
materials.ap[25] = '20';
materials.apPerDrop[25] = '24.3';
materials.dropChance[25] = '82.1%';
materials.image[25] = 'http://fate-go.cirnopedia.org/icons/item/item_052.png';

materials.name[26] = ['Magic Gem of Caster','Red Caster','Caster Red'];
materials.area[26] = 'Chaldea (Friday)';
materials.quest[26] = 'Caster 30AP';
materials.ap[26] = '30';
materials.apPerDrop[26] = '17.5';
materials.dropChance[26] = '171.3%';
materials.image[26] = 'http://fate-go.cirnopedia.org/icons/item/item_053.png';

materials.name[27] = ['Magic Gem of Assassin','Red Assassin','Assassin Red'];
materials.area[27] = 'Chaldea (Saturday)';
materials.quest[27] = 'Assassin 20AP';
materials.ap[27] = '20';
materials.apPerDrop[27] = '21';
materials.dropChance[27] = '95.3%';
materials.image[27] = 'http://fate-go.cirnopedia.org/icons/item/item_054.png';

materials.name[28] = ['Magic Gem of Berserker','Red Berserker','Berserker Red'];
materials.area[28] = 'Chaldea (Wednesday)';
materials.quest[28] = 'Berserker 30AP';
materials.ap[28] = '30';
materials.apPerDrop[28] = '21.5';
materials.dropChance[28] = '139.6%';
materials.image[28] = 'http://fate-go.cirnopedia.org/icons/item/item_055.png';

materials.name[29] = ['Gem of Saber','Blue Saber','Saber Blue'];
materials.area[29] = 'Chaldea (Sunday)';
materials.quest[29] = 'Saber 10AP';
materials.ap[29] = '10';
materials.apPerDrop[29] = '7.5';
materials.dropChance[29] = '133.6%';
materials.image[29] = 'http://fate-go.cirnopedia.org/icons/item/item_041.png';

materials.name[30] = ['Gem of Archer','Blue Archer','Archer Blue'];
materials.area[30] = 'Chaldea (Monday)';
materials.quest[30] = '10AP';
materials.ap[30] = '10';
materials.apPerDrop[30] = '7.8';
materials.dropChance[30] = '128.1%';
materials.image[30] = 'http://fate-go.cirnopedia.org/icons/item/item_042.png';

materials.name[31] = ['Gem of Lancer','Blue Lancer','Lancer Blue'];
materials.area[31] = 'Chaldea (Tuesday)';
materials.quest[31] = '10AP';
materials.ap[31] = '10';
materials.apPerDrop[31] = '7.2';
materials.dropChance[31] = '138.4%';
materials.image[31] = 'http://fate-go.cirnopedia.org/icons/item/item_043.png';

materials.name[32] = ['Gem of Rider','Blue Rider','Rider Blue'];
materials.area[32] = 'Chaldea (Thursday)';
materials.quest[32] = 'Rider 10AP';
materials.ap[32] = '10';
materials.apPerDrop[32] = '9';
materials.dropChance[32] = '111.3%';
materials.image[32] = 'http://fate-go.cirnopedia.org/icons/item/item_044.png';

materials.name[33] = ['Gem of Caster','Blue Caster','Caster Blue'];
materials.area[33] = 'Chaldea (Friday)';
materials.quest[33] = 'Caster 10AP';
materials.ap[33] = '10';
materials.apPerDrop[33] = '7.6';
materials.dropChance[33] = '131.2%';
materials.image[33] = 'http://fate-go.cirnopedia.org/icons/item/item_045.png';

materials.name[34] = ['Gem of Assassin','Blue Assassin','Assassin Blue'];
materials.area[34] = 'Chaldea (Saturday)';
materials.quest[34] = 'Assassin 10AP';
materials.ap[34] = '10';
materials.apPerDrop[34] = '8.3';
materials.dropChance[34] = '120.8%';
materials.image[34] = 'http://fate-go.cirnopedia.org/icons/item/item_046.png';

materials.name[35] = ['Gem of Berserker','Blue Berserker','Berserker Blue'];
materials.area[35] = 'Chaldea (Wednesday)';
materials.quest[35] = 'Berserker 10AP';
materials.ap[35] = '10';
materials.apPerDrop[35] = '8.7';
materials.dropChance[35] = '114.5%';
materials.image[35] = 'http://fate-go.cirnopedia.org/icons/item/item_047.png';

materials.name[36] = ['Saber Monument', 'Saber Monuments', 'Monument Saber', 'Monuments Saber'];
materials.area[36] = 'Chaldea (Sunday)';
materials.quest[36] = 'Saber 30AP';
materials.ap[36] = '30';
materials.apPerDrop[36] = '74.5';
materials.dropChance[36] = '40.3%';
materials.image[36] = 'http://fate-go.cirnopedia.org/icons/item/item_033.png';

materials.name[37] = ['Archer Monument','Monument Archer', 'Archer Monuments', 'Monuments Archer'];
materials.area[37] = 'Chaldea (Monday)';
materials.quest[37] = 'Archer 40AP';
materials.ap[37] = '40';
materials.apPerDrop[37] = '66.2';
materials.dropChance[37] = '60.4%';
materials.image[37] = 'http://fate-go.cirnopedia.org/icons/item/item_034.png';

materials.name[38] = ['Lancer Monument','Monument Lancer', 'Archer Monuments', 'Monuments Archer'];
materials.area[38] = 'Chaldea (Tuesday)';
materials.quest[38] = 'Lancer 40AP';
materials.ap[38] = '40';
materials.apPerDrop[38] = '66.2';
materials.dropChance[38] = '60.4%';
materials.image[38] = 'http://fate-go.cirnopedia.org/icons/item/item_035.png';

materials.name[39] = ['Rider Monument', 'Monument Rider', 'Rider Monuments', 'Monuments Rider'];
materials.area[39] = 'Chaldea (Thursday)';
materials.quest[39] = 'Rider 40AP';
materials.ap[39] = '40';
materials.apPerDrop[39] = '64.5';
materials.dropChance[39] = '62.1%';
materials.image[39] = 'http://fate-go.cirnopedia.org/icons/item/item_036.png';

materials.name[40] = ['Caster Monument','Monument Caster', 'Caster Monuments', 'Monuments Caster'];
materials.area[40] = 'Chaldea (Friday)';
materials.quest[40] = 'Caster 40AP';
materials.ap[40] = '40';
materials.apPerDrop[40] = '72.9';
materials.dropChance[40] = '54.9%';
materials.image[40] = 'http://fate-go.cirnopedia.org/icons/item/item_037.png';

materials.name[41] = ['Assassin Monument', 'Monument Assassin', 'Assasin Monument', 'Monuments Assassin'];
materials.area[41] = 'Chaldea (Saturday)';
materials.quest[41] = 'Assasin 40AP';
materials.ap[41] = '40';
materials.apPerDrop[41] = '67.9';
materials.dropChance[41] = '59%';
materials.image[41] = 'http://fate-go.cirnopedia.org/icons/item/item_038.png';

materials.name[42] = ['Berserker Monument', 'Monument Berserker', 'Berserker Monuments', 'Monuments Berserker'];
materials.area[42] = 'Chaldea (Wednesday)';
materials.quest[42] = 'Berserker 40AP';
materials.ap[42] = '40';
materials.apPerDrop[42] = '70.9';
materials.dropChance[42] = '59.4%';
materials.image[42] = 'http://fate-go.cirnopedia.org/icons/item/item_039.png';

materials.name[43] = ['Saber Piece', 'Piece Saber', 'Saber Pieces', 'Pieces Saber'];
materials.area[43] = 'Chaldea (Sunday)';
materials.quest[43] = 'Saber 20AP';
materials.ap[43] = '20';
materials.apPerDrop[43] = '25';
materials.dropChance[43] = '80%';
materials.image[43] = 'http://fate-go.cirnopedia.org/icons/item/item_025.png';

materials.name[44] = ['Archer Piece', 'Piece Archer', 'Archer Pieces', 'Pieces Archer'];
materials.area[44] = 'Chaldea (Monday)';
materials.quest[44] = 'Archer 30AP';
materials.ap[44] = '30';
materials.apPerDrop[44] = '26.3';
materials.dropChance[44] = '113.9%';
materials.image[44] = 'http://fate-go.cirnopedia.org/icons/item/item_026.png';

materials.name[45] = ['Lancer Piece','Piece Lancer','Lancer Pieces','Pieces Lancer'];
materials.area[45] = 'Chaldea (Tuesday)';
materials.quest[45] = 'Lancer 30AP';
materials.ap[45] = '30';
materials.apPerDrop[45] = '27.5';
materials.dropChance[45] = '109.1%';
materials.image[45] = 'http://fate-go.cirnopedia.org/icons/item/item_027.png';

materials.name[46] = ['Rider Piece','Piece Rider','Rider Pieces','Pieces Rider'];
materials.area[46] = 'Chaldea (Thursday)';
materials.quest[46] = 'Rider 30AP';
materials.ap[46] = '30';
materials.apPerDrop[46] = '28.6';
materials.dropChance[46] = '95.1%';
materials.image[46] = 'http://fate-go.cirnopedia.org/icons/item/item_028.png';

materials.name[47] = ['Caster Piece','Piece Caster','Caster Pieces','Pieces Caster'];
materials.area[47] = 'Chaldea (Friday)';
materials.quest[47] = 'Caster 20AP';
materials.ap[47] = '20';
materials.apPerDrop[47] = '23.5';
materials.dropChance[47] = '85%';
materials.image[47] = 'http://fate-go.cirnopedia.org/icons/item/item_029.png';

materials.name[48] = ['Assassin Piece','Piece Assassin','Assassin Pieces','Pieces Assassin'];
materials.area[48] = 'Chaldea (Saturday)';
materials.quest[48] = 'Assassin 30AP';
materials.ap[48] = '30';
materials.apPerDrop[48] = '25.4';
materials.dropChance[48] = '118.1%';
materials.image[48] = 'http://fate-go.cirnopedia.org/icons/item/item_030.png';

materials.name[49] = ['Berserker Piece','Piece Berserker','Berserker Pieces','Pieces Berserker'];
materials.area[49] = 'Chaldea (Wednesday)';
materials.quest[49] = 'Berserker 20AP';
materials.ap[49] = '20';
materials.apPerDrop[49] = '27.2';
materials.dropChance[49] = '76%';
materials.image[49] = 'http://fate-go.cirnopedia.org/icons/item/item_031.png';

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
for (let i=0; i<materials.ap.length; i++) {
  for(let indice in materials.name[i]) {
    var matLowerCase = materials.name[i][indice].toLowerCase();
    if(matLowerCase === requestedMat) {
      flagPosition = i;
      flag = 1;
    }
  }
}
/*console.log("Flag: " + flag);
console.log("Flag Position: " + flagPosition);*/
if(flag == 0) {
  message.channel.send("No material with such name. Type !drop help to see how to use this command.");
} else {
  const embed = new Discord.RichEmbed()
  .setTitle(materials.name[flagPosition][0])
  .setThumbnail(materials.image[flagPosition])
  .setDescription(`${materials.area[flagPosition]}: ${materials.quest[flagPosition]} [${materials.ap[flagPosition]} AP]`)
  .addField("AP Per Drop", materials.apPerDrop[flagPosition])
  .addField("Drop Chance", materials.dropChance[flagPosition])

  message.channel.send({embed});
  }
}
}
