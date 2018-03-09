exports.parseName = (servantName) => {
  var servantName = servantName;
  var urlRef = '';
  var wikiRef = '';

  switch(servantName) {
    case "altria":
    case "arturia":
    case "arturia pendragon":
    case "altria pendragon":
    urlRef = '002';
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Artoria_Pendragon';
    break;
    case "saber alter":
    case "salter":
    case "arturia pendragon alter":
    case "altria pendragon alter":
    urlRef='003';
    wikiref = `http://fategrandorder.wikia.com/wiki/Artoria_Pendragon_(Alter)`;
    break;
    case "lily":
    case "saber lily":
    case "altria lily":
    case "altria pendragon lily":
    case "arturia pendragon lily":
    case "arturia lily":
    urlRef='004';
    wikiref = 'http://fategrandorder.wikia.com/wiki/Artoria_Pendragon_(Lily)';
    break;
    case "nero":
    case "umu":
    case "nero claudius caesar augustus germanicus":
    case "nero claudius":
    case "umu rojo":
    case "rojo umu":
    urlRef='005';
    wikiref = 'http://fategrandorder.wikia.com/wiki/Nero_Claudius';
    break;
    case "siegfried":
    case "sumanai":
    urlRef='006';
    wikiref = 'http://fategrandorder.wikia.com/wiki/Siegfried';
    break;
    case "caesar":
    case "cesar":
    case "gaius julius caesar":
    case "fat saber":
    urlRef='007';
    wikiref = 'http://fategrandorder.wikia.com/wiki/Gaius_Julius_Caesar';
    break;
    case "altera":
    case "saber altera":
    urlRef='008';
    wikiref = 'http://fategrandorder.wikia.com/wiki/Attila';
    break;
    case "gilles de rais":
    case "saber gilles":
    case "gilles saber":
    urlRef='009';
    wikiref = 'http://fategrandorder.wikia.com/wiki/Gilles_de_Rais_(Saber)';
    break;
    case "chevalier d'eon":
    case "d'eon":
    urlRef='010';
    wikiref = 'http://fategrandorder.wikia.com/wiki/Chevalier_d%27Eon';
    break;
    case "okita":
    case "okita souji":
    urlRef='068';
    wikiref = 'http://fategrandorder.wikia.com/wiki/Okita_Souji';
    break;
    case "fergus":
    case "fergus mac roich":
    urlRef='072';
    wikiref = 'http://fategrandorder.wikia.com/wiki/Fergus_mac_R%C3%B3ich';
    break;
    case "mordred":
    case "saber mordred":
    urlRef='076';
    wikiref = 'http://fategrandorder.wikia.com/wiki/Mordred';
    break;
    case "nero bride":
    case "bride umu":
    case "umu bride":
    case "nero claudius bride":
    case "umu blanco":
    case "blanco umu":
    case "nero blanco":
    urlRef="090";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Nero_Claudius_(Bride)';
    break;
    case "ryougi shiki":
    case "saber shiki":
    case "saber ryougi shiki":
    case "shiki saber":
    case "ryougi shiki saber":
    urlRef="091";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Ryougi_Shiki_(Saber)';
    break;
    case "rama":
    urlRef="101";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Rama';
    break;
    case "saber lancelot":
    urlRef="121";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Lancelot_(Saber)';
    break;
    case "gawain":
    urlRef="123";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Gawain';
    break;
    case "bedivere":
    urlRef="126";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Bedivere';
    break;
    case "elisabeth bathory brave":
    case "elisabeth brave":
    urlRef="138";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Elizabeth_Bathory_(Brave)';
    break;
    case "miyamoto musashi":
    case "musashi":
    urlRef="153";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Miyamoto_Musashi';
    break;
    case "arthur pendragon":
    case "arthur pendragon prototype":
    case "arthur prototype":
    case "prototype arthur":
    case "arthur":
    urlRef="160";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Arthur_Pendragon';
    break;
    case "suzuka gozen":
    case "saber suzuka gozen":
    case "saber tate eboshi":
    case "tate eboshi":
    urlRef="165";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Suzuka_Gozen';
    break;
    case "saber frankenstein":
    case "saber fran":
    urlRef="176";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Frankenstein_(Saber)';
    break;
    case "yagyuu":
    case "yagyuu tajima-no-kami munenori":
    case "yagyuu munenori":
    urlRef="187";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Yagyu_Munenori';
    break;
    case "emiya":
    case "emiya shirou":
    case "emiya shiro":
    case "emiya archer":
    case "archer emiya":
    urlRef="011";
    wikiref = 'http://fategrandorder.wikia.com/wiki/EMIYA';
    break;
    case "gilgamesh":
    case "gilga":
    urlRef="012";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Gilgamesh';
    break;
    case "robin hood":
    urlRef="013";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Robin_Hood';
    break;
    case "atalante":
    urlRef="014";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Atalanta';
    break;
    case "euryale":
    urlRef="015";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Euryale';
    break;
    case "arash":
    urlRef="016";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Arash';
    break;
    case "orion":
    case "orion chan":
    case "orion-chan":
    urlRef="060";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Orion';
    break;
    case "david":
    urlRef="063";
    wikiref = 'http://fategrandorder.wikia.com/wiki/David';
    break;
    case "oda":
    case "oda nobunaga":
    case "nobu":
    case "nobunaga":
    case "archer nobu":
    case "archer oda":
    case "archer nobunaga":
    urlRef="069";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Oda_Nobunaga';
    break;
    case "tesla":
    case "nikola tesla":
    urlRef="077";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Nikola_Tesla';
    break;
    case "arjuna":
    case "juna":
    urlRef="084";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Arjuna';
    break;
    case "child gil":
    case "child gilgamesh":
    case "chibi gil":
    urlRef="095";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Kid_Gil';
    break;
    case "billy the kid":
    urlRef="105";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Billy_The_Kid';
    break;
    case "tristan":
    urlRef="122";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Tristan';
    break;
    case "tawara touta":
    urlRef="125";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Tawara_Touta';
    break;
    case "altria summer":
    case "summer altria":
    case "altria pendragon summer":
    case "summer altria pendragon":
    case "arturia summer":
    case "summer arturia":
    case "archer arturia":
    case "archer artoria":
    case "archuria":
    urlRef="129";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Artoria_Pendragon_(Archer)';
    break;
    case "archer anne bonny":
    case "archer mary read":
    case "archer anne bonny & mary read":
    case "archer anne mary":
    case "archer anne & mary":
    case "archer anne and mary":
    case "archer boob pirates":
    case "archer yuri pirates":
    urlRef="131";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Anne_Bonny_%26_Mary_Read_(Archer)';
    break;
    case "chloe von einzbern":
    case "chloe":
    urlRef="137";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Chloe_von_Einzbern';
    break;
    case "ishtar":
    urlRef="142";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Ishtar';
    break;
    case "shinjuku archer":
    case "archer of shinjuku":
    case "james moriarty":
    case "moriarty":
    urlRef="156";
    wikiref = 'http://fategrandorder.wikia.com/wiki/James_Moriarty';
    break;
    case "emiya alter":
    case "alter emiya":
    case "detroit emiya":
    case "demiya":
    urlRef="157";
    wikiref = 'http://fategrandorder.wikia.com/wiki/EMIYA_(Alter)';
    break;
    case "helena blavatsky":
    case "helena":
    urlRef="180";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Helena_Blavatsky_(Archer)';
    break;
    case "archer inferno":
    case "inferno archer":
    case "tomoe gozen":
    urlRef="184";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Tomoe_Gozen';
    break;
    case "altera the sun":
    case "altera the sun (ta)":
    case "sun altera":
    case "archer altera":
    case "altera archer":
    urlRef="197";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Attila_the_San(ta)';
    break;
    case "cu":
    case "lancer cu":
    case "cu chulainn":
    urlRef="017";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Cu_Chulainn';
    break;
    case "elizabeth bathory":
    case "elizabeth":
    case "lancer elizabeth":
    urlRef="018";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Elizabeth_Bathory';
    break;
    case "musashibou benkei":
    case "benkei":
    urlRef="019";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Musashibou_Benkei';
    break;
    case "cu prototype":
    case "cu chulainn prototype":
    urlRef="020";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Cu_Chulainn_(Prototype)';
    break;
    case "leonidas":
    case "leonidas i":
    urlRef="021";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Leonidas';
    break;
    case "romulus":
    urlRef="022";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Romulus';
    break;
    case "hektor":
    urlRef="064";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Hector';
    break;
    case "scathach":
    case "scath":
    case "shishou":
    urlRef="070";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Sc%C3%A1thach';
    break;
    case "diarmuid":
    case "diarmuid ua duibhne":
    urlRef="071";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Diarmuid_Ua_Duibhne';
    break;
    case "altria pendragon lancer alter":
    case "lalter":
    case "lancer alter":
    urlRef="078";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Artoria_Pendragon_(Lancer_Alter)';
    break;
    case "karna":
    case "bollywood 1":
    urlRef="085";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Karna';
    break;
    case "fionn":
    case "fionn mac cumhaill":
    urlRef="087";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Fionn_mac_Cumhaill';
    break;
    case "bryn":
    case "brynhild":
    urlRef="088";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Brynhildr';
    break;
    case "li shuwen":
    case "li":
    urlRef="102";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Li_Shuwen_(Lancer)';
    break;
    case "altria pendragon lancer":
    case "altria lancer":
    case "arturia lancer":
    case "lancer altria":
    case "lancer arturia":
    case "lancer altria":
    case "lancer altria pendragon":
    case "lancer arturia pendragon":
    case "lancer artoria pendragon":
    urlRef="119";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Artoria_Pendragon_(Lancer)';
    break;
    case "tamamo lancer":
    case "tama lancer":
    case "tamamo no mae lancer":
    case "tamamo summer":
    case "summer tamamo":
    case "tama summer":
    case "summer tama":
    case "lancer tamamo":
    case "lancer tama":
    case "lancer tamamo no mae":
    urlRef="128";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Tamamo_no_Mae_(Lancer)';
    break;
    case "kiyohime":
    case "kiyo":
    urlRef="134";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Kiyohime_(Lancer)';
    break;
    case "vlad iii extra":
    case "vlad extra":
    case "lancer vlad":
    urlRef="140";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Vlad_III_(EXTRA)';
    break;
    case "jeanne d'arc alter santa lily":
    case "jeanne alter santa lily":
    case "jailter":
    urlRef="141";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Jeanne_d%27Arc_(Alter)_(Santa_Lily)';
    break;
    case "enkidu":
    case "chain of heaven":
    case "tohsaka rin":
    case "rin tohsaka":
    case "archer enkidu":
    urlRef="143";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Enkidu';
    break;
    case "medusa lancer":
    case "lancer medusa":
    urlRef="146";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Medusa_(Lancer)';
    break;
    case "jaguar warrior":
    urlRef="148";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Jaguar_Man';
    break;
    case "minamoto-no-raikou":
    case "minamoto no raikou":
    case "lancer minamoto":
    case "lancer minamoto no raikou":
    case "lancer minamoto-no-raikou":
    case "lancer yorimitsu":
    case "lancer ushi gozen":
    case "lancer raikou":
    case "summer raikou":
    urlRef="181";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Minamoto_no_Yorimitsu_(Lancer)';
    break;
    case "parvati":
    case "lancer parvati":
    case "lancer sakura":
    case "lancer matou sakura":
    urlRef="183";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Parvati';
    break;
    case "houzouin inshun":
    case "inshun":
    case "houzouin":
    case "lancer houzouin":
    case "lancer inshun":
    case "lancer purgatorio":
    urlRef="186";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Houzouin_Inshun';
    break;
    case "nezha":
    case "lancer nezha":
    urlRef="193";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Nezha';
    break;
    case "eresh":
    case "ereshkigal":
    case "lancer eresh":
    case "lancer ereshkigal":
    case "lancer rin":
    case "lancer tohsaka":
    case "lancer tohsaka rin":
    urlRef="196";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Ereshkigal';
    break;
    case "medusa":
    urlRef="023";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Medusa';
    break;
    case "georgios":
    case "st george":
    case "saint george":
    urlRef="024";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Saint_George';
    break;
    case "edward teach":
    case "teach":
    case "hentai servant":
    urlRef="025";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Edward_Teach';
    break;
    case "boudica":
    case "boobdica":
    urlRef="026";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Boudica';
    break;
    case "ushi":
    case "ushiwakamaru":
    urlRef="027";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Ushiwakamaru';
    break;
    case "alexander":
    case "alexander the great":
    urlRef="028";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Alexander';
    break;
    case "marie antoinette":
    urlRef="029";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Marie_Antoinette';
    break;
    case "martha":
    case "saint martha":
    case "st martha":
    urlRef="030";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Saint_Martha';
    break;
    case "francis drake":
    case "drake":
    urlRef="065";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Francis_Drake';
    break;
    case "rider anne bonny":
    case "rider mary read":
    case "rider anne bonny & mary read":
    case "rider anne mary":
    case "rider anne and mary":
    case "rider anne & mary":
    case "rider boob pirates":
    case "rider yuri pirates":
    urlRef="066";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Anne_Bonny_%26_Mary_Read';
    break;
    case "santa alter":
    case "salter":
    case "rider salter":
    case "rider santa alter":
    urlRef="073";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Artoria_Pendragon_(Santa_Alter)';
    break;
    case "astolfo":
    case "trap":
    case "trapstolfo":
    urlRef="094";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Astolfo';
    break;
    case "queen medb":
    case "medb":
    urlRef="099";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Medb';
    break;
    case "iskandar":
    urlRef="108";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Iskandar';
    break;
    case "rider sakata kintoki":
    case "rider golden":
    case "golden rider":
    case "rider kintoki":
    case "rider sakata":
    urlRef="115";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Sakata_Kintoki_(Rider)';
    break;
    case "ozymandias":
    case "ozy":
    urlRef="118";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Ozymandias';
    break;
    case "summer mordred":
    case "rider mordred":
    urlRef="132";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Mordred_(Rider)';
    break;
    case "quetzalcoatl":
    case "feathered serpent":
    urlRef="144";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Quetzalcoatl';
    break;
    case "resistance rider":
    case "christopher columbus":
    urlRef="172";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Christopher_Columbus';
    break;
    case "summer altria alter":
    case "summer salter":
    case "rider salter":
    urlRef="179";
    wikiref = 'http://fategrandorder.wikia.com/wiki/Artoria_Pendragon_(Rider_Alter)';
    break;
    case "ishtar":
    urlRef="182";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Ishtar_(Rider)';
    break;
    case "medea":
    urlRef="031";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Medea';
    break;
    case "caster gilles de rais":
    case "caster gilles":
    urlRef="032";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Gilles_de_Rais';
    break;
    case "hans christian andersen":
    urlRef="033";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Hans_Christian_Andersen';
    break;
    case "william shakespeare":
    case "shakespeare":
    urlRef="034";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/William_Shakespeare';
    break;
    case "mephisto":
    case "mephistopheles":
    urlRef="035";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Mephistopheles';
    break;
    case "mozart":
    case "wolfgang amadeus mozart":
    urlRef="036";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Wolfgang_Amadeus_Mozart';
    break;
    case "zhuge liang":
    case "lord el-melloi":
    case "el-melloi":
    case "waver":
    urlRef="037";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Zhuge_Liang_(Lord_El-Melloi_II)';
    break;
    case "caster cu":
    case "caster cu chulainn":
    urlRef="038";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Cu_Chulainn_(Caster)';
    break;
    case "elizabeth bathory halloween":
    urlRef="061";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Elizabeth_Bathory_(Halloween)';
    break;
    case "caster tamamo":
    case "tamamo caster":
    case "caster tamamo no mae":
    case "caster tama":
    case "tamamo no mae":
    urlRef="062";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Tamamo_no_Mae';
    break;
    case "medea lily":
    urlRef="067";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Medea_(Lily)';
    break;
    case "nursery rhyme":
    urlRef="074";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Nursery_Rhyme';
    break;
    case "paracelsus von hohenheim":
    case "hohenheim":
    case "hoenheim":
    urlRef="079";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Paracelsus_von_Hohenheim';
    break;
    case "charles babbage":
    case "babbage":
    urlRef="080";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Charles_Babbage';
    break;
    case "solomon":
    urlRef="152";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Solomon';
    break;
    case "caster helena":
    case "caster helena blavatsky":
    urlRef="100";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Helena_Blavatsky';
    break;
    case "thomas edison":
    case "edison":
    urlRef="103";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Thomas_Edison';
    break;
    case "geronimo":
    urlRef="104";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Geronimo';
    break;
    case "irisviel":
    case "irisviel holy grail":
    case "caster irisviel":
    case "caster iris":
    case "iris":
    urlRef="111";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Irisviel_(Dress_of_Heaven)';
    break;
    case "xuanzang sanzang":
    case "genjou sanzou":
    case "xuanzang":
    urlRef="113";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Xuanzang';
    break;
    case "caster nitocris":
    case "caster nito":
    urlRef="120";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Nitocris';
    break;
    case "da vinci":
    case "leonardo da vinci":
    case "davinci":
    urlRef="127";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Leonardo_Da_Vinci';
    break;
    case "summer marie antoinette":
    case "marie antoinette summer":
    case "caster marie":
    case "caster marie antoinette":
    urlRef="130";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Marie_Antoinette_(Caster)';
    break;
    case "illyasviel von einzbern":
    case "illyasviel":
    case "illya":
    urlRef="136";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Illyasviel_von_Einzbern';
    break;
    case "caster gilgamesh":
    case "caster gil":
    urlRef="145";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Gilgamesh_(Caster)';
    break;
    case "merlin":
    urlRef="150";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Merlin';
    break;
    case "fuyajo caster":
    case "scherezade":
    case "sherezade":
    urlRef="169";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Scheherazade';
    break;
    case "nero claudius summer":
    case "nero summer":
    case "summer nero":
    case "umu summer":
    case "summer umu":
    case "summer nero claudius":
    case "caster nero":
    case "caster umu":
    case "caster nero claudius":
    case "umu verano":
    case "verano umu":
    urlRef="175";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Nero_Claudius_(Caster)';
    break;
    case "okeanos caster":
    case "caster okeanos":
    case "caster circe":
    case "circe":
    urlRef="192";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Circe';
    break;
    case "midrash caster":
    case "caster midrash":
    case "queen of sheba":
    case "caster queen of sheba":
    urlRef="194";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Queen_of_Sheba';
    break;
    case "sasaki koujirou":
    case "sasaki kojirou":
    case "assassin sasaki":
    case "assassin sasaki koujirou":
    urlRef="039";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Sasaki_Kojirou';
    break;
    case "hassan of the cursed arm":
    urlRef="040";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Cursed_Arm_Hassan';
    break;
    case "stheno":
    case "assassin stheno":
    case "first gorgon sister":
    urlRef="041";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Stheno';
    break;
    case "jing ke":
    case "assassin jing ke":
    urlRef="042";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Jing_Ke';
    break;
    case "charles henri sanson":
    case "charles-henri sanson":
    case "sanson":
    case "assassin sanson":
    urlRef="043";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Charles-Henri_Sanson';
    break;
    case "phantom of the opera":
    case "phantom":
    case "assassin phantom":
    case "assassin phantom of the opera":
    urlRef="044";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/The_Phantom_of_the_Opera';
    break;
    case "mata hari":
    case "assassin mata hari":
    case "assassin matahari":
    urlRef="045";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Mata_Hari';
    break;
    case "carmilla":
    case "assassin carmilla":
    urlRef="046";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Carmilla';
    break;
    case "jack the ripper":
    case "jack":
    case "assassin jack":
    case "assassin jack the ripper":
    urlRef="075";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Jack_the_Ripper';
    break;
    case "henry jekyll & hide":
    case "dr jekyll":
    case "jekyll":
    urlRef="081";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Henry_Jekyll_%26_Hyde';
    break;
    case "mysterious heroine x":
    case "mhx":
    urlRef="086";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Mysterious_Heroine_X';
    break;
    case "assassin ryougi shiki":
    case "assassin shiki":
    urlRef="092";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Ryougi_Shiki_(Assassin)';
    break;
    case "assassin emiya":
    urlRef="109";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/EMIYA_(Assassin)';
    break;
    case "hassan of hundred persona":
    urlRef="110";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Hundred-Faced_Hassan';
    break;
    case "shuten douji":
    case "shuten-douji":
    urlRef="112";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Shuten_Douji';
    break;
    case "fuuma kotarou":
    urlRef="117";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Fuuma_Kotarou';
    break;
    case "hassan of the serenity":
    urlRef="124";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Hassan_of_Serenity';
    break;
    case "assassin scathach":
    case "assassin scath":
    case "assassin shishou":
    urlRef="133";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Scathach_(Assassin)';
    break;
    case "cleopatra":
    urlRef="139";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Cleopatra';
    break;
    case "first hassan":
    case "old man":
    case "gramps":
    urlRef="154";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/King_Hassan';
    break;
    case "shinjuku assassin":
    case "yan qing":
    urlRef="159";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Yan_Qing';
    break;
    case "fuyajo assassin":
    case "wu zetian":
    urlRef="170";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Wu_Zetian';
    break;
    case "assassin nitocris":
    urlRef="177";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Nitocris_(Assassin)';
    break;
    case "assassin paraiso":
    urlRef="185";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Mochizuki_Chiyome';
    break;
    case "katou danzou":
    urlRef="188";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Kat%C5%8D_Danz%C5%8D';
    break;
    case "osakabe hime":
    case "osakabe-hime":
    urlRef="189";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Osakabehime';
    break;
    case "heracles":
    case "hercules":
    case "herc":
    urlRef="047";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Heracles';
    break;
    case "berserker lancelot":
    urlRef="048";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Lancelot';
    break;
    case "lu bu":
    case "lu bu fengxian":
    urlRef="049";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Lu_Bu';
    break;
    case "spartacus":
    urlRef="050";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Spartacus';
    break;
    case "berserker sakata kintoki":
    case "berserker golden":
    case "berserker sakata":
    case "berserker kintoki":
    urlRef="051";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Sakata_Kintoki';
    break;
    case "vlad iii":
    case "dracula":
    case "vlad tepes":
    case "berserker vlad":
    urlRef="052";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Vlad_III';
    break;
    case "asterios":
    urlRef="053";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Asterios';
    break;
    case "caligula":
    urlRef="054";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Caligula';
    break;
    case "darius iii":
    case "darius":
    urlRef="055";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Darius_III';
    break;
    case "berserker kiyohime":
    case "berserker kiyo":
    urlRef="056";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Kiyohime';
    break;
    case "eric bloodaxe":
    urlRef="057";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Eric_Bloodaxe';
    break;
    case "tamamo cat":
    case "berserker tamamo":
    case "berserker tamamo no mae":
    case "berserker tama":
    urlRef="058";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Tamamo_Cat';
    break;
    case "berserker frankenstein":
    case "berserker fran":
    urlRef="082";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Frankenstein';
    break;
    case "beowulf":
    urlRef="089";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Beowulf';
    break;
    case "nightingale":
    urlRef="097";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Nightingale';
    break;
    case "cu alter":
    case "cu chulainn alter":
    urlRef="098";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Cu_Chulainn_(Alter)';
    break;
    case "berserker minamoto no raikou":
    case "berserker minamoto-no-raikou":
    case "berserker minamoto":
    case "berserker minamoto":
    case "berserker yorimitsu":
    case "berserker ushi gozen":
    case "berserker raikou":
    urlRef="114";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Ushi_Gozen';
    break;
    case "ibaraki douji":
    case "ibaraki-douji":
    urlRef="116";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Ibaraki_Douji';
    break;
    case "mysterious heroine x alter":
    case "mhx alter":
    case "mysterious sailor x":
    case "berserker mhx":
    urlRef="155";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Mysterious_Heroine_X_(Alter)';
    break;
    case "hijikata toshizo":
    urlRef="161";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Hijikata_Toshizou';
    break;
    case "chacha":
    urlRef="162";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Chacha';
    break;
    case "el dorado berserker":
    case "el dorado":
    case "berserker el dorado":
    case "penthesilea":
    urlRef="171";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Penthesilea';
    break;
    case "paul bunyan":
    urlRef="174";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Paul_Bunyan';
    break;
    case "berserker oda nobunada":
    case "berserker oda":
    case "berserker nobunaga":
    case "berserker nobu":
    urlRef="178";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Oda_Nobunaga_(Berserker)';
    break;
    case "jeanne d'arc":
    case "jeanne":
    case "ruler jeanne":
    case "ruler jeanne d'arc":
    urlRef="059";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Jeanne_d%27Arc';
    break;
    case "amakusa shirou":
    urlRef="093";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Amakusa_Shirou';
    break;
    case "ruler martha":
    case "ruler saint martha":
    urlRef="135";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Saint_Martha_(Ruler)';
    break;
    case "sherlock holmes":
    case "sherlock":
    case "holmes":
    urlRef="173";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Sherlock_Holmes';
    break;
    case "count of monte cristo":
    case "edmond dantes":
    case "dantes":
    case "avenger edmond":
    case "avenger dantes":
    case "avenger edmond dantes":
    case "edmond":
    urlRef="096";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Edmond_Dantes';
    break;
    case "jeanne d'arc alter":
    case "jeanne alter":
    case "jalter":
    case "avenger jeanne":
    case "avenger jeanne d'arc":
    case "avenger jeanne d'arc alter":
    case "avenger jeanne alter":
    case "djeanne":
    urlRef="106";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Jeanne_d%27Arc_(Alter)';
    break;
    case "angra mainyu":
    urlRef="107";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Angra_Mainyu';
    break;
    case "gorgon":
    case "avenger gorgon":
    case "avenger medusa":
    urlRef="147";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Gorgon';
    break;
    case "shinjuku avenger":
    case "hessian wolf":
    case "hessian lobo":
    urlRef="158";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Hessian_Lobo';
    break;
    case "meltryllis":
    urlRef="163";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Meltlilith';
    break;
    case "passionlip":
    urlRef="164";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Passionlip';
    break;
    case "sessyoin kiara":
    urlRef="167";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Sessyoin_Kiara';
    break;
    case "mecha eli-chan":
    case "mecha eli chan":
    urlRef="190";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Mecha_Eli-chan';
    break;
    case "mecha eli-chan mk.ii":
    case "mecha eli chan mk.ii":
    urlRef="191";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Mecha_Eli-chan_Mk.II';
    break;
    case "bb":
    urlRef="166";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/BB';
    break;
    case "abigail williams":
    urlRef="195";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Abigail_Williams';
    break;
    case "katsushika hokusai":
    case "hokusai":
    urlRef="198";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Katsushika_Hokusai';
    break;
    case "tiamat":
    case "beast 2":
    case "beast ii":
    urlRef="149";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Tiamat';
    break;
    case "semiramis":
    case "queen of assyria":
    case "assassin semiramis":
    urlRef="199";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Semiramis';
    break;
    case "asagami fujino":
    case "archer asagami fujino":
    case "archer fujino":
    case "fujino":
    urlRef = "200";
    wikiRef = 'http://fategrandorder.wikia.com/wiki/Asagami_Fujino';
    break;
  }
return urlRef;
}
