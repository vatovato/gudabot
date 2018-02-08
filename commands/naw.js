exports.run = (client, message, args) => {
var memes = ['','The ~installing the game~ MADNESS!!1! Will I Install From Play or APKPURE?!?!?!',
'EXPLAINED!!! Touching Your Phone Screen So The Game DOES THINGS **TUTORIAL**',
'Better Then Other ~Servants~ This Servant Is GOOD (Not Clickbait)',`**Will I Won't I** OF COURSE I WILL (Pay Me Money So I Can Will)`,
`BEST STRATEGY ~Opening the Game~ **Shortcut or Menu?!** (The Answer Is Not What You Think [Yes It Is])`,
`SUPPORT Me on ++PATREON++ So I Can Tutorial How To Open in iPhone ~~Link in Description!~~`,
`WHAT'S NEXT on FGO NA? **New Banners DUH**`,
`STRATEGY!!! ~How To Beat Gacha Rates And Get Your Servant~ (Spoiler: Roll Until Get Servant)`,
`++VALENTINE'S EVENT!!++ Because Wiki And Cirno And Wikia Are Not a Thing For Some People (Clickbait AF)`,
`**MONEY!** Are You Opening Your Wallets YET?! + Gimme MONEY`,
`**WATCH ME** Drop Mad Cash On Gacha As If There Was Any ~Strategy~ Involved + GIVEAWAY 1% Of What You Give Me`,
`Servants Explained: You Need Them To Fight **Here's How**`,
`I Hold Your Hand While You Cross The Street! + ~Chew Food For Money~ (Pee Comes Out From Here, Viewer)`,
`ARE YOU EVEN SERIOUS?! 2 Million Download Campaing! I Repeat Everything The Original Announcement Says! (Plus Useless Comments Because 10 Minutes Is A Long Time You Guys)`,
`FREE QUARTZ?!?!?! No, But Watch My Video **Anyway!**`,
`**Is FGO ~Pay2Win~??** F2P vs P2P & "Pay 2 Waifu" Explained for Fate: Grand Order NA [FGO NA] (This is an actual video title, I did not make this one up, I swear)`,
`kayos SECRETLY LOVES ME ~~Or Maybe He IS Me~~ [FGO DRAMA] + OMG MY FIRST RAP VIDEO GUYS!!!!!`];

var place = Math.floor((Math.random() * 16) + 1);
var sendMeme = memes[place];
console.log("Meme: " + sendMeme);
message.channel.send(`${sendMeme}`);
}
