function sum(arr) {

  let sum = 0;
  var n = arr.length;

  for(var i=0; i < n; i++) {
    sum = sum + arr[i];
  }

  //console.log(sum);
  return sum;
}

array = [1000000001,1000000002,1000000003,1000000004,1000000005]

var answer = sum(array);
console.log(answer);
