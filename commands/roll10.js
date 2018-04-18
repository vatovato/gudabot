exports.run = (client, message, connection) => {
if(message.channel.name !== "bot-rolls") {
      message.channel.send("This command only works in the " + `<#414193770276454400>` + " channel.");
    } else {
const Discord = require('discord.js');

var userCalling = message.author.username;
var authorId = message.author.id;
var fiveStarIcons = {
  serName: [],
  serIcon: []
};
var fiveStarFlag = 0;

var currFiveStars = [],
    currFourStars = [],
    currThreeStars = [];
//curr = current + event summons
//these need to be updated as the permanent hero lists get updated
var fiveStarBase = ["Altria Pendragon", "Altera", "Zhuge Liang (El-Melloi II)", "Orion", "Francis Drake", "Tamamo no Mae", "Jack the Ripper", "Jeanne d Arc", "Vlad III", "Mordred","Nikola Tesla", "Arjuna", "Karna", "Nightingale"];
var fiveStarStory = [];
var currFiveStars = fiveStarBase;
var fourStarBase = ["Siegfried", "Chevalier d Eon", "EMIYA", "Atalante", "Elisabeth Bathory", "Anne Bonny & Mary Read",
"Marie Antoinette", "Saint Martha", "Stheno", "Carmilla", "Heracles", "Lancelot", "Tamamo Cat", "Astolfo", "Nursery Rhyme",
"Frankenstein", "Altria Pendragon (Lancer Alter)", "Helena Blavatsky", "Rama"];
var fourStarStory = ["Medea (Lily)", "Nero Claudius", "Altria Pendragon (Alter)"];
var currFourStars = fourStarBase;
var threeStarBase = ["Gaius Julius Caesar", "Gilles de Rais", "Robin Hood", "David", "Euryale", "Cu Chulainn", "Cu Chulainn (Prototype)", "Romulus", "Hektor", "Medusa", "Boudica", "Ushiwakamaru", "Alexander", "Medea", "Mephistopheles", "Jing Ke", "Lu Bu Fengxian", "Darius III", "Kiyohime", "Diarmuid ua Duibhne", "Fergus mac Roich", "Gilgamesh (Child)", "Paracelsus von Hohenheim", "Charles Babbage", "Henry Jekyll & Hyde", "Billy the Kid", "Geronimo"];
var threeStarStory = [];
//var threeStarStory = ["Cu Chulainn (Caster)", "Gilles de Rais (Caster)"];
var currThreeStars = threeStarBase;
var fiveStarEss = ["Formal Craft", "Imaginary Around", "Limited/Zero Over", "Kaleidoscope", "Heaven s Feel", "Prisma Cosmos", "The Black Grail", "Victor of the Moon", "Another Ending", "A Fragment of 2030", "500-Year Obsession"];
var currFiveStarEss = fiveStarEss;
var fourStarEss = ["Iron-Willed Training", "Primeval Curse", "Projection", "Gandr", "Verdant Sound of Destruction", "Gem Magecraft: Antumbra", "Be Elegant", "The Imaginary Element", "Divine Banquet", "Angel s Song", "Seal Designation Enforcer", "Holy Shroud of Magdalene", "With One Strike", "Code Cast", "Knight s Dignity", "Awakened Will", "Necromancy", "Golden Millennium Tree"];
var currFourStarEss = fourStarEss;
// OLD ONES: var threeStarEss = ["Azoth Blade", "False Attendant's Writings", "The Azure Black Keys", "The Verdant Black Keys", "The Crimson Black Keys", "Rin's Pendant", "Spell Tome", "Dragon's Meridian", "Sorcery Ore", "Dragonkin", "Mooncell Automaton", "Runestones", "Anchors Aweigh", "Demonic Boar", "Clock Tower"];
//TODO need to add these ce's first
var threeStarEss = ["Mooncell Automaton", "Runestones", "Anchors Aweigh", "Demonic Boar", "Clock Tower", "Ryudoji Temple", "Mana Gauge", "Elixir of Love", "Storch Ritter", "Hermitage", "Motored Cuirassier", "Stuffed Lion", "Lugh s Halo"];
var currThreeStarEss = threeStarEss;

var currFeatured3S = ["Gilles de Rais (Caster)", "Diarmuid ua Duibhne"];
var currFeatured4S = ["Lancelot"];
var currFeatured5S = ["Gilgamesh", "Altria Pendragon"];
var currFeatured3E = [];
var currFeatured4E = [];
var currFeatured5E = [];
var servants = [], essences = [], allServants = [], campaigns = [];
var servantsPulled = [], essencesPulled = [], servantsPulled4 = [];
//elements
var summonTable, summonButton, simSelect, bannerImg, blurb, fServants, fEssences, currSim, featuredLists, servantsList, essencesList;
//57 cents per quartz
var moneySpent = 0;
var quartzSpent = 0;
var numDownloaded = 0;

//featured rates estimated from excel spreadsheet
var featured5sChance = 67, featured4sChance = 67, featured3sChance = 20;
var featured5eChance = 45, featured4eChance = 33, featured3eChance = 20;


var allServants = require('./servants-all.json');
var essences = require('./essences.json');
var campaigns = require('./campaigns.json');



currFiveStars = fiveStarBase.slice();
currFiveStars = currFiveStars.concat(fiveStarStory);

currFourStars = fourStarBase.slice();
currFourStars = currFourStars.concat(fourStarStory);

currThreeStars = threeStarBase.slice();
currThreeStars = currThreeStars.concat(threeStarStory);

var sendMessage = "**" + userCalling + "'s Roll**\n\n";

/*function addFeaturedToList(array, servant) {
    array.push(servant);
}*/

function simulate() {
  console.log(userCalling + " requested 10 rolls.");
    var pulledServant = false;
    var pulledHigh = false;
    for (var i = 0; i < 10; i++) {
        if (i == 9 && !pulledServant) {
            pullServant(3, i);
            continue;
        }
        if (i == 8 && !pulledHigh) {
            //4x higher chance to pull essence than servant
            var rand = Math.floor(Math.random() * 100) + 1;
            if (rand <= 80) {
                pullEssence(4, i);
            } else {
                pulledServant = true;
                pullServant(4, i);
            }
            continue;
        }
        var rarityNum = Math.floor(Math.random() * 100) + 1;
        //pulled 3* servant
        if (rarityNum < 40) {
            pulledServant = true;
            pullServant(3, i);
        }
        //pulled 4* essence
        else if (rarityNum < 52) {
            pulledHigh = true;
            pullEssence(4, i);
        }
        //pulled 4* servant
        else if (rarityNum < 55) {
            pulledServant = true;
            pulledHigh = true;
            pullServant(4, i);
        }
        //pulled 5* servant
        else if (rarityNum < 56) {
            pulledServant = true;
            pulledHigh = true;
            pullServant(5, i);
        }
        //pulled 3* essence
        else if (rarityNum < 96) {
            pullEssence(3, i);
        }
        //pulled 5* essence
        else {
            pulledHigh = true;
            pullEssence(5, i);
        }
    }
    //30 quartz per 10 summon
    quartzSpent += 30;
    moneySpent = quartzSpent * 0.57;
    moneySpent = moneySpent.toFixed(2);
    console.log("Quartz Spent: " + quartzSpent);
    console.log("Money Spent: " + moneySpent);

      connection.query(`SELECT * FROM rolls_users WHERE roll_user_id ='${authorId}'`, function(err, rows, fields) {
      if (err) throw err;
      if(rows.length == 0) {
        console.log("User did not exist. Creating.");
        connection.query(`INSERT INTO rolls_users (roll_user_id, roll_user_name, roll_user_quartz, roll_user_money, globalQuartz, globalMoney) VALUES ('${authorId}', '${userCalling}', 30,  17.1, 30, 17.1)`);
        connection.query(`UPDATE rolls_global SET total_quartz = total_quartz + 30, total_rolls = total_rolls + 1, total_money = total_money + 17.1 WHERE globalID = 0`);
      } else {
        console.log("User already exists. Updating.");
        connection.query(`UPDATE rolls_users SET roll_user_quartz = roll_user_quartz + 30, roll_user_money = roll_user_money + 17.1, globalQuartz = globalQuartz + 30, globalMoney = globalMoney + 17.1 WHERE roll_user_id = '${authorId}'`);
        connection.query(`UPDATE rolls_global SET total_quartz = total_quartz + 30, total_rolls = total_rolls + 1, total_money = total_money + 17.1 WHERE globalID = 0`);
      }
    });
    message.channel.send(`${sendMessage}`);
    if(fiveStarIcons.serName.length > 0) {
      for(let i=0; i<fiveStarIcons.serName.length;i++) {
      message.channel.send(`Congratulations! You've obtained ${fiveStarIcons.serName[i]}`,{files: [fiveStarIcons.serIcon[i]]});
      }
    }
}

function pullEssence(stars, rowNum) {
  //console.log("Inside function pullEssence");
    var essence = "";
    var currPortrait = "";
    var currLink = "";
    var currStars = "";
    var currText = "";
    var currCell = "";
    var className = "";
    var starsT = "";

    var featuredChance = Math.floor(Math.random() * 100);
    //using data from excel speadsheet - featured rates are different for each rarity
    var pullFeatured = false;

    if (stars == 3) {
        pullFeatured = checkFeatured(featuredChance, featured3eChance);
        essence = pullFeaturedObj(pullFeatured, currFeatured3E, currThreeStarEss);
        console.log("3* Essence: " + essence);
        starsT = "★★★";
    } else if (stars == 4) {
        pullFeatured = checkFeatured(featuredChance, featured4eChance);
        essence = pullFeaturedObj(pullFeatured, currFeatured4E, currFourStarEss);
        console.log("4* Essence: " + essence);
        starsT = "★★★★";
    } else {
        pullFeatured = checkFeatured(featuredChance, featured5eChance);
        essence = pullFeaturedObj(pullFeatured, currFeatured5E, currFiveStarEss);
        console.log("5* Essence: " + essence);

        connection.query(`UPDATE rolls_global SET essences = essences + 1 WHERE globalID = 0`);
        connection.query(`UPDATE rolls_users SET roll_user_essences = roll_user_essences + 1, essenceName = CONCAT(essenceName, '\n- ', '${essence}') WHERE roll_user_id = ${authorId}`);

        var essenceObj2 = getEssence(essence);
        var element = essenceObj2.path + essence;
        if (essencesPulled[element] == null) {
            essencesPulled[element] = 1;
        } else {
            essencesPulled[element] = essencesPulled[element] + 1;
        }
        //updatePulls();
        starsT = "★★★★★"
    }
    currText = essence;
    var essenceObj = getEssence(essence);
    var essenceURL = "https://grandorder.gamepress.gg" + essenceObj.path;
    //currLink = essenceObj.path;
    currStars = starsT;
    if(currStars == "★★★★★" || currStars == "★★★★") {
    sendMessage += "***" + currStars + " Essence - " + essence + " (<" + essenceURL + ">)***\n";
  } else {
    sendMessage += currStars + " Essence - " + essence + "\n";
  }
}

function pullServant(stars, rowNum) {
  //console.log("Inside function pullServant");
    var servant = "";
    var currPortrait = "";
    var currLink = "";
    var currStars = "";
    var currText = "";
    var currCell = "";
    var starsT = "";
    var className = "";

    var featuredChance = Math.floor(Math.random() * 100);
    //50% chance that it pulls from the featured list
    var pullFeatured = false;

    if (stars == 3) {
        pullFeatured = checkFeatured(featuredChance, featured3sChance);
        servant = pullFeaturedObj(pullFeatured, currFeatured3S, currThreeStars);
        starsT = "★★★";
        console.log("3* Servant: " + servant);
        /*var servantObj2 = getServant(servant);
        var servantURL = "https://grandorder.gamepress.gg" + servantObj2.path;
        message.channel.send(`★★★ ${servant} (${servantURL})`);*/
    } else if (stars == 4) {
        pullFeatured = checkFeatured(featuredChance, featured4sChance);
        servant = pullFeaturedObj(pullFeatured, currFeatured4S, currFourStars);
        console.log("4* Servant: " + servant);
        var servantObj2 = getServant(servant);
        var element = servantObj2.path + servant;
        /*var servantURL = "https://grandorder.gamepress.gg" + servantObj2.path;
        message.channel.send(`★★★★ ${servant} (${servantURL})`);*/
        if (servantsPulled[element] == null) {
            servantsPulled[element] = 1;
        } else {
            servantsPulled[element] = servantsPulled[element] + 1;
        }
        //updatePulls();
        className = "serv4TD";
        starsT = "★★★★"
    } else {
        pullFeatured = checkFeatured(featuredChance, featured5sChance);
        servant = pullFeaturedObj(pullFeatured, currFeatured5S, currFiveStars);
        console.log("5* Servant: " + servant);

        connection.query(`UPDATE rolls_global SET servants = servants + 1 WHERE globalID = 0`);
        connection.query(`UPDATE rolls_users SET roll_user_servants = roll_user_servants + 1, servantName = CONCAT(servantName, '\n- ', '${servant}') WHERE roll_user_id = ${authorId}`);

        var servantObj2 = getServant(servant);
        var element = servantObj2.path + servant;

        /*var servantURL = "https://grandorder.gamepress.gg" + servantObj2.path;
        message.channel.send(`★★★★★ ${servant} (${servantURL})`);*/
        if (servantsPulled[element] == null) {
            servantsPulled[element] = 1;
        } else {
            servantsPulled[element] = servantsPulled[element] + 1;
        }
        //updatePulls();
        className = "serv5TD";
        starsT = "★★★★★"
    }

    currText = servant;
    currCell = className;
    var servantObj = getServant(servant);
    //currPortrait = servantObj.uri;
    currLink = servantObj.path;
    servantURL = "https://grandorder.gamepress.gg" + servantObj.path;
    if(typeof servantObj.uri !== 'undefined'){
      currPortrait = servantObj.uri; }
    currStars = starsT;
    if(currStars == "★★★★★") {
      sendMessage += "***" + currStars + " Servant - " + servant + "***\n";
      fiveStarIcons.serName[fiveStarFlag] = servant;
      fiveStarIcons.serIcon[fiveStarFlag] = currPortrait;
      fiveStarFlag++;
    } else if (currStars == "★★★★"){
      sendMessage += "***" + currStars + " Servant - " + servant + "***\n";
    } else {
    sendMessage += currStars + " Servant - " + servant + "\n";
  }
}

function checkFeatured(roll, chance){
  //console.log("Inside checkFeatured");
    return (roll < chance);
}

function pullFeaturedObj(featured, currFeatured, currs){
  //console.log("Inside pullFeaturedObj");
    if(featured && currFeatured.length > 0){
        var idx = Math.floor(Math.random() * currFeatured.length);
        return currFeatured[idx];
    }
    else{
        var idx = Math.floor(Math.random() * currs.length);
        return currs[idx];
    }
}

function getServant(name) {
  //console.log("Inside getServant");
    for (var i = 0; i < allServants.length; i++) {
        if (allServants[i].title == name) {
            return allServants[i];
        }
    }
}

function getEssence(name) {
  //console.log("Inside getEssence");
    for (var i = 0; i < essences.length; i++) {
        if (essences[i].title == name) {
            return essences[i];
        }
    }
}

simulate();
}
}
