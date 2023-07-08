const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

let arr = [];
input.forEach(it => arr=[...arr,...it.split(" ").map(Number)]);
let maxValue = Math.max(...arr);
let idx = arr.indexOf(maxValue)+1;
let row = idx%9 === 0 ? parseInt(idx/9): parseInt(idx/9)+1;
let col = idx%9 === 0 ? 9 : idx%9;
console.log(maxValue);
console.log(row, col);
