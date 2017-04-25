// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// $(document).ready(function() {

//console.log('hi');


function solution(A, B, M, X, Y) {
    // write your code in JavaScript (Node.js 6.4.0)

    //A is an array (weight)
    //B is an array (floor)
    //M is an integer (floors in building) - need to assume if people are on same floor that counts as one stop
    //X max capacity (# of people = # of A elements
    //Y weight limit (B)
    //must go in order of queue

    var numStops = 0; //count ground floor as a stop

    //number of people waiting
    var totalPeopleWaiting = A.length;

    //an array to track the floors being stopped at
    var arrayFloor = [];

    //count the number of people waiting - this will change as people have been taken to their floors
    var numPeopleRemaining = totalPeopleWaiting;

    // starting values
    var numPeopleThisTrip = 0;
    var weightThisTrip = 0;

    //loop thru the people waiting for the elevator

    for (var i = 0; i < totalPeopleWaiting; i++) {
        //console.log(weightThisTrip);

        console.log("----");
        console.log("starting weight = " + weightThisTrip);
        console.log("starting people this trip = " + numPeopleThisTrip);
        //console.log("starting num people waiting = " + numPeopleRemaining);

        console.log("----");
        //console.log(arrayPeopleWaiting[i][0]);
        if (weightThisTrip + A[i] <= Y && numPeopleThisTrip + 1 <= X) {
            //console.log(numPeopleThisTrip);
            console.log("+++++++");
            weightThisTrip = weightThisTrip + A[i];

            console.log("weight this trip = " + weightThisTrip);
            //loop thru to see if their floor already exists or is a new one; if new, add it
            if (arrayFloor.indexOf(B[i]) === -1) {
                arrayFloor.push(B[i]);
                console.log(arrayFloor);
            }
          //  console.log('person got on');
            numPeopleThisTrip++;
            console.log("num people this trip = " + numPeopleThisTrip);
            console.log("+++++++");

        } else {

            numStops = numStops + arrayFloor.length + 1;
            console.log("numStops = " + numStops);
            console.log("arrayFloor Length = " + arrayFloor.length);
          //  numPeopleRemaining = numPeopleRemaining - numPeopleThisTrip;

            //reset
            weightThisTrip = A[i];
            numPeopleThisTrip = 1;
            arrayFloor = [B[i]];
          //  console.log("new num people waiting = " + numPeopleRemaining);

        }


    }


    //count return to ground floor
    numStops = numStops + arrayFloor.length + 1;
    console.log("---------");
    console.log("num stops = " + numStops);
    return numStops;


}

solution([60, 80, 40], [2, 3, 5], 5, 2, 200);
//solution([40, 40, 100, 80, 20], [3, 3, 2, 2, 3], 3, 5, 200);

//console.log('bye');

// });
