exports.run = (client, message, args) => {
  const MarkovGen = require('markov-generator');

  let markov = new MarkovGen({
    input: ['~FGO NA News!~ *NEW Servants & A NEW Banner!!* 1/2 AP Event & CHALLENGE QUESTS! Oh My!!..', 'A WILD *(NOT)* Whale Returns! ~LAST SHOT~ for Shiki & Other Fun Stuff! [FGO NA]', '**PULL -or- SKIP??** Things to Look for in Banners to ~SUMMON~ or ~SAVE THOSE QUARTZ!~ (FGO NA)',
'Craft Essence ~GUIDE & STRATEGY~ for the Kara No Kyoukai (Garden of Sinners) Collab Event [FGO NA]', '10 Minute *Quick Guide* & Overview of the ~Kara No Kyoukai~ (Garden of Sinners) FGO NA Collab Event', '**Is It Bait??** ~~My Thoughts & Opinion~~ on the New FGO NA Saint ',
'They are ~FINALLY~ Coming!! *NEW* Banner & Strengthening Quests for FGO', '~Please Dont Hate Me for Telling You This!!~ FGO NA *Hidden* Valentines Craft ', '~Bored of Farming the Event?~ Heres a Few Things to Do to Help *BREAK UP* The Grind',
'The Valentines **MADNESS** Explained ~In-Game~ (The CEs Work DIFFERENTLY Then You Think (FGO NA)', '**Whatss Next for FGO NA?** A Look at the FGO NA Timeline & Future Banners ', 'ARE YOU KIDDING ME?!.. Oh My.. Prepare Yourselves.. THE MADNESS RETURNS! ',
'*3* Things-to-Know about the ~NEW~ "Anniversary Blonde" Mystic Code (FGO NA)','FGO NA ~2,000,000~ Downloads Event *FULL INFORMATION* (25 FREE Quartz, 6 FREE Tickets & *TONS MORE*)','**FREE QUARTZ!?** "Not A Whale" Says.. YES!!.. (Saint Quartz, iOS, Android GIVEAWAY Update & More!)',
'Are You ~Lucky~.. or *UNLUCKY*??.. This Info Will HELP Out! (FGO NA Informational Video)','**DONT PANIC!!** But 100% Do This ~BEFORE~ Saber Wars Ends (FGO NA Tips & Tricks Video)','**Save Those QUARTZ!!** 5 Important ~TIPS~ For F2P & C2P Players for FGO NA! (Fate Grand Order US)',
'**Whats Next Up for FGO NA?** A Look at the Next Few Milestones for FGO NA (Bride Nero Soon!!)','**Is FGO ~Pay2Win~??** F2P vs P2P & "Pay 2 Waifu" Explained for Fate: Grand Order NA [FGO NA]','**YES!!** Rate Up ~IS A LIE!!~ Heres Why.. (Info, Details & "Rate Up" Explanation for FGO NA Gacha)',
'**SPEND -or- SAVE??** Upcoming FGO NA Banners (December - February) & The FGO NA Timeline','~FGO Secrets~ Getting FREE SAINT QUARTZ Just Playing Your Servants through Bond! (Explained) FGO NA','*SALT*.. Salter..!? INFO, Tips & Preparing for SALTER (Santa Alter FGO NA) FGO NA Christmas Event'],
    minLength: 10
  });

  let sentence = markov.makeChain();
console.log(sentence);
message.channel.send(`${sentence}`);
}
