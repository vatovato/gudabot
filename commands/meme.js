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
'https://i.imgur.com/QppT1jC.png',
'https://i.imgur.com/Ed3q2UV.jpg', //Just use herc
'https://i.imgur.com/r92XMHw.png', //Again with the washija
'https://i.imgur.com/574T3rc.png', //Merry Merlin
'https://i.imgur.com/Mq3PhQy.png', //Taste a loli
'https://i.imgur.com/M3rnDoF.png', //Telling neki problems
'https://i.imgur.com/l1cFvfN.png', //Okay no need to save money
'https://i.imgur.com/vlgpIun.jpg', //Giving up on everything
'https://i.imgur.com/5rr0gVg.jpg', //Tinder is like gacha
'https://i.imgur.com/k0FRDmQ.jpg', //Pedo when they make it pedo
'https://i.imgur.com/fhnTVNr.jpg', //I just aborted
'https://i.imgur.com/pjIzhoq.jpg', //anime mom lewds
'https://i.imgur.com/hriyk4m.jpg', //Take my mana quru
'https://i.imgur.com/R88Wrll.png', //I just aborted 2
'https://i.imgur.com/WUWTmJS.jpg', //neki making friends
'https://i.imgur.com/mLVfDDQ.jpg', //not having qp
'https://i.imgur.com/Y7NbLWg.jpg', //child dies in Africa
'https://i.imgur.com/PPiVZlX.png', //I wish neki was my dad
'https://i.imgur.com/qbABCSu.png', //damage is just a number
'https://i.imgur.com/gV4VdM2.png', //never trust a neki
'https://i.imgur.com/ralqDbI.png', //got my nudes?
'https://i.imgur.com/Iw97U6m.png', //had a look in the nsfw channel
'https://i.imgur.com/aYNlf7p.png', //wishing to be kintoki
'https://i.imgur.com/LTqaZNS.jpg', //kimiko ragequit
'https://i.imgur.com/5X1yHdM.jpg', //neki in pms
'https://i.imgur.com/tKERVZD.jpg', //family portrait of saberfaces
'https://i.imgur.com/Ym6K1gx.png', //heart of the gacha
'https://i.imgur.com/hfwGZKq.png', //surprised not surprised
'https://i.imgur.com/nc4ZFpp.png', //y'all come too fast
'https://i.imgur.com/WtMoljA.png', //gacha will never betray me
'https://i.imgur.com/eyflUZ9.png', //guDABot
'https://i.imgur.com/s6XUyDi.png', //bans lolis and vaginas
'https://i.imgur.com/lrcnkwb.png', //loli alert
'https://i.imgur.com/yEi3LVH.png', //dab emoticon
'https://i.imgur.com/NKokW7y.png', //don't get me arrested
'https://i.imgur.com/bJlxvuF.png', //skimpy neros
'https://i.imgur.com/c0sIl7e.jpg', //dreamy femboys
'https://i.imgur.com/XadZpT2.jpg', //loli stop signal
'https://i.imgur.com/qYxuYgk.jpg', //unarchive or stop lewds
'https://i.imgur.com/gGNZggu.jpg', //rephin avatar change
'https://i.imgur.com/MMYpojR.jpg', //fateshirou dab resetera
'https://i.imgur.com/6tAerHz.png', //girl haly
'https://i.imgur.com/wWe48tq.png', //legal loli
'https://i.imgur.com/kr1nIkm.jpg', //Kiyo's brother
'https://i.imgur.com/n7rtu6V.jpg', //refuse to kill tama
'https://i.imgur.com/Bjl8vBu.jpg', //i'd do cu alter
'https://i.imgur.com/dOVet73.jpg', //getting pinged to talk to someone
'https://i.imgur.com/MLQwjKV.jpg', //rolling for ce teehee
'https://i.imgur.com/vCMetus.jpg',  //okita's long sword
'https://i.imgur.com/j0IZfLu.jpg',  //all about david
'https://i.imgur.com/FVIdHWL.png',
'https://i.imgur.com/uo3U0HZ.png',  //glopping napoleon
'https://i.imgur.com/rPgSaLU.png', //shingou and furoisa
'https://i.imgur.com/MWgxb40.jpg',  //say hi david
'https://i.imgur.com/JxZ4etL.png', //spamming the bot
'https://i.imgur.com/Gc7teFD.png', //rememe biggest boner
'https://i.imgur.com/sQFKwDW.png', //mentioning underage girls
'https://i.imgur.com/qbMlSdH.png', //corrupt lazy fat
'https://i.imgur.com/8cQlAY9.png' //:dab:
'https://i.imgur.com/iWekyAF.jpg', //fatshirou
'https://i.imgur.com/XN1FIdL.png', //ntr woody
'https://i.imgur.com/V4u01We.png' //laiza quit
];
var place = Math.floor((Math.random() * 111) + 1);
var sendAdvice = advice[place];
console.log("Meme: " + sendAdvice);
message.channel.send("",{files: [sendAdvice]});

//message.channel.send("",{files: ["https://i.imgur.com/rKIx0QD.jpg"]});
//message.channel.send("",{files: ["https://i.imgur.com/lpqn9H1.png"]});
}
