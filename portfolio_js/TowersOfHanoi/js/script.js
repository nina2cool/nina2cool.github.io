'use strict';

$(document).ready(function() {

    // start with zero turns, zero clicks.  I am going to track the clicks so I know if it is removing a block or adding a block.
    var numberOfTurns = 0;
    var numberOfClicks = 0;
    var $block = null;
    var $currentStack = null;
    var $priorDataBlockValue = null;
    //use this

    $('[data-stack]').click(function() {

        if (checkForWin() != true) {

            var $thisStack = $(this);
            var $thisStackNumber = $(this).data('stack');

            var $thisStackLastChild = $thisStack.children().last();
            var $thisDataBlockValue = $thisStackLastChild.data('block');

            var $thisStackLength = $(this).children().length;

            if ($thisDataBlockValue === undefined) {
                $thisDataBlockValue = 0;
            }

            //if first click, then remove it
            if ($thisStackLength > 0) {

                if (numberOfClicks === 0) {
                    $currentStack = $thisStackNumber;
                    $block = $thisStackLastChild.detach();
                    numberOfClicks++;

                    $priorDataBlockValue = $thisDataBlockValue;
                    return;
                }
            } else {
                $('#announce-error').addClass('announce-error-background');
                $('#announce-error').text('Error - please select a valid stack');
            }


            // if second click, then add it

            if (numberOfClicks === 1) {
                //check if a legal move

                if (($thisDataBlockValue === 0 || $thisDataBlockValue > $priorDataBlockValue)) {

                    $thisStack.append($block);
                    $currentStack = null;
                    numberOfClicks = 0;

                    numberOfTurns++;
                    $('#announce-error').removeClass('announce-error-background');
                    $('#announce-error').text('');
                    $('#announce-number-of-turns').text('Number of Turns: ' + numberOfTurns);
                    checkForWin();
                    return;
                } else {
                    // debugger;
                    numberOfClicks = 1;
                    $('#announce-error').addClass('announce-error-background');
                    $('#announce-error').text('Invalid move - stack block cannot be larger than existing block OR you must select an empty stack OR you selected the same stack');
                }
            }

        } else {
            // process.exit();
        }



    }); // end of clicking the stack

    function checkForWin() {

        var $lengthStackTwo = $('[data-stack="2"]').children().length;
        var $lengthStackThree = $('[data-stack="3"]').children().length;

        if ($lengthStackTwo === 4 || $lengthStackThree === 4) {

            $('#announce-game-won').text('You won!');
            // process.exit();
        }

    }



}); // end of document ready
