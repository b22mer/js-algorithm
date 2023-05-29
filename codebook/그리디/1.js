const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n")

let [N, K] = input[0].split(" ").map(Number);
let result = 0;
while(N!==1){
    if(N % K !==0) N = N-1;
    else N = N / K;
    result++;
}

console.log(result);