const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n")
const n = Number(input.shift());
const sortedList = input.map(it => parseInt(it)).sort((a,b)=> b-a);
console.log(sortedList);