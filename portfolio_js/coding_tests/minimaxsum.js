Array.prototype.remove = function(index) {
  this.splice(index,1);
}

function solution(array) {

//console.log(array);

  var originalArray = array;
  var N = array.length;
  var sumArray = [];
  var sum;
  //console.log(array);

  for(var i=0; i < N; i++) {

    array.remove(i);
    //console.log(array);
    for(var j=0; j<array.length; j++) {
      console.log(array[j]);
      //console.log(sum);
    }

    //sumArray.push(sum);
    //console.log(array);
    //console.log(sumArray);

    array = originalArray;
  }

return;

}

solution([1,2,3,4,5]);
//console.log(answer);
