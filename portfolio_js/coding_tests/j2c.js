function cmp(a, b) {
    return a - b;
}

function solution(A, B) {
    var n = A.length;
    var m = B.length;
    A.sort(cmp);
    B.sort(cmp);

    console.log(A.sort(cmp));
    console.log(B.sort(cmp));
    var i = 0;

    for (var k = 0; k < n; k++) {
        while (i < m - 1 && B[i] < A[k])
            i += 1;
        if (A[k] == B[i])
            return A[k];
    }
    return -1;
}

var A = [1,3,2,1];
//var A = [5,7,1,3];
var B = [4,2,5,3,2];
//var B = [1,0,4,7,0];


var answer = solution(A, B);
console.log(answer);
