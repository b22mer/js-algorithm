const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n")
const n = Number(input.shift())
// console.log(n);
const arr = input.map(it => it.split(" ")).sort((a,b)=> Number(a[1] - Number(b[1])));
// const arr = input.map(it => it.split(""));
let result = arr[0][0];

for(let i =1; i<n; i++){
    result+=" "+arr[i][0];
}


console.log(result);