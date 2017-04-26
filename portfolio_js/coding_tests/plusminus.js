function plusminus(n, array) {

    var numPositive = 0;
    var numNegative = 0;
    var numZero = 0;

    for (var i = 0; i < n; i++) {

        if (array[i] > 0) {
            numPositive++;
        } else if (array[i] < 0) {
            numNegative++;
        } else {
            numZero++;
        }
    }

    var percentPositive = numPositive / n;
    var percentNegative = numNegative / n;
    var percentZero = numZero / n;

    console.log(percentPositive.toFixed(6));
    console.log(percentNegative.toFixed(6));
    console.log(percentZero.toFixed(6));

}

var answer = plusminus(6, [-4, 3, -9, 0, 4, 1]);
console.log(answer);
