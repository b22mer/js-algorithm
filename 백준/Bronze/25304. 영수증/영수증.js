const fs= require("fs");
const input =fs.readFileSync("/dev/stdin").toString().split("\n");

let total = parseInt(input.shift());
let category = parseInt(input.shift());
let result = 0;
let arr;
for (let i = 0; i < category; i++) {
  arr = input[i].split(" ").map(Number);
  result += arr[0] * arr[1];
}

if (result === total) console.log("Yes");
else console.log("No");
