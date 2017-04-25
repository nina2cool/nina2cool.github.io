function Triplet(A, B) {

    var scoreA = 0;
    var scoreB = 0;

    for (var i = 0; i < A.length; i++) {
        if (A[i] > B[i]) {
            scoreA++;
        } else if (A[i] < B[i]) {
            scoreB++;
        }
    }

    //console.log(scoreA);
    //console.log(scoreB);
    return scoreA + " " + scoreB;

}

var TripletAnswer = Triplet([5, 6, 7], [3, 6, 10]);
console.log(TripletAnswer);






function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);

    let scoreOne = 0;
    let scoreTwo = 0;

    function compareAnswers(a,b) {

        a > b ? scoreOne++ : b > a ? scoreTwo++ : null;
    }

    a0_temp.map(function(item,index) {
        a = eval('a' + index);
        b = eval('b' + index);
        compareAnswers(a, b)
    })

    console.log(scoreOne, scoreTwo)

}




for(i=0;i<3;i++)
    {
        a0_temp[i] = parseInt(a0_temp[i]);
        b0_temp[i] = parseInt(b0_temp[i]);

        if(a0_temp[i] > b0_temp[i])
        {
          Alice = Alice + 1;
        }

       else if (a0_temp[i] < b0_temp[i])
        {
           Bob = Bob +1;
         }
        else
        {
           Alice=Alice;
           Bob=Bob;
            }
}

    console.log(Alice+" "+Bob);

}
