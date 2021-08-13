// atlasapihelper.js
// Functions that might be useful when calling api data from Atlas Academy
// ========
const fetch = require('node-fetch');

//Map of servant classes, to check if the last argument is a class
const servantClasses = new Map();
servantClasses.set('shielder', 1);
servantClasses.set('saber', 2);
servantClasses.set('archer', 3);
servantClasses.set('lancer', 4);
servantClasses.set('rider', 5);
servantClasses.set('caster', 6);
servantClasses.set('assassin', 7);
servantClasses.set('berserker', 8);
servantClasses.set('ruler', 9);
servantClasses.set('avenger', 10);
servantClasses.set('mooncancer', 11);
servantClasses.set('alterego', 12);
servantClasses.set('foreigner', 13);
servantClasses.set('pretender', 14);
servantClasses.set('beast', 15);

module.exports = {
	// Given an array of strings, check if there is a servant argument at the end
	getServantArgument: function (args) {
		if ( args.length > 0 && servantClasses.has(args[args.length - 1].toLowerCase()) ) {
			console.log(`Found class argument: ${args[args.length - 1]}`);
			return args[args.length - 1].toLowerCase();
		}
		else {
			return null;
		}
	},
  	example: function () {
    	// memes
  	}
};