
//BROKEN BECAUSE SOME materials.servants ARE OVER 1024 CHARACTERS AND SO
//THE RICHEMBED CRASHES THE BOT


exports.run = (client, message, args) => {
const Discord = require('discord.js');
var requestedMat = args.join(" ").toLowerCase();


if(requestedMat === "bass") {
message.channel.send("https://www.youtube.com/watch?v=XCawU6BE8P8");
return;
}
console.log("Requested Drop Rate for: " + requestedMat);
var materials = {
  name: [],
  area: [],
  quest: [],
  ap: [],
  apPerDrop: [],
  dropChance: [],
  image: [],
  url: [],
  servants: []
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
materials.url[0] = 'http://fategrandorder.wikia.com/wiki/Unlucky_Bone';

materials.name[1] = ['Proof of Hero'];
materials.area[1] = 'Okeanos';
materials.quest[1] = 'Pirate Ship';
materials.ap[1] = '12';
materials.apPerDrop[1] = '20.2';
materials.dropChance[1] = '59.4%';
materials.image[1] = 'http://fate-go.cirnopedia.org/icons/item/item_009.png';
materials.url[1] = 'http://fategrandorder.wikia.com/wiki/Hero%27s_Proof';

materials.name[2] = ['Dragon Fang', 'Fang', 'Fangs','Dragon Fangs'];
materials.area[2] = 'America';
materials.quest[2] = 'Deming';
materials.ap[2] = '17';
materials.apPerDrop[2] = '27.1';
materials.dropChance[2] = '62.7%';
materials.image[2] = 'http://fate-go.cirnopedia.org/icons/item/item_018.png';
materials.url[2] = 'http://fategrandorder.wikia.com/wiki/Dragon_Fang';

materials.name[3] = ['Void`s Dust', 'Voids Dust', 'Dust', 'Void Dust'];
materials.area[3] = 'America';
materials.quest[3] = 'Charlotte';
materials.ap[3] = '20';
materials.apPerDrop[3] = '31.4';
materials.dropChance[3] = '63.7%';
materials.image[3] = 'http://fate-go.cirnopedia.org/icons/item/item_011.png';
materials.url[3] = 'http://fategrandorder.wikia.com/wiki/Void%27s_Refuse';

materials.name[4] = ['Seed of Yggdrasil', 'Seed', 'Seeds'];
materials.area[4] = 'Okeanos';
materials.quest[4] = 'Bountiful Sea';
materials.ap[4] = '18';
materials.apPerDrop[4] = '58.4';
materials.dropChance[4] = '30.8%';
materials.image[4] = 'http://fate-go.cirnopedia.org/icons/item/item_008.png';
materials.url[4] = 'http://fategrandorder.wikia.com/wiki/Yggdrasil_Seed';

materials.name[5] = ['Ghost Lantern', 'Lantern', 'Lanterns', 'Ghost Lanterns'];
materials.area[5] = 'Camelot';
materials.quest[5] = 'Evening Bell Mausoleum';
materials.ap[5] = '19';
materials.apPerDrop[5] = '57.8';
materials.dropChance[5] = '32.9%';
materials.image[5] = 'http://fate-go.cirnopedia.org/icons/item/item_014.png';
materials.url[5] = 'http://fategrandorder.wikia.com/wiki/Ghost_Lantern';

materials.name[6] = ['Octuplet Crystal','Crystal','Crystals','Octuplet Crystals'];
materials.area[6] = 'Camelot';
materials.quest[6] = 'Holy City Districts';
materials.ap[6] = '20';
materials.apPerDrop[6] = '72.5';
materials.dropChance[6] = '27.6%';
materials.image[6] = 'http://fate-go.cirnopedia.org/icons/item/item_021.png';
materials.url[6] = 'http://fategrandorder.wikia.com/wiki/Octuplet_Twin_Crystals';

materials.name[7] = ['Serpent Jewel','Jewel','Jewels','Serpent Jewels'];
materials.area[7] = 'Okeanos';
materials.quest[7] = 'Sunken Rock Seas';
materials.ap[7] = '17';
materials.apPerDrop[7] = '106.3';
materials.dropChance[7] = '16%';
materials.image[7] = 'http://fate-go.cirnopedia.org/icons/item/item_015.png';
materials.url[7] = 'http://fategrandorder.wikia.com/wiki/Snake_Jewel';

materials.name[8] = ['Phoenix Feather','Phoenix Feathers','Feathers','Feather'];
materials.area[8] = 'Chaldea (Sunday)';
materials.quest[8] = 'Saber 30AP';
materials.ap[8] = '30';
materials.apPerDrop[8] = '172.9';
materials.dropChance[8] = '17.4%';
materials.image[8] = 'http://fate-go.cirnopedia.org/icons/item/item_007.png';
materials.url[8] = 'http://fategrandorder.wikia.com/wiki/Phoenix_Plume';

materials.name[9] = ['Eternal Gear', 'Eternal Gears', 'Gear', 'Gears'];
materials.area[9] = 'America';
materials.quest[9] = 'Chicago';
materials.ap[9] = '21';
materials.apPerDrop[9] = '51.4';
materials.dropChance[9] = '40.9%';
materials.image[9] = 'http://fate-go.cirnopedia.org/icons/item/item_016.png';
materials.url[9] = 'http://fategrandorder.wikia.com/wiki/Infinity_Gear';

materials.name[10] = ['Forbidden Page','Page','Pages','Forbidden Pages'];
materials.area[10] = 'London';
materials.quest[10] = 'Hyde Park';
materials.ap[10] = '20';
materials.apPerDrop[10] = '72.8';
materials.dropChance[10] = '27.5%';
materials.image[10] = 'http://fate-go.cirnopedia.org/icons/item/item_017.png';
materials.url[10] = 'http://fategrandorder.wikia.com/wiki/Forbidden_Page';

materials.name[11] = ['Homunculus Baby','Homunculus','Baby'];
materials.area[11] = 'London';
materials.quest[11] = 'Southwark';
materials.ap[11] = '19';
materials.apPerDrop[11] = '61.4';
materials.dropChance[11] = '31%';
materials.image[11] = 'http://fate-go.cirnopedia.org/icons/item/item_020.png';
materials.url[11] = 'http://fategrandorder.wikia.com/wiki/Homunculus_Baby';

materials.name[12] = ['Meteor Horseshoe','Horseshoe','Horse Shoe','Horse Shoes','Horseshoes'];
materials.area[12] = 'Camelot';
materials.quest[12] = 'Vast Land of Nothingness';
materials.ap[12] = '22';
materials.apPerDrop[12] = '50.1';
materials.dropChance[12] = '43.9%';
materials.image[12] = 'http://fate-go.cirnopedia.org/icons/item/item_.png';
materials.url[12] = 'http://fategrandorder.wikia.com/wiki/Meteoric_Horseshoe';

materials.name[13] = ['Claw of Chaos','Claws of Chaos','Claw','Claws'];
materials.area[13] = 'America';
materials.quest[13] = 'Des Moines';
materials.ap[13] = '18';
materials.apPerDrop[13] = '87.7';
materials.dropChance[13] = '20.5%';
materials.image[13] = 'http://fate-go.cirnopedia.org/icons/item/item_013.png';
materials.url[13] = 'http://fategrandorder.wikia.com/wiki/Talon_of_Chaos';

materials.name[14] = ['Heart of the Foreign God','Heart','Hearts'];
materials.area[14] = 'Chaldea (Friday)';
materials.quest[14] = 'Caster 30AP';
materials.ap[14] = '30';
materials.apPerDrop[14] = '500';
materials.dropChance[14] = '6%';
materials.image[14] = 'http://fate-go.cirnopedia.org/icons/item/item_023.png';
materials.url[14] = 'http://fategrandorder.wikia.com/wiki/Heart_of_a_Foreign_God';

materials.name[15] = ['Dragons Reverse Scale','Dragon Scale','Dragon Scales','Scales','Scale'];
materials.area[15] = 'Chaldea (Thursday)';
materials.quest[15] = 'Rider 40AP';
materials.ap[15] = '40';
materials.apPerDrop[15] = '476.1';
materials.dropChance[15] = '8.4%';
materials.image[15] = 'http://fate-go.cirnopedia.org/icons/item/item_012.png';
materials.url[15] = 'http://fategrandorder.wikia.com/wiki/Dragon%27s_Reverse_Scale';

materials.name[16] = ['Secret Gem of Saber','Gold Saber','Yellow Saber'];
materials.area[16] = 'Chaldea (Sunday)';
materials.quest[16] = 'Saber 40AP';
materials.ap[16] = '40';
materials.apPerDrop[16] = '149.4';
materials.dropChance[16] = '26.8%';
materials.image[16] = 'http://fate-go.cirnopedia.org/icons/item/item_057.png';
materials.url[16] = 'http://fategrandorder.wikia.com/wiki/Skill_Reinforcement_Items';
materials.servants[16] = 'All Saber Class Servants';

materials.name[17] = ['Secret Gem of Archer','Gold Archer','Yellow Archer'];
materials.area[17] = 'Chaldea (Monday)';
materials.quest[17] = 'Archer 40AP';
materials.ap[17] = '40';
materials.apPerDrop[17] = '117.8';
materials.dropChance[17] = '34%';
materials.image[17] = 'http://fate-go.cirnopedia.org/icons/item/item_058.png';
materials.url[17] = 'http://fategrandorder.wikia.com/wiki/Skill_Reinforcement_Items';
materials.servants[17] = 'All Archer Class Servants';

materials.name[18] = ['Secret Gem of Lancer','Gold Lancer','Yellow Lancer'];
materials.area[18] = 'Chaldea (Tuesday)';
materials.quest[18] = 'Lancer 40AP';
materials.ap[18] = '40';
materials.apPerDrop[18] = '146.6';
materials.dropChance[18] = '27.3%';
materials.image[18] = 'http://fate-go.cirnopedia.org/icons/item/item_059.png';
materials.url[18] = 'http://fategrandorder.wikia.com/wiki/Skill_Reinforcement_Items';
materials.servants[18] = 'All Lancer Class Servants';

materials.name[19] = ['Secret Gem of Rider','Gold Rider','Yellow Rider'];
materials.area[19] = 'Chaldea (Thursday)';
materials.quest[19] = 'Rider 40AP';
materials.ap[19] = '40';
materials.apPerDrop[19] = '115.3';
materials.dropChance[19] = '34.7%';
materials.image[19] = 'http://fate-go.cirnopedia.org/icons/item/item_060.png';
materials.url[19] = 'http://fategrandorder.wikia.com/wiki/Skill_Reinforcement_Items';
materials.servants[19] = 'All Rider Class Servants';

materials.name[20] = ['Secret Gem of Caster','Gold Caster','Yellow Caster'];
materials.area[20] = 'Chaldea (Friday)';
materials.quest[20] = 'Caster 40AP';
materials.ap[20] = '40';
materials.apPerDrop[20] = '49.8';
materials.dropChance[20] = '80.3%';
materials.image[20] = 'http://fate-go.cirnopedia.org/icons/item/item_061.png';
materials.url[20] = 'http://fategrandorder.wikia.com/wiki/Skill_Reinforcement_Items';
materials.servants[20] = 'All Caster Class Servants';

materials.name[21] = ['Secret Gem of Assassin','Gold Assassin','Yellow Assassin'];
materials.area[21] = 'Chaldea (Saturday)';
materials.quest[21] = 'Assassin 40AP';
materials.ap[21] = '40';
materials.apPerDrop[21] = '183.2';
materials.dropChance[21] = '21.8%';
materials.image[21] = 'http://fate-go.cirnopedia.org/icons/item/item_062.png';
materials.url[21] = 'http://fategrandorder.wikia.com/wiki/Skill_Reinforcement_Items';
materials.servants[21] = 'All Assassin Class Servants';

materials.name[22] = ['Secret Gem of Berserker','Gold Berserker','Yellow Berserker'];
materials.area[22] = 'Chaldea (Wednesday)';
materials.quest[22] = 'Berserker 40AP';
materials.ap[22] = '40';
materials.apPerDrop[22] = '167.6';
materials.dropChance[22] = '23.9%';
materials.image[22] = 'http://fate-go.cirnopedia.org/icons/item/item_063.png';
materials.url[22] = 'http://fategrandorder.wikia.com/wiki/Skill_Reinforcement_Items';
materials.servants[22] = 'All Berserker Class Servants';

materials.name[50] = ['Magic Gem of Saber','Red Saber', 'Saber Red'];
materials.area[50] = 'Chaldea (Sunday)';
materials.quest[50] = 'Saber 30AP';
materials.ap[50] = '30';
materials.apPerDrop[50] = '23.9';
materials.dropChance[50] = '125.3%';
materials.image[50] = 'http://fate-go.cirnopedia.org/icons/item/item_049.png';
materials.url[50] = 'http://fategrandorder.wikia.com/wiki/Skill_Reinforcement_Items';
materials.servants[50] = 'All Saber Class Servants';

materials.name[23] = ['Magic Gem of Archer','Red Archer','Archer Red'];
materials.area[23] = 'Chaldea (Monday)';
materials.quest[23] = 'Archer 30AP';
materials.ap[23] = '30';
materials.apPerDrop[23] = '22.9';
materials.dropChance[23] = '130.9%';
materials.image[23] = 'http://fate-go.cirnopedia.org/icons/item/item_050.png';
materials.url[23] = 'http://fategrandorder.wikia.com/wiki/Skill_Reinforcement_Items';
materials.servants[23] = 'All Archer Class Servants';

materials.name[24] = ['Magic Gem of Lancer','Red Lancer','Lancer Red'];
materials.area[24] = 'Chaldea (Tuesday)';
materials.quest[24] = 'Lancer 30AP';
materials.ap[24] = '30';
materials.apPerDrop[24] = '23.5';
materials.dropChance[24] = '127.8%';
materials.image[24] = 'http://fate-go.cirnopedia.org/icons/item/item_051.png';
materials.url[24] = 'http://fategrandorder.wikia.com/wiki/Skill_Reinforcement_Items';
materials.servants[24] = 'All Lancer Class Servants';

materials.name[25] = ['Magic Gem of Rider','Red Rider','Rider Red'];
materials.area[25] = 'Chaldea (Thursday)';
materials.quest[25] = 'Rider 20AP';
materials.ap[25] = '20';
materials.apPerDrop[25] = '24.3';
materials.dropChance[25] = '82.1%';
materials.image[25] = 'http://fate-go.cirnopedia.org/icons/item/item_052.png';
materials.url[25] = 'http://fategrandorder.wikia.com/wiki/Skill_Reinforcement_Items';
materials.servants[25] = 'All Rider Class Servants';

materials.name[26] = ['Magic Gem of Caster','Red Caster','Caster Red'];
materials.area[26] = 'Chaldea (Friday)';
materials.quest[26] = 'Caster 30AP';
materials.ap[26] = '30';
materials.apPerDrop[26] = '17.5';
materials.dropChance[26] = '171.3%';
materials.image[26] = 'http://fate-go.cirnopedia.org/icons/item/item_053.png';
materials.url[26] = 'http://fategrandorder.wikia.com/wiki/Skill_Reinforcement_Items';
materials.servants[26] = 'All Caster Class Servants';

materials.name[27] = ['Magic Gem of Assassin','Red Assassin','Assassin Red'];
materials.area[27] = 'Chaldea (Saturday)';
materials.quest[27] = 'Assassin 20AP';
materials.ap[27] = '20';
materials.apPerDrop[27] = '21';
materials.dropChance[27] = '95.3%';
materials.image[27] = 'http://fate-go.cirnopedia.org/icons/item/item_054.png';
materials.url[27] = 'http://fategrandorder.wikia.com/wiki/Skill_Reinforcement_Items';
materials.servants[27] = 'All Assassin Class Servants';

materials.name[28] = ['Magic Gem of Berserker','Red Berserker','Berserker Red'];
materials.area[28] = 'Chaldea (Wednesday)';
materials.quest[28] = 'Berserker 30AP';
materials.ap[28] = '30';
materials.apPerDrop[28] = '21.5';
materials.dropChance[28] = '139.6%';
materials.image[28] = 'http://fate-go.cirnopedia.org/icons/item/item_055.png';
materials.url[28] = 'http://fategrandorder.wikia.com/wiki/Skill_Reinforcement_Items';
materials.servants[28] = 'All Berserker Class Servants';

materials.name[29] = ['Gem of Saber','Blue Saber','Saber Blue'];
materials.area[29] = 'Chaldea (Sunday)';
materials.quest[29] = 'Saber 10AP';
materials.ap[29] = '10';
materials.apPerDrop[29] = '7.5';
materials.dropChance[29] = '133.6%';
materials.image[29] = 'http://fate-go.cirnopedia.org/icons/item/item_041.png';
materials.url[29] = 'http://fategrandorder.wikia.com/wiki/Skill_Reinforcement_Items';
materials.servants[29] = 'All Saber Class Servants';

materials.name[30] = ['Gem of Archer','Blue Archer','Archer Blue'];
materials.area[30] = 'Chaldea (Monday)';
materials.quest[30] = '10AP';
materials.ap[30] = '10';
materials.apPerDrop[30] = '7.8';
materials.dropChance[30] = '128.1%';
materials.image[30] = 'http://fate-go.cirnopedia.org/icons/item/item_042.png';
materials.url[30] = 'http://fategrandorder.wikia.com/wiki/Skill_Reinforcement_Items';
materials.servants[30] = 'All Archer Class Servants';

materials.name[31] = ['Gem of Lancer','Blue Lancer','Lancer Blue'];
materials.area[31] = 'Chaldea (Tuesday)';
materials.quest[31] = '10AP';
materials.ap[31] = '10';
materials.apPerDrop[31] = '7.2';
materials.dropChance[31] = '138.4%';
materials.image[31] = 'http://fate-go.cirnopedia.org/icons/item/item_043.png';
materials.url[31] = 'http://fategrandorder.wikia.com/wiki/Skill_Reinforcement_Items';
materials.servants[31] = 'All Lancer Class Servants';

materials.name[32] = ['Gem of Rider','Blue Rider','Rider Blue'];
materials.area[32] = 'Chaldea (Thursday)';
materials.quest[32] = 'Rider 10AP';
materials.ap[32] = '10';
materials.apPerDrop[32] = '9';
materials.dropChance[32] = '111.3%';
materials.image[32] = 'http://fate-go.cirnopedia.org/icons/item/item_044.png';
materials.url[32] = 'http://fategrandorder.wikia.com/wiki/Skill_Reinforcement_Items';
materials.servants[32] = 'All Rider Class Servants';

materials.name[33] = ['Gem of Caster','Blue Caster','Caster Blue'];
materials.area[33] = 'Chaldea (Friday)';
materials.quest[33] = 'Caster 10AP';
materials.ap[33] = '10';
materials.apPerDrop[33] = '7.6';
materials.dropChance[33] = '131.2%';
materials.image[33] = 'http://fate-go.cirnopedia.org/icons/item/item_045.png';
materials.url[33] = 'http://fategrandorder.wikia.com/wiki/Skill_Reinforcement_Items';
materials.servants[33] = 'All Caster Class Servants';

materials.name[34] = ['Gem of Assassin','Blue Assassin','Assassin Blue'];
materials.area[34] = 'Chaldea (Saturday)';
materials.quest[34] = 'Assassin 10AP';
materials.ap[34] = '10';
materials.apPerDrop[34] = '8.3';
materials.dropChance[34] = '120.8%';
materials.image[34] = 'http://fate-go.cirnopedia.org/icons/item/item_046.png';
materials.url[34] = 'http://fategrandorder.wikia.com/wiki/Skill_Reinforcement_Items';
materials.servants[34] = 'All Assassin Class Servants';

materials.name[35] = ['Gem of Berserker','Blue Berserker','Berserker Blue'];
materials.area[35] = 'Chaldea (Wednesday)';
materials.quest[35] = 'Berserker 10AP';
materials.ap[35] = '10';
materials.apPerDrop[35] = '8.7';
materials.dropChance[35] = '114.5%';
materials.image[35] = 'http://fate-go.cirnopedia.org/icons/item/item_047.png';
materials.url[35] = 'http://fategrandorder.wikia.com/wiki/Skill_Reinforcement_Items';
materials.servants[35] = 'All Berserker Class Servants';

materials.name[36] = ['Saber Monument', 'Saber Monuments', 'Monument Saber', 'Monuments Saber'];
materials.area[36] = 'Chaldea (Sunday)';
materials.quest[36] = 'Saber 30AP';
materials.ap[36] = '30';
materials.apPerDrop[36] = '74.5';
materials.dropChance[36] = '40.3%';
materials.image[36] = 'http://fate-go.cirnopedia.org/icons/item/item_033.png';
materials.url[36] = 'http://fategrandorder.wikia.com/wiki/Saber_Monument';
materials.servants[36] = 'All Saber Class Servants';

materials.name[37] = ['Archer Monument','Monument Archer', 'Archer Monuments', 'Monuments Archer'];
materials.area[37] = 'Chaldea (Monday)';
materials.quest[37] = 'Archer 40AP';
materials.ap[37] = '40';
materials.apPerDrop[37] = '66.2';
materials.dropChance[37] = '60.4%';
materials.image[37] = 'http://fate-go.cirnopedia.org/icons/item/item_034.png';
materials.url[37] = 'http://fategrandorder.wikia.com/wiki/Archer_Monument';
materials.servants[37] = 'All Archer Class Servants';

materials.name[38] = ['Lancer Monument','Monument Lancer', 'Archer Monuments', 'Monuments Archer'];
materials.area[38] = 'Chaldea (Tuesday)';
materials.quest[38] = 'Lancer 40AP';
materials.ap[38] = '40';
materials.apPerDrop[38] = '66.2';
materials.dropChance[38] = '60.4%';
materials.image[38] = 'http://fate-go.cirnopedia.org/icons/item/item_035.png';
materials.url[38] = 'http://fategrandorder.wikia.com/wiki/Lancer_Monument';
materials.servants[38] = 'All Lancer Class Servants';

materials.name[39] = ['Rider Monument', 'Monument Rider', 'Rider Monuments', 'Monuments Rider'];
materials.area[39] = 'Chaldea (Thursday)';
materials.quest[39] = 'Rider 40AP';
materials.ap[39] = '40';
materials.apPerDrop[39] = '64.5';
materials.dropChance[39] = '62.1%';
materials.image[39] = 'http://fate-go.cirnopedia.org/icons/item/item_036.png';
materials.url[39] = 'http://fategrandorder.wikia.com/wiki/Rider_Monument';
materials.servants[39] = 'All Rider Class Servants';

materials.name[40] = ['Caster Monument','Monument Caster', 'Caster Monuments', 'Monuments Caster'];
materials.area[40] = 'Chaldea (Friday)';
materials.quest[40] = 'Caster 40AP';
materials.ap[40] = '40';
materials.apPerDrop[40] = '72.9';
materials.dropChance[40] = '54.9%';
materials.image[40] = 'http://fate-go.cirnopedia.org/icons/item/item_037.png';
materials.url[40] = 'http://fategrandorder.wikia.com/wiki/Caster_Monument';
materials.servants[40] = 'All Caster Class Servants';

materials.name[41] = ['Assassin Monument', 'Monument Assassin', 'Assasin Monument', 'Monuments Assassin'];
materials.area[41] = 'Chaldea (Saturday)';
materials.quest[41] = 'Assasin 40AP';
materials.ap[41] = '40';
materials.apPerDrop[41] = '67.9';
materials.dropChance[41] = '59%';
materials.image[41] = 'http://fate-go.cirnopedia.org/icons/item/item_038.png';
materials.url[41] = 'http://fategrandorder.wikia.com/wiki/Assassin_Monument';
materials.servants[41] = 'All Assassin Class Servants';

materials.name[42] = ['Berserker Monument', 'Monument Berserker', 'Berserker Monuments', 'Monuments Berserker'];
materials.area[42] = 'Chaldea (Wednesday)';
materials.quest[42] = 'Berserker 40AP';
materials.ap[42] = '40';
materials.apPerDrop[42] = '70.9';
materials.dropChance[42] = '59.4%';
materials.image[42] = 'http://fate-go.cirnopedia.org/icons/item/item_039.png';
materials.url[42] = 'http://fategrandorder.wikia.com/wiki/Berserker_Monument';
materials.servants[42] = 'All Berserker Class Servants';

materials.name[43] = ['Saber Piece', 'Piece Saber', 'Saber Pieces', 'Pieces Saber'];
materials.area[43] = 'Chaldea (Sunday)';
materials.quest[43] = 'Saber 20AP';
materials.ap[43] = '20';
materials.apPerDrop[43] = '25';
materials.dropChance[43] = '80%';
materials.image[43] = 'http://fate-go.cirnopedia.org/icons/item/item_025.png';
materials.url[43] = 'http://fategrandorder.wikia.com/wiki/Saber_Piece';
materials.servants[43] = 'All Saber Class Servants';

materials.name[44] = ['Archer Piece', 'Piece Archer', 'Archer Pieces', 'Pieces Archer'];
materials.area[44] = 'Chaldea (Monday)';
materials.quest[44] = 'Archer 30AP';
materials.ap[44] = '30';
materials.apPerDrop[44] = '26.3';
materials.dropChance[44] = '113.9%';
materials.image[44] = 'http://fate-go.cirnopedia.org/icons/item/item_026.png';
materials.url[44] = 'http://fategrandorder.wikia.com/wiki/Archer_Piece';
materials.servants[44] = 'All Archer Class Servants';

materials.name[45] = ['Lancer Piece','Piece Lancer','Lancer Pieces','Pieces Lancer'];
materials.area[45] = 'Chaldea (Tuesday)';
materials.quest[45] = 'Lancer 30AP';
materials.ap[45] = '30';
materials.apPerDrop[45] = '27.5';
materials.dropChance[45] = '109.1%';
materials.image[45] = 'http://fate-go.cirnopedia.org/icons/item/item_027.png';
materials.url[45] = 'http://fategrandorder.wikia.com/wiki/Lancer_Piece';
materials.servants[45] = 'All Lancer Class Servants';

materials.name[46] = ['Rider Piece','Piece Rider','Rider Pieces','Pieces Rider'];
materials.area[46] = 'Chaldea (Thursday)';
materials.quest[46] = 'Rider 30AP';
materials.ap[46] = '30';
materials.apPerDrop[46] = '28.6';
materials.dropChance[46] = '95.1%';
materials.image[46] = 'http://fate-go.cirnopedia.org/icons/item/item_028.png';
materials.url[46] = 'http://fategrandorder.wikia.com/wiki/Rider_Piece';
materials.servants[46] = 'All Rider Class Servants';

materials.name[47] = ['Caster Piece','Piece Caster','Caster Pieces','Pieces Caster'];
materials.area[47] = 'Chaldea (Friday)';
materials.quest[47] = 'Caster 20AP';
materials.ap[47] = '20';
materials.apPerDrop[47] = '23.5';
materials.dropChance[47] = '85%';
materials.image[47] = 'http://fate-go.cirnopedia.org/icons/item/item_029.png';
materials.url[47] = 'http://fategrandorder.wikia.com/wiki/Caster_Piece';
materials.servants[47] = 'All Caster Class Servants';

materials.name[48] = ['Assassin Piece','Piece Assassin','Assassin Pieces','Pieces Assassin'];
materials.area[48] = 'Chaldea (Saturday)';
materials.quest[48] = 'Assassin 30AP';
materials.ap[48] = '30';
materials.apPerDrop[48] = '25.4';
materials.dropChance[48] = '118.1%';
materials.image[48] = 'http://fate-go.cirnopedia.org/icons/item/item_030.png';
materials.url[48] = 'http://fategrandorder.wikia.com/wiki/Assassin_Piece';
materials.servants[48] = 'All Assassin Class Servants';

materials.name[49] = ['Berserker Piece','Piece Berserker','Berserker Pieces','Pieces Berserker'];
materials.area[49] = 'Chaldea (Wednesday)';
materials.quest[49] = 'Berserker 20AP';
materials.ap[49] = '20';
materials.apPerDrop[49] = '27.2';
materials.dropChance[49] = '76%';
materials.image[49] = 'http://fate-go.cirnopedia.org/icons/item/item_031.png';
materials.url[49] = 'http://fategrandorder.wikia.com/wiki/Berserker_Piece';
materials.servants[49] = 'All Berserker Class Servants';

materials.name[51] = ['Tearstone of Blood', 'Tears', 'Tear', 'Blood Tears', 'Blood Tear'];
materials.area[51] = 'America';
materials.quest[51] = 'Alexandria';
materials.ap[51] = '18';
materials.apPerDrop[51] = '176';
materials.dropChance[51] = '10.2%';
materials.image[51] = 'http://fate-go.cirnopedia.org/icons/item/item_111.png';
materials.url[51] = 'http://fategrandorder.wikia.com/wiki/Bloodstone_Tear';
materials.servants[51] = '';

materials.name[52] = ['Black Tallow', 'Tallow', 'Black Tallows', 'Tallows', 'Black Grease', 'Grease'];
materials.area[52] = 'America';
materials.quest[52] = 'Lubbock';
materials.ap[52] = '18';
materials.apPerDrop[52] = '146.7';
materials.dropChance[52] = '12.3%';
materials.image[52] = 'http://fate-go.cirnopedia.org/icons/item/item_112.png';
materials.url[52] = 'http://fategrandorder.wikia.com/wiki/Black_Tallow';
materials.servants[52] = '';

materials.name[53] = ['Spirit Root', 'Root', 'Spirit Roots', 'Roots'];
materials.area[53] = 'Camelot';
materials.quest[53] = 'Holy City Districts';
materials.ap[53] = '20';
materials.apPerDrop[53] = '162';
materials.dropChance[53] = '12.3%';
materials.image[53] = 'http://fate-go.cirnopedia.org/icons/item/item_113.png';
materials.url[53] = 'http://fategrandorder.wikia.com/wiki/Spirit_Root';
materials.servants[53] = '';

materials.name[54] = ['War Horn', 'War Horns', 'Horn', 'Horns'];
materials.area[54] = 'Camelot';
materials.quest[54] = 'Eastern Village';
materials.ap[54] = '19';
materials.apPerDrop[54] = '110.5';
materials.dropChance[54] = '17.2%';
materials.image[54] = 'http://fate-go.cirnopedia.org/icons/item/item_114.png';
materials.url[54] = 'http://fategrandorder.wikia.com/wiki/Warhorse%27s_Immature_Horn';
materials.servants[54] = '';

materials.name[55] = ['Chain of Fools', 'Chain', 'Chains'];
materials.area[55] = 'Camelot';
materials.quest[55] = 'Wilderness of Death';
materials.ap[55] = '19';
materials.apPerDrop[55] = '29.9';
materials.dropChance[55] = '63.5%';
materials.image[55] = 'http://fate-go.cirnopedia.org/icons/item/item_151.png';
materials.url[55] = 'https://fategrandorder.wikia.com/wiki/Chains_of_the_Fool';
materials.servants[55] = '';

materials.name[56] = ['Medal of Great Knight', 'Medal', 'Medals'];
materials.area[56] = 'Camelot';
materials.quest[56] = 'Sovereign Castle';
materials.ap[56] = '21';
materials.apPerDrop[56] = '56.9';
materials.dropChance[56] = '36.9%';
materials.image[56] = 'http://fate-go.cirnopedia.org/icons/item/item_153.png';
materials.url[56] = 'https://fategrandorder.wikia.com/wiki/Medal_of_Great_Knight';
materials.servants[56] = '';

materials.name[57] = ['Lamp of Demon Sealing', 'Lamp', 'Lamps'];
materials.area[57] = 'Camelot';
materials.quest[57] = 'Concealed Village';
materials.ap[57] = '21';
materials.apPerDrop[57] = '120';
materials.dropChance[57] = '17.5%';
materials.image[57] = 'http://fate-go.cirnopedia.org/icons/item/item_152.png';
materials.url[57] = 'http://fategrandorder.wikia.com/wiki/Lamp_of_Demon_Sealing';
materials.servants[57] = '';

materials.name[58] = ['Scarab of Wisdom', 'Scarab', 'Scarabs'];
materials.area[58] = 'Camelot';
materials.quest[58] = 'Great Temple';
materials.ap[58] = '22';
materials.apPerDrop[58] = '210.4';
materials.dropChance[58] = '10.5%';
materials.image[58] = 'http://fate-go.cirnopedia.org/icons/item/item_154.png';
materials.url[58] = 'http://fategrandorder.wikia.com/wiki/Scarab_of_Wisdom';
materials.servants[58] = '';

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

if(flag == 0) {
  message.channel.send("No material with such name. Type !drop help to see how to use this command.");
} else {

  const embed = new Discord.MessageEmbed()
  .setTitle(materials.name[flagPosition][0])
  .setThumbnail(materials.image[flagPosition])
  .setURL(materials.url[flagPosition])
  .setDescription(`${materials.area[flagPosition]}: ${materials.quest[flagPosition]} [${materials.ap[flagPosition]} AP]`)
  .addField("AP Per Drop", materials.apPerDrop[flagPosition])
  .addField("Drop Chance", materials.dropChance[flagPosition])

  message.channel.send({embeds: [embed]});
}
}
}
