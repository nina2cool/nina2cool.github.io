function staircase(n) {


    for (var i = 1; i <= n; i++) {

        var stair = [];
        var space = [];


        for (var j = n - 1; j >= 0; j--) {

            space = Array(j + 1).join(" ") + Array(n - j + 1).join("#");
            console.log(space);
        }
        return;
        //stair = space + Array(n + 1).join("#");
    }



}

var answer = staircase(6);
console.log(answer);
