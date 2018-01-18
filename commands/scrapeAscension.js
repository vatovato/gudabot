exports.run = (servantUrl, client, message) => {
var servantCall = servantUrl;
var request = require('request');
var cheerio = require('cheerio');
const Discord = require('discord.js');

//URL to bring the corresponding item from cirno
var materialsUrl = 'http://fate-go.cirnopedia.org/icons/item/item_';

//Servant details. Name is name, ascensions is an array with the ascension tier,
//QP cost and materials needed for every tier
var servant = {
  name: '',
  ascensions: []
};

// Message to be sent to Discord channel
var sendMessage = '';

request(servantCall, function(error, response, html) {
  if(!error && response.statusCode == 200) {
    //$ = cheerio.load('div', '<div id="mw-content-text">...</div>');
    var $ = cheerio.load(html);
    var tableWithName = $('td.desc').first();
    var servantName = $(tableWithName).children().first().text();
    servant.name = servantName;
    sendMessage = "**" + servantName+ " Ascensions**\n";

    // Retrieves the div with id 'ascension' and moves to the next
    // div that has the table with ascension details
    var tableAscensions = $('#ascension').next();
    // Skips the table head
    var tableBody = $(tableAscensions).find('tbody');
    // Retrieves all rows from the table
    var rowsAscesions = $(tableBody).find('tr').toArray();

    // For every row in the table, retrieves ascension title,
    // QP cost of ascension and materials required. Since the materials
    // can be more than one, they're stored in an array
    for (let rowAscesions of rowsAscesions){
      var ascension = {
        title: '',
        cost: '',
        materials: []
      };
      var columnsAscensions = $(rowAscesions).find('td').toArray();
      var i = 0;
      for (let columnAscensions of columnsAscensions){
        switch (i){
          case 0:
            ascension.title = $(columnAscensions).html().replace(/(<\/?(\s|\S)*>)/g, "");
            sendMessage += "\n" + ascension.title;
            break;
          case 1:
            ascension.cost = $(columnAscensions).find('a').html().replace(/(<\/?(\s|\S)*>)/g, "");
            sendMessage += "\nCost: " + ascension.cost + "\nMaterials:\n";
            break;
          case 2:
            var material = {
              imageUrl: '',
              materialAmount: '',
              materialName: ''
            }
            var imagesMaterials = $(columnAscensions).find('a').toArray();
            for (let imageMaterials of imagesMaterials){
              var idImageMaterial = $(imageMaterials).attr('href').split("#")[1];
              material.imageUrl = materialsUrl + idImageMaterial + ".png";
              material.materialAmount = $(imageMaterials).find('div').text().replace("\n", "");
              material.materialName = $(imageMaterials).attr('title').replace(/[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B|\n\r/g, "");
              ascension.materials.push(material);
              sendMessage += material.materialName + " (" + material.imageUrl + ")" + " x" + material.materialAmount;
            }
            break;
        }
        i++;
      }
      servant.ascensions.push(ascension);

    }
    //console.log(sendMessage);

    message.channel.send(`${sendMessage}`).catch(console.error);

    //console.log(servant.ascensions[0].materials[0].imageUrl);

  }
});
}
