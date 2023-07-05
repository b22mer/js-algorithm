//const fs = require("fs");
//const input = fs.readFileSync("./input.txt").toString().split("\n");
const fs= require("fs");
const input =fs.readFileSync("/dev/stdin").toString().split("\n");

let [A, B, C] = input.shift().split(" ").map(Number);

let result = A + B + C;
console.log(result);
