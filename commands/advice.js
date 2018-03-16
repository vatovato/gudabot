exports.run = (client, message, args) => {
var advice = ['', 'https://i.imgur.com/e1Hzivz.png', 'https://i.imgur.com/ylsQI8b.jpg', 'https://i.imgur.com/ss1J7I8.jpg', 'https://i.imgur.com/lkqwAS1.jpg', 'https://i.imgur.com/fQ5yHnV.png', 'https://i.imgur.com/VLVPEhH.jpg', 'https://i.imgur.com/EuW84zA.png', 'https://i.imgur.com/ASbCjOa.png', 'https://i.imgur.com/CX8r7Ws.png'];
var place = Math.floor((Math.random() * 9) + 1);
var sendAdvice = advice[place];
console.log("Meme: " + sendAdvice);
message.channel.send("",{files: [sendAdvice]});
}
