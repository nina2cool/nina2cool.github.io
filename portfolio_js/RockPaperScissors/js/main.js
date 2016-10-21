'use strict';

//CONSIDER ADDING: human v computer, best 2 out of 3, keep score, have people give their names before they play

// var assert = require('assert');
// var prompt = require('prompt');
// prompt.start();


var textArea = document.getElementById('textArea');
var player1text = document.getElementById('player1text');
var player2text = document.getElementById('player2text');


textArea.innerHTML = '&nbsp;';
player1text.innerHTML = '&nbsp;';
player2text.innerHTML = '&nbsp;';

var button = document.getElementById('button');

var rock1button = document.getElementById('rock1button');
var paper1button = document.getElementById('paper1button');
var scissors1button = document.getElementById('scissors1button');

var rock2button = document.getElementById('rock2button');
var paper2button = document.getElementById('paper2button');
var scissors2button = document.getElementById('scissors2button');

rock1button.addEventListener('click', function(event) {
    var textInput1 = document.getElementById('textInput1');
    textInput1.value = "rock";
    activatePlayerOne();
});

paper1button.addEventListener('click', function(event) {
    var textInput1 = document.getElementById('textInput1');
    textInput1.value = "paper";
    activatePlayerOne();
});

scissors1button.addEventListener('click', function(event) {
    var textInput1 = document.getElementById('textInput1');
    textInput1.value = "scissors";
    activatePlayerOne();
});

rock2button.addEventListener('click', function(event) {
    var textInput2 = document.getElementById('textInput2');
    textInput2.value = "rock";
    activatePlayerTwo();
});

paper2button.addEventListener('click', function(event) {
    var textInput2 = document.getElementById('textInput2');
    textInput2.value = "paper";
    activatePlayerTwo();
});

scissors2button.addEventListener('click', function(event) {
    var textInput2 = document.getElementById('textInput2');
    textInput2.value = "scissors";
    activatePlayerTwo();
});

function activatePlayerOne() {
    document.getElementById("scissors1button").className = "hidden";
    document.getElementById("rock1button").className = "hidden";
    document.getElementById("paper1button").className = "hidden";
    player1text.innerHTML = "Player 1 has chosen!";
}


function activatePlayerTwo() {
    document.getElementById("scissors2button").className = "hidden";
    document.getElementById("rock2button").className = "hidden";
    document.getElementById("paper2button").className = "hidden";
    player2text.innerHTML = "Player 2 has chosen!";
    document.getElementById("button").className = "btn btn-primary hvr-grow";
}

button.addEventListener('click', function(event) {

    var hand1 = document.getElementById('textInput1').value;
    var hand2 = document.getElementById('textInput2').value;
    var textArea = document.getElementById('textArea');
    event.preventDefault();
    document.getElementById("textArea").className = "animated rollIn";
    textArea.innerHTML = rockPaperScissors(hand1, hand2);

    clear.show();

});

clear.addEventListener('click', function(event) {
    location.reload();
});


function rockPaperScissors(hand1, hand2) {

    //first, going to make sure hand1 and hand2 are both lowercase
    hand1 = hand1.toLowerCase();
    hand2 = hand2.toLowerCase();

    if (hand1 !== 'rock' && hand1 !== 'paper' && hand1 !== 'scissors') {
        return "invalid entry for hand1 - must be either paper, rock, or scissors";
    }

    if (hand2 !== 'rock' && hand2 !== 'paper' && hand2 !== 'scissors') {
        return "invalid entry for hand2 - must be either paper, rock, or scissors";
    }

    if (hand1 === hand2) {
        return "It's a tie!";
    }

    player1text.innerHTML = "Player 1 chose " + hand1;
    player2text.innerHTML = "Player 2 chose " + hand2;
    //document.getElementById("button").className = "btn btn-primary hvr-grow hidden";

    if ((hand1 === 'rock' && hand2 === 'scissors') || (hand1 === 'paper' && hand2 === 'rock') || (hand1 === 'scissors' && hand2 === 'paper')) {

        return "Player 1 wins - " + hand1 + " beats " + hand2;
    } else {
        return "Player 2 wins - " + hand2 + " beats " + hand1;
    }


}
