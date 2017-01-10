var main = function() {

    var inputText = null;
    $('.warning').text('');

    $('.btn').click(function() {
        event.preventDefault();

        inputText = $('input').val();

        // when you click the button, check if input is valid
        if (inputText.length > 0) {
            $('.warning').text('');
            pigLatin(inputText);
            $('#textArea').text(pigLatin(inputText));
            $('input').val('');
        } else {
            $('.warning').text('Please enter a word or phrase.');
        }
    });

};

// Function to translate into Pig Latin
var pigLatin = function(word) {

    // change to lowercase so capitals don't get in the way
    word = word.toLowerCase();

    var wordArray = word.split(' ');
    var solutionArray = [];

    var wordArrayLength = wordArray.length;

    var vowelIndex = -1; // Set it to assume there are no vowels

    // Loop through the word or phrase to find the vowels
    for (var i = 0; i <= wordArrayLength - 1; i++) {

        var thisWord = wordArray[i];
        var vowelIndex = -1;

        if ((wordArray[i].indexOf('a') > -1 && wordArray[i].indexOf('a') < vowelIndex) || vowelIndex === -1) {
            vowelIndex = wordArray[i].indexOf('a');
        }

        if ((wordArray[i].indexOf('e') > -1 && wordArray[i].indexOf('e') < vowelIndex) || vowelIndex === -1) {
            vowelIndex = wordArray[i].indexOf('e');
        }

        if ((wordArray[i].indexOf('i') > -1 && wordArray[i].indexOf('i') < vowelIndex) || vowelIndex === -1) {
            vowelIndex = wordArray[i].indexOf('i');
        }

        if ((wordArray[i].indexOf('o') > -1 && wordArray[i].indexOf('o') < vowelIndex) || vowelIndex === -1) {
            vowelIndex = wordArray[i].indexOf('o');
        }

        if ((wordArray[i].indexOf('u') > -1 && wordArray[i].indexOf('u') < vowelIndex) || vowelIndex === -1) {
            vowelIndex = wordArray[i].indexOf('u');
        }

        //if the word begins with y, treat it as a consonant and not a vowel
        if (wordArray[i].indexOf('y') != 0) {

            if ((wordArray[i].indexOf('y') > -1 && wordArray[i].indexOf('y') < vowelIndex) || vowelIndex === -1) {
                vowelIndex = wordArray[i].indexOf('y');
            }
        }
        var firstPart = wordArray[i].slice(0, vowelIndex);
        var restWord = wordArray[i].slice(vowelIndex, wordArray[i].length);

        // put the phrase back together as Pig Latin
        if (vowelIndex === 0) {
            solutionArray.push(wordArray[i] + 'yay');
        } else {
            solutionArray.push(restWord + firstPart + 'ay');
        }

    }

    var solutionString = solutionArray.toString();
    var regex = new RegExp(',', 'g');
    solutionString = solutionString.replace(regex, ' ');

    return solutionString;

}

$(document).ready(main);
