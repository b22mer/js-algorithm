const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fixedArr= input.map(Number);
const newArr = Array.from({length:30}, (v,i)=> i+1);
const resultArr= newArr.filter(it => !fixedArr.includes(it));
resultArr.forEach(it => console.log(it))
