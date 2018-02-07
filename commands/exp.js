exports.run = (client, message, args) => {

var expData;
var startInput, endInput, calcButton, expText;
var class4, class3, class2, class1;
var nonclass4, nonclass3, nonclass2, nonclass1;
var expPerCard = [1000, 3000, 9000, 27000];
var expPerCardBonus = [1200, 3600, 10800, 32400];
var finishedLoad = false;
$(document).ready(function() {
	startInput = document.getElementById("start-lvl");
	endInput = document.getElementById("target-lvl");
    calcButton = document.getElementById("calcButton");
    expText = document.getElementById("exp-needed");
      $.getJSON('/sites/grandorder/data/exp.json',
            function(data) {
                expData = data;
            	finishedLoad = true;
                checkValid();
            });
    });

function calculate(){
	var startLevel = parseInt(startInput.value);
	var endLevel = parseInt(endInput.value);
	console.log(startLevel);
	console.log(endLevel);
	var expNeeded = 0;
	var startExp = expData[startLevel-1].total;
	var endExp = expData[endLevel-1].total;
	expNeeded = endExp - startExp;


	for(var i = 0; i < 4; i++){
		//html id #
		var idx = i+1;
		var perCard = expPerCard[i];
		var perCardBonus = expPerCardBonus[i];

		var numNeeded = Math.ceil(expNeeded/perCard);
		numNeeded = numberWithCommas(numNeeded);
		var numNeededBonus = Math.ceil(expNeeded/perCardBonus);
		numNeededBonus = numberWithCommas(numNeededBonus);

		var numCards = document.getElementById("nonclass" + idx);
		var numCardsBonus = document.getElementById("class" + idx);

		numCards.innerHTML = numNeeded;
		numCardsBonus.innerHTML = numNeededBonus;
	}
	expNeeded = numberWithCommas(expNeeded);
	expText.innerHTML = expNeeded;
}

function checkValid(){
	var startLevel = parseInt(startInput.value);
	var endLevel = parseInt(endInput.value);
	if(startLevel && startLevel > 0 && endLevel && endLevel <= 100 && startLevel < endLevel && finishedLoad){
		calcButton.disabled = false;
	}
	else{
		calcButton.disabled = true;
	}
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

}
