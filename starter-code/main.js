console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*if (cardTwo === cardFour) {
	alert ("Sorry, try again.")
} else if (cardTwo === cardThree) {
	alert ("Sorry, try again.")
} else if (cardTwo === cardOne) {
	alert ("You found a match!")
} else if (cardOne === cardFour) {
	alert ("Sorry, try again.")
} else if (cardOne === cardThree) {
	alert ("Sorry, try again.")
} else {
	alert ("You found a match!")
}*/

var gameBoard = document.getElementById('game-board');

var createCards = function(num) {
	for (var i = 1; i <= num; i++) {
		var card = document.createElement('div');
		card.className = 'card';
		gameBoard.appendChild(card);
	}
};
createCards(4);
