exports.run = (client, message, args) => {

/*if(message.channel.name == "nsfw") {
  message.channel.send("",{files: ["https://i.imgur.com/4W9g2nC.png"]});
  return;
}*/

var advice = ['',
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
'https://i.imgur.com/XgMLF7d.png',
'https://i.imgur.com/eUl3zTc.png',
'https://i.imgur.com/2PVoiue.png',
'https://i.imgur.com/OOwCNyF.jpg',
'https://i.imgur.com/cgwR35h.jpg',
'https://i.imgur.com/YCIaHGf.jpg',
'https://i.imgur.com/FNZhUOv.png',
'https://i.imgur.com/7ebHi4k.png',
'https://i.imgur.com/IC38qq5.png',
'https://i.imgur.com/RflFEYo.jpg',
'https://i.imgur.com/OhMAN61.png',
'https://i.imgur.com/qHFHmbQ.png',
'https://i.imgur.com/3AvatUE.png',
'https://i.imgur.com/I3pqYSs.jpg',
'https://i.imgur.com/3O7YiZU.png',
'https://i.imgur.com/Q6Rlq2z.png',
'https://i.imgur.com/0LjuEVj.jpg',
'https://i.imgur.com/kIafYhw.png',
'https://i.imgur.com/4wAGGHQ.png',
'https://i.imgur.com/gx0QIw6.jpg',
'https://i.imgur.com/0yoV14k.jpg',
'https://i.imgur.com/oCmLhaT.jpg',
'https://i.imgur.com/s64Vg1H.jpg',
'https://i.imgur.com/HND0AYA.png',
'https://i.imgur.com/m5z7cW5.png',
'https://i.imgur.com/cW194ua.jpg',
'https://i.imgur.com/FRdUdYh.jpg',
'https://i.imgur.com/QGznmix.jpg',
'https://i.imgur.com/Hn2EHhK.jpg',
'https://i.imgur.com/yctvGop.jpg',
'https://i.imgur.com/ge8HTRp.jpg',
'https://i.imgur.com/yFx4MfK.jpg',
'https://i.imgur.com/h1SgpXM.png',
'https://i.imgur.com/VtwYH0u.jpg',
'https://i.imgur.com/bKZP4C3.jpg',
'https://i.imgur.com/gelZTdZ.png',
'https://i.imgur.com/JlqIukV.png',
'https://i.imgur.com/F3j3XTq.png',
'https://i.imgur.com/QppT1jC.png'];
var place = Math.floor((Math.random() * 50) + 1);
var sendAdvice = advice[place];
console.log("Meme: " + sendAdvice);
message.channel.send("",{files: [sendAdvice]});

//message.channel.send("",{files: ["https://i.imgur.com/rKIx0QD.jpg"]});
//message.channel.send("",{files: ["https://i.imgur.com/lpqn9H1.png"]});
}
