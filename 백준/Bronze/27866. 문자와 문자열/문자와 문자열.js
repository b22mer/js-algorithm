const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let str = input.shift();
let position = parseInt(input.shift());
console.log(str.charAt(position-1));