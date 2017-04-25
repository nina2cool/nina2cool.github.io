// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)

    var N = A.length;
    //I have not used linked lists before, something for me to work on!

    var b = [];

    // start with the first node at index 0, add to array b
    node = 1;
    if(node === 1) {
      nodeValue = A[0];
      b.push(nodeValue);
      node++;
    }
    while(node < N) {
      nodeValue = A[nodeValue];
      if(nodeValue === -1) {
        b.push(nodeValue);
        //console.log(b);
        return b.length;
      }
      else {
        node++;
        b.push(nodeValue);
      }
    }

    //console.log(b);
    console.log(b.length);
    return b.length;

}


var A = [1, 4, -1, 3, 2];
var answer = solution(A);
console.log(answer);
