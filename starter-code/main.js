console.log("JS file is connected to HTML! Woo!")

/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";*/


/*
if (cardTwo === cardFour) {
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
}


var gameBoard = document.getElementById('game-board');

var createCards = function(num) {
	for (var i = 1; i <= num; i++) {
		var card = document.createElement('div');
		card.className = 'card';
		gameBoard.appendChild(card);
	}
};
createCards(4);
*/

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		gameBoard.appendChild(cardElement);
	}
};

var isMatch = function(cards) {
	if (cards[0] === cards[1]) {
		alert ("You found a match!");
	} else {
		alert ('Sorry, try again.');
	}
	resetImage(cards);
};

var isTwoCards = function() {
  cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='images/diamonds-884195_1280.png'>";
	} else {
		this.innerHTML = "<img src='images/clubs-884198_1280.png'>";
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
	
};	

var resetImage = function(cards) {
	for (var i = 0; i < cards.length; i++) {
		cards[i].innerHTML = "<p><p/>";
	}
}

createBoard();

