exports.run = (client, message, args) => {
  var servantName = args.join(" ").toLowerCase();
  var invalidServantName = args.join("+").toLowerCase();
  var searchUrl = "https://www.google.com.ar/search?q=" + invalidServantName + "+site%3Ahttp%3A%2F%2Ffate-go.cirnopedia.org";
  var urlRef = '';
  var servantUrl ='';
  var client = client;
  var message = message;
  var request = require('request');
  var cheerio = require('cheerio');
  const Discord = require('discord.js');
  var bondCE = {
    rarity: '',
    image: '',
    name: '',
    cost: '',
    hp: '',
    atk: '',
    icon: '',
    effect: '',
    url: ''
  };
  console.log(`Required bond CE for ${servantName}`);

  var callSwitch = require(`./switch.js`);
  var returnValue = callSwitch.parseName(servantName);
  returnValue = returnValue.split(" ");
  urlRef = returnValue[0];

  if (urlRef.length == 0) {
    message.channel.send(`Invalid Servant name. Try Google: ${searchUrl}`);
  } else {
    servantUrl = 'http://fate-go.cirnopedia.org/servant_profile.php?servant=' + urlRef;
    request(servantUrl, function(error, response, html) {
      if(!error && response.statusCode == 200) {
        var $ = cheerio.load(html);

        var tableWithName = $('td.desc').first();
        servantName = $(tableWithName).children().first().text();

        var divWithTable = $('div[id="maxbond"]').next();
        var tablewithCE = $(divWithTable).find('tbody');
        var tablesColumns = $(tablewithCE).find('td').toArray();
        var i = 0;
        for (let tableColumns of tablesColumns) {
          switch (i) {
            case 0:
            bondCE.rarity = $(tableColumns).text();
            break;
            case 1:
            bondCE.image = $(tableColumns).find('img').attr('style');
            var searchIndex = bondCE.image.search("craft_essence");
            searchIndex = searchIndex + 14;
            bondCE.image = bondCE.image.substr(searchIndex, 3);
            bondCE.url = "http://fate-go.cirnopedia.org/craft_essence_profile.php?essence=" + bondCE.image + "#nav";
            bondCE.image = "http://fate-go.cirnopedia.org/icons/essence_sample/craft_essence_" + bondCE.image + ".png";
            break;
            case 2:
            bondCE.name = $(tableColumns).find('a').text();
            bondCE.name = bondCE.name.replace(/[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B|\n\r/g, "");
            break;
            case 3:
            bondCE.cost = $(tableColumns).text();
            break;
            case 4:
            bondCE.hp = $(tableColumns).text();
            break;
            case 5:
            bondCE.atk = $(tableColumns).text();
            break;
            case 6:
            var icon = $(tableColumns).find('img').attr('src');
            bondCE.icon = "http://fate-go.cirnopedia.org/" + icon;
            break;
            case 7:
            bondCE.effect = $(tableColumns).html();
            bondCE.effect = bondCE.effect.replace(/<br>/g, "\n");
            bondCE.effect = bondCE.effect.replace(/&apos;/g, '\\´');
            bondCE.effect = bondCE.effect.replace(/&quot;/g, '\\"');
            break;
          }
          i++;
        }

        const embed = new Discord.MessageEmbed()
        .setTitle(bondCE.name)
        .setThumbnail(bondCE.image)
        .setURL(bondCE.url)
        .setAuthor(servantName,bondCE.icon)
        .addField("Rarity", bondCE.rarity, true)
        .addField("Cost", bondCE.cost, true)
        .addField("HP", bondCE.hp, true)
        .addField("ATK", bondCE.atk, true)
        .addField("Effect", bondCE.effect)
        message.channel.send({embed});
  }
});
}
}
