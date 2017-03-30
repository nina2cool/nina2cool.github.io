$(document).ready(function() {


    // step 1 - set parameters
    var board = [];
    var hint = [];
    var solution = '';
    var setSolutionLength = 4; // this is the number of characters for the solution
    var letters = ['a', 'b', 'c', 'd'];
    var solutionLength = solution.length;
    var allGuessesArray = [];

    var numberOfGuesses = 0;

    // step 2 - generate a solution

    function generateSolution() {

        // first check if a solution already exists in local storage - if not, then create a solution.  if it does, do not create a new one. Probably should encrypt the solution (advanced).
        if (localStorage.getItem('solution')) {
            //console.log('do not create a new solution');
        } else {

            for (var i = 0; i < 4; i++) {
                var randomIndex = getRandomInt(0, letters.length);
                solution += letters[randomIndex]; //same an concatenating strings, assumes empty starting string
            }
            //store in local storage
            localStorage.setItem('solution', solution);

        }
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    generateSolution();

    // step 3 - accept a guess from the user

    // is the guess valid?
    $('.btn').click(function() {
        event.preventDefault();

        var inputText = $('input').val();
        console.log('your input is ' + inputText);

        allGuessesArray.push(inputText);
        console.log(allGuessesArray);

        var guessArray = inputText.split('');
        console.log(guessArray);

        //check that letters are valid

        if (guessArray.length > setSolutionLength) {
            console.log('your guess can only be ' + setSolutionLength + ' letters long - please try again');
        } else {

            Array.prototype.diff = function(letters) {
                var ret = [];
                for (var i in this) {
                    if (letters.indexOf(this[i]) > -1) {
                        ret.push(this[i]);
                    }
                }
                return ret;
            };

            var lengthNewArray = guessArray.diff(letters).length;
            console.log(lengthNewArray);
            // console.log(guessArray.diff(letters));

            if (lengthNewArray < setSolutionLength) {
                console.log('invalid input');
            }

            else {

              //valid input so carry on
              console.log('valid input');


              //1 - first check to see if any letters also match the exact position of the solution
              //2 - then check to see if any letters of the guess are in the solution
              //var guessArray = guess.split('');
              var solutionArray = localStorage.getItem('solution').split('');
              console.log(solutionArray);

              //1 - first check to see if any letters also match the exact position of the solution
              //2 - then check to see if any letters of the guess are in the solution
              var guessLength = guessArray.length;
              var solutionLength = solutionArray.length;
              var correctLetterLocations = 0;


              for (var i = 0; i <= (solutionLength - 1); i++) {

                  if (guessArray[i] === solutionArray[i]) {
                      correctLetterLocations++;
                      guessArray[i] = null;
                      solutionArray[i] = null;
                  }

              }


              var correctLetters = 0;

              //now check remaining letters to look for similar values
              for (var j = 0; j <= (guessLength - 1); j++) {

                  var letterIndex = solutionArray.indexOf(guessArray[j]);

                  if (letterIndex > -1) {
                      correctLetters++;
                  }

              }

              //we don't want to double count the correct letter positions, so we subtract that number out
              correctLetters = correctLetters - correctLetterLocations;

              //commenting out the colors since it was making my tests not pass.
              //hint = colors.red(correctLetterLocations) + '-' + colors.white(correctLetters);

              hint = correctLetterLocations + '-' + correctLetters;

              console.log(hint);

              


            }



        }


    })




    function printBoard() {
        for (var i = 0; i < board.length; i++) {
            console.log(board[i]);
        }
        return board;
    }

    function printNumberOfGuesses() {
        console.log('# of Guesses: ' + numberOfGuesses + ' out of 10');
    }


    function generateHint(guess, solution) {

        console.log('solution is ' + solution);

        var guessArray = guess.split('');
        var solutionArray = solution.split('');

        //1 - first check to see if any letters also match the exact position of the solution
        //2 - then check to see if any letters of the guess are in the solution
        var guessLength = guessArray.length;
        var solutionLength = solutionArray.length;
        var correctLetterLocations = 0;

        for (var i = 0; i <= (solutionLength - 1); i++) {

            if (guessArray[i] === solutionArray[i]) {
                correctLetterLocations++;
                guessArray[i] = null;
                solutionArray[i] = null;
            }

        }

        var correctLetters = 0;

        //now check remaining letters to look for similar values
        for (var j = 0; j <= (guessLength - 1); j++) {

            var letterIndex = solutionArray.indexOf(guessArray[j]);

            if (letterIndex > -1) {
                correctLetters++;
            }

        }

        //we don't want to double count the correct letter positions, so we subtract that number out
        correctLetters = correctLetters - correctLetterLocations;

        //commenting out the colors since it was making my tests not pass.
        //hint = colors.red(correctLetterLocations) + '-' + colors.white(correctLetters);

        hint = correctLetterLocations + '-' + correctLetters;

        return hint;

    }


    function mastermind(guess) {

        //first check to see if they guessed correctly; if so, then they win!
        //if they did not guess it correctly, then you need to generate a hint

        //advance the number of guesses by 1
        numberOfGuesses++;

        printNumberOfGuesses();

        if (numberOfGuesses < 10) {

            if (guess === solution) {

                //I had fancier code here to customize the response if they guessed in 1 try - but returning anything other than "You guessed it!" means it wouldn't pass the test.  So I am not using this code right now.
                if (numberOfGuesses === 1) {
                    return 'You guessed it!';
                    //console.log('You won in ' + numberOfGuesses + ' guess!  Amazing - you must be a mind reader!');
                    process.exit();
                } else {
                    return 'You guessed it!';
                    //console.log('You won in ' + numberOfGuesses + ' guesses!  Good job!');
                    process.exit();
                }
            } else {
                //carry on with game
                //compare to see what is the same
                generateHint(guess, solution);
                console.log('Guess again.');
                return board.push(guess + ' ' + hint);
            }
        } else {
            return 'You ran out of turns! The solution was ' + solution;
            process.exit();
        }

    }


    function getPrompt() {

        prompt.get(['guess'], function(error, result) {

            var guess = result['guess'];
            var guessLength = guess.length;

            if (guessLength === 4) {
                mastermind(guess);
                printBoard();
                getPrompt();
            } else {
                console.log('Your guess must be only 4 characters!');
                getPrompt();
            }

        });
    }


});
