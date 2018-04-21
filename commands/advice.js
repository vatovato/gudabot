exports.run = (client, message, args) => {

if(message.channel.name == "nsfw") {
  message.channel.send("",{files: ["https://i.imgur.com/4W9g2nC.png"]});
  return;
}

var advice = ['',
'https://i.imgur.com/tkJEQae.jpg',
'https://i.imgur.com/1Cox3ja.jpg',
'https://i.imgur.com/Hp9cSpG.jpg',
'https://i.imgur.com/j4wzBxq.jpg',
'https://i.imgur.com/E89IPDy.jpg',
'https://i.imgur.com/4nl0Dtx.jpg',
'https://i.imgur.com/0xXu3FI.jpg',
'https://i.imgur.com/Jd2Xs9A.jpg',
'https://i.imgur.com/dubY4Gg.jpg',
'https://i.imgur.com/G6SDUg1.jpg',
'https://i.imgur.com/47zI3oK.jpg',
'https://i.imgur.com/ONlSgKw.jpg',
'https://i.imgur.com/oFusFpN.jpg',
'https://i.imgur.com/JxMurT6.jpg',
'https://i.imgur.com/IfeqB9I.jpg',
'https://i.imgur.com/1DjnA9x.png',
'https://i.imgur.com/LNQx7Zm.jpg',
'https://i.imgur.com/Sz7D3sm.jpg',
'https://i.imgur.com/OjHTfih.jpg',
'https://i.imgur.com/OWzb1Xh.png',
'https://i.imgur.com/d2s3xNn.png',
'https://i.imgur.com/7zSeGxH.png',
'https://i.imgur.com/RY0Xjy5.png',
'https://i.imgur.com/uo5VO94.png',
'https://i.imgur.com/hgWvahM.png',
'https://i.imgur.com/XgMLF7d.png'];
var place = Math.floor((Math.random() * 26) + 1);
var sendAdvice = advice[place];
console.log("Meme: " + sendAdvice);
message.channel.send("",{files: [sendAdvice]});

//message.channel.send("",{files: ["https://i.imgur.com/rKIx0QD.jpg"]});
//message.channel.send("",{files: ["https://i.imgur.com/lpqn9H1.png"]});
}
