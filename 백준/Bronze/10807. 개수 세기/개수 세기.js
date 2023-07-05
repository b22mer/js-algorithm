
const fs= require("fs");
const input =fs.readFileSync("/dev/stdin").toString().split("\n");

let leng = parseInt(input.shift());
let arr = input.shift().split(" ").map(Number);
let target = parseInt(input.shift());

arr = arr.filter((it) => it === target);
console.log(arr.length);
