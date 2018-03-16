exports.run = (client, message, args) => {
var memes = ['','https://i.imgur.com/jLkITgT.png','https://i.imgur.com/l5Wpa3t.jpg','https://i.imgur.com/3EwY2zj.jpg','https://i.imgur.com/MSM1oUj.png','https://i.imgur.com/d8Sc8SA.jpg','https://i.imgur.com/Op5fvC2.jpg','https://i.imgur.com/umFVcPu.jpg',  'https://i.imgur.com/sxlqpv4.jpg', 'https://i.imgur.com/GNLJQ6v.jpg'];
var place = Math.floor((Math.random() * 9) + 1);
var sendMeme = memes[place];
console.log("Meme: " + sendMeme);
message.channel.send("",{files: [sendMeme]});
}
