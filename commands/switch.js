exports.parseName = (servantName) => {
  var servantName = servantName;
  var urlRef = '';

  switch(servantName) {
    case "altria":
    case "arturia":
    case "arturia pendragon":
    case "altria pendragon":
    urlRef = '002';
    break;
    case "saber alter":
    case "salter":
    case "arturia pendragon alter":
    case "altria pendragon alter":
    urlRef='003';
    break;
    case "lily":
    case "saber lily":
    case "altria lily":
    case "altria pendragon lily":
    case "arturia pendragon lily":
    case "arturia lily":
    urlRef='004';
    break;
    case "nero":
    case "umu":
    case "nero claudius caesar augustus germanicus":
    case "nero claudius":
    case "umu rojo":
    case "rojo umu":
    urlRef='005';
    break;
    case "siegfried":
    urlRef='006';
    break;
    case "caesar":
    case "cesar":
    case "gaius julius caesar":
    case "fat saber":
    urlRef='007';
    break;
    case "altera":
    urlRef='008';
    break;
    case "gilles de rais":
    case "saber gilles":
    case "gilles saber":
    urlRef='009';
    break;
    case "chevalier d'eon":
    case "d'eon":
    urlRef='010';
    break;
    case "okita":
    case "okita souji":
    urlRef='068';
    break;
    case "fergus":
    case "fergus mac roich":
    urlRef='072';
    break;
    case "mordred":
    urlRef='076';
    break;
    case "nero bride":
    case "bride umu":
    case "umu bride":
    case "nero claudius bride":
    case "umu blanco":
    case "blanco umu":
    case "nero blanco":
    urlRef="090";
    break;
    case "ryougi shiki":
    case "saber shiki":
    case "saber ryougi shiki":
    case "shiki saber":
    case "ryougi shiki saber":
    urlRef="091";
    break;
    case "rama":
    urlRef="101";
    break;
    case "saber lancelot":
    urlRef="121";
    break;
    case "gawain":
    urlRef="123";
    break;
    case "bedivere":
    urlRef="126";
    break;
    case "elisabeth bathory brave":
    case "elisabeth brave":
    urlRef="138";
    break;
    case "miyamoto musashi":
    case "musashi":
    urlRef="153";
    break;
    case "arthur pendragon":
    case "arthur pendragon prototype":
    case "arthur prototype":
    case "prototype arthur":
    case "arthur":
    urlRef="160";
    break;
    case "suzuka gozen":
    case "saber suzuka gozen":
    case "saber tate eboshi":
    case "tate eboshi":
    urlRef="165";
    break;
    case "saber frankenstein":
    case "saber fran":
    urlRef="176";
    break;
    case "yagyuu":
    case "yagyuu tajima-no-kami munenori":
    case "yagyuu munenori":
    urlRef="187";
    break;
    case "emiya":
    case "emiya shirou":
    case "emiya shiro":
    case "emiya archer":
    case "archer emiya":
    urlRef="011";
    break;
    case "gilgamesh":
    case "gilga":
    urlRef="012";
    break;
    case "robin hood":
    urlRef="013";
    break;
    case "atalante":
    urlRef="014";
    break;
    case "euryale":
    urlRef="015";
    break;
    case "arash":
    urlRef="016";
    break;
    case "orion":
    case "orion chan":
    case "orion-chan":
    urlRef="060";
    break;
    case "david":
    urlRef="063";
    break;
    case "oda":
    case "oda nobunaga":
    case "nobu":
    case "nobunaga":
    case "archer nobu":
    case "archer oda":
    case "archer nobunaga":
    urlRef="069";
    break;
    case "tesla":
    case "nikola tesla":
    urlRef="077";
    break;
    case "arjuna":
    case "juna":
    urlRef="084";
    break;
    case "child gil":
    case "child gilgamesh":
    case "chibi gil":
    urlRef="095";
    break;
    case "billy the kid":
    urlRef="105";
    break;
    case "tristan":
    urlRef="122";
    break;
    case "tawara touta":
    urlRef="125";
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
    break;
    case "chloe von einzbern":
    case "chloe":
    urlRef="137";
    break;
    case "ishtar":
    urlRef="142";
    break;
    case "shinjuku archer":
    case "archer of shinjuku":
    case "james moriarty":
    case "moriarty":
    urlRef="156";
    break;
    case "emiya alter":
    case "alter emiya":
    case "detroit emiya":
    case "demiya":
    urlRef="157";
    break;
    case "helena blavatsky":
    case "helena":
    urlRef="180";
    break;
    case "archer inferno":
    case "inferno archer":
    case "tomoe gozen":
    urlRef="184";
    break;
    case "altera the sun":
    case "altera the sun (ta)":
    case "sun altera":
    case "archer altera":
    case "altera archer":
    urlRef="197";
    break;
    case "cu":
    case "lancer cu":
    case "cu chulainn":
    urlRef="017";
    break;
    case "elizabeth bathory":
    case "elizabeth":
    case "lancer elizabeth":
    urlRef="018";
    break;
    case "musashibou benkei":
    case "benkei":
    urlRef="019";
    break;
    case "cu prototype":
    case "cu chulainn prototype":
    urlRef="020";
    break;
    case "leonidas":
    case "leonidas i":
    urlRef="021";
    break;
    case "romulus":
    urlRef="022";
    break;
    case "hektor":
    urlRef="064";
    break;
    case "scathach":
    case "scath":
    case "shishou":
    urlRef="070";
    break;
    case "diarmuid":
    case "diarmuid ua duibhne":
    urlRef="071";
    break;
    case "altria pendragon lancer alter":
    case "lalter":
    case "lancer alter":
    urlRef="078";
    break;
    case "karna":
    case "bollywood 1":
    urlRef="085";
    break;
    case "fionn":
    case "fionn mac cumhaill":
    urlRef="087";
    break;
    case "bryn":
    case "brynhild":
    urlRef="088";
    break;
    case "li shuwen":
    case "li":
    urlRef="102";
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
    break;
    case "kiyohime":
    case "kiyo":
    urlRef="134";
    break;
    case "vlad iii extra":
    case "vlad extra":
    case "lancer vlad":
    urlRef="140";
    break;
    case "jeanne d'arc alter santa lily":
    case "jeanne alter santa lily":
    case "jailter":
    urlRef="141";
    break;
    case "enkidu":
    case "chain of heaven":
    case "tohsaka rin":
    case "rin tohsaka":
    case "archer enkidu":
    urlRef="143";
    break;
    case "medusa lancer":
    case "lancer medusa":
    urlRef="146";
    break;
    case "jaguar warrior":
    urlRef="148";
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
    break;
    case "parvati":
    case "lancer parvati":
    case "lancer sakura":
    case "lancer matou sakura":
    urlRef="183";
    break;
    case "houzouin inshun":
    case "inshun":
    case "houzouin":
    case "lancer houzouin":
    case "lancer inshun":
    case "lancer purgatorio":
    urlRef="186";
    break;
    case "nezha":
    case "lancer nezha":
    urlRef="193";
    break;
    case "eresh":
    case "ereshkigal":
    case "lancer eresh":
    case "lancer ereshkigal":
    case "lancer rin":
    case "lancer tohsaka":
    case "lancer tohsaka rin":
    urlRef="196";
    break;
    case "medusa":
    urlRef="023";
    break;
    case "georgios":
    urlRef="024";
    break;
    case "edward teach":
    case "teach":
    case "hentai servant":
    urlRef="025";
    break;
    case "boudica":
    case "boobdica":
    urlRef="026";
    break;
    case "ushi":
    case "ushiwakamaru":
    urlRef="027";
    break;
    case "alexander":
    case "alexander the great":
    urlRef="028";
    break;
    case "marie antoinette":
    urlRef="029";
    break;
    case "martha":
    case "saint martha":
    case "st martha":
    urlRef="030";
    break;
    case "francis drake":
    case "drake":
    urlRef="065";
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
    break;
    case "santa alter":
    case "salter":
    case "rider salter":
    case "rider santa alter":
    urlRef="073";
    break;
    case "astolfo":
    case "trap":
    urlRef="094";
    break;
    case "queen medb":
    urlRef="099";
    break;
    case "iskandar":
    urlRef="108";
    break;
    case "rider sakata kintoki":
    case "rider golden":
    case "golden rider":
    case "rider kintoki":
    case "rider sakata":
    urlRef="115";
    break;
    case "ozymandias":
    urlRef="118";
    break;
    case "summer mordred":
    case "rider mordred":
    urlRef="132";
    break;
    case "quetzalcoatl":
    case "feathered serpent":
    urlRef="144";
    break;
    case "resistance rider":
    urlRef="172";
    break;
    case "summer altria alter":
    case "summer salter":
    case "rider salter":
    urlRef="179";
    break;
    case "ishtar":
    urlRef="182";
    break;
    case "medea":
    urlRef="031";
    break;
    case "caster gilles de rais":
    case "caster gilles":
    urlRef="032";
    break;
    case "hans christian andersen":
    urlRef="033";
    break;
    case "william shakespeare":
    case "shakespeare":
    urlRef="034";
    break;
    case "mephisto":
    case "mephistopheles":
    urlRef="035";
    break;
    case "mozart":
    case "wolfgang amadeus mozart":
    urlRef="036";
    break;
    case "zhuge liang":
    case "lord el-melloi":
    case "el-melloi":
    case "waver":
    urlRef="037";
    break;
    case "caster cu":
    case "caster cu chulainn":
    urlRef="038";
    break;
    case "elizabeth bathory halloween":
    urlRef="061";
    break;
    case "caster tamamo":
    case "tamamo caster":
    case "caster tamamo no mae":
    case "caster tama":
    urlRef="062";
    break;
    case "medea lily":
    urlRef="067";
    break;
    case "nursery rhyme":
    urlRef="074";
    break;
    case "paracelsus von hohenheim":
    case "hohenheim":
    case "hoenheim":
    urlRef="079";
    break;
    case "charles babbage":
    case "babbage":
    urlRef="080";
    break;
    case "solomon":
    urlRef="152";
    break;
    case "caster helena":
    case "caster helena blavatsky":
    urlRef="100";
    break;
    case "thomas edison":
    case "edison":
    urlRef="103";
    break;
    case "geronimo":
    urlRef="104";
    break;
    case "irisviel":
    case "irisviel holy grail":
    urlRef="111";
    break;
    case "xuanzang sanzang":
    case "genjou sanzou":
    case "xuanzang":
    urlRef="113";
    break;
    case "caster nitocris":
    urlRef="120";
    break;
    case "da vinci":
    case "leonardo da vinci":
    case "davinci":
    urlRef="127";
    break;
    case "summer marie antoinette":
    case "marie antoinette summer":
    case "caster marie":
    case "caster marie antoinette":
    urlRef="130";
    break;
    case "illyasviel von einzbern":
    case "illyasviel":
    case "illya":
    urlRef="136";
    break;
    case "caster gilgamesh":
    case "caster gil":
    urlRef="145";
    break;
    case "merlin":
    urlRef="150";
    break;
    case "fuyajo caster":
    urlRef="169";
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
    break;
    case "okeanos caster":
    case "caster okeanos":
    case "caster circe":
    case "circe":
    urlRef="192";
    break;
    case "midrash caster":
    case "caster midrash":
    case "queen of sheba":
    case "caster queen of sheba":
    urlRef="194";
    break;
    case "sasaki koujirou":
    case "sasaki kojirou":
    case "assassin sasaki":
    case "assassin sasaki koujirou":
    urlRef="039";
    break;
    case "hassan of the cursed arm":
    urlRef="040";
    break;
    case "stheno":
    case "assassin stheno":
    case "first gorgon sister":
    urlRef="041";
    break;
    case "jing ke":
    case "assassin jing ke":
    urlRef="042";
    break;
    case "charles henri sanson":
    case "charles-henri sanson":
    case "sanson":
    case "assassin sanson":
    urlRef="043";
    break;
    case "phantom of the opera":
    case "phantom":
    case "assassin phantom":
    case "assassin phantom of the opera":
    urlRef="044";
    break;
    case "mata hari":
    case "assassin mata hari":
    case "assassin matahari":
    urlRef="045";
    break;
    case "carmilla":
    case "assassin carmilla":
    urlRef="046";
    break;
    case "jack the ripper":
    case "jack":
    case "assassin jack":
    case "assassin jack the ripper":
    urlRef="075";
    break;
    case "henry jekyll & hide":
    case "dr jekyll":
    case "jekyll":
    urlRef="081";
    break;
    case "mysterious heroine x":
    case "mhx":
    urlRef="086";
    break;
    case "assassin ryougi shiki":
    case "assassin shiki":
    urlRef="092";
    break;
    case "assassin emiya":
    urlRef="109";
    break;
    case "hassan of hundred persona":
    urlRef="110";
    break;
    case "shuten douji":
    case "shuten-douji":
    urlRef="112";
    break;
    case "fuuma kotarou":
    urlRef="117";
    break;
    case "hassan of the serenity":
    urlRef="124";
    break;
    case "assassin scathach":
    case "assassin scath":
    case "assassin shishou":
    urlRef="133";
    break;
    case "cleopatra":
    urlRef="139";
    break;
    case "first hassan":
    case "old man":
    case "gramps":
    urlRef="154";
    break;
    case "shinjuku assassin":
    case "yan qing":
    urlRef="159";
    break;
    case "fuyajo assassin":
    urlRef="170";
    break;
    case "assassin nitocris":
    urlRef="177";
    break;
    case "assassin paraiso":
    urlRef="185";
    break;
    case "katou danzou":
    urlRef="188";
    break;
    case "osakabe hime":
    case "osakabe-hime":
    urlRef="189";
    break;
    case "heracles":
    case "hercules":
    case "herc":
    urlRef="047";
    break;
    case "berserker lancelot":
    urlRef="048";
    break;
    case "lu bu":
    case "lu bu fengxian":
    urlRef="049";
    break;
    case "spartacus":
    urlRef="050";
    break;
    case "berserker sakata kintoki":
    case "berserker golden":
    case "berserker sakata":
    case "berserker kintoki":
    urlRef="051";
    break;
    case "vlad iii":
    case "dracula":
    case "vlad tepes":
    case "berserker vlad":
    urlRef="052";
    break;
    case "asterios":
    urlRef="053";
    break;
    case "caligula":
    urlRef="054";
    break;
    case "darius iii":
    case "darius":
    urlRef="055";
    break;
    case "berserker kiyohime":
    case "berserker kiyo":
    urlRef="056";
    break;
    case "eric bloodaxe":
    urlRef="057";
    break;
    case "tamamo cat":
    case "berserker tamamo":
    case "berserker tamamo no mae":
    case "berserker tama":
    urlRef="058";
    break;
    case "berserker frankenstein":
    case "berserker fran":
    urlRef="082";
    break;
    case "beowulf":
    urlRef="089";
    break;
    case "nightingale":
    urlRef="097";
    break;
    case "cu alter":
    case "cu chulainn alter":
    urlRef="098";
    break;
    case "berserker minamoto no raikou":
    case "berserker minamoto-no-raikou":
    case "berserker minamoto":
    case "berserker minamoto":
    case "berserker yorimitsu":
    case "berserker ushi gozen":
    case "berserker raikou":
    urlRef="114";
    break;
    case "ibaraki douji":
    case "ibaraki-douji":
    urlRef="116";
    break;
    case "mysterious heroine x alter":
    case "mhx alter":
    case "mysterious sailor x":
    case "berserker mhx":
    urlRef="155";
    break;
    case "hijikata toshizo":
    urlRef="161";
    break;
    case "chacha":
    urlRef="162";
    break;
    case "el dorado berserker":
    case "el dorado":
    case "berserker el dorado":
    urlRef="171";
    break;
    case "paul bunyan":
    urlRef="174";
    break;
    case "berserker oda nobunada":
    case "berserker oda":
    case "berserker nobunaga":
    case "berserker nobu":
    urlRef="178";
    break;
    case "jeanne d'arc":
    case "jeanne":
    case "ruler jeanne":
    case "ruler jeanne d'arc":
    urlRef="059";
    break;
    case "amakusa shirou":
    urlRef="093";
    break;
    case "ruler martha":
    case "ruler saint martha":
    urlRef="135";
    break;
    case "sherlock holmes":
    urlRef="173";
    break;
    case "count of monte cristo":
    case "edmond dantes":
    case "dantes":
    case "avenger edmond":
    case "avenger dantes":
    case "avenger edmond dantes":
    case "edmond":
    urlRef="096";
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
    break;
    case "angra mainyu":
    urlRef="107";
    break;
    case "gorgon":
    case "avenger gorgon":
    case "avenger medusa":
    urlRef="147";
    break;
    case "shinjuku avenger":
    case "hessian wolf":
    case "hessian lobo":
    urlRef="158";
    break;
    case "meltryllis":
    urlRef="163";
    break;
    case "passionlip":
    urlRef="164";
    break;
    case "sessyoin kiara":
    urlRef="167";
    break;
    case "mecha eli-chan":
    case "mecha eli chan":
    urlRef="190";
    break;
    case "mecha eli-chan mk.ii":
    case "mecha eli chan mk.ii":
    urlRef="191";
    break;
    case "bb":
    urlRef="166";
    break;
    case "abigail williams":
    urlRef="195";
    break;
    case "katsushika hokusai":
    case "hokusai":
    urlRef="198";
    break;
    case "tiamat":
    case "beast 2":
    case "beast ii":
    urlRef="149";
    break;
    case "semiramis":
    case "queen of assyria":
    case "assassin semiramis":
    urlRef="199";
    break;
    case "asagami fujino":
    case "archer asagami fujino":
    case "archer fujino":
    case "fujino":
    urlRef = "200";
    break;
  }
return urlRef;
}
