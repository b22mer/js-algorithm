const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

let str = input.shift();
let bigyo = str.split("").reverse().join("");
str === bigyo ? console.log(1): console.log(0);