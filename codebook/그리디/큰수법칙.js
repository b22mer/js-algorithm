const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n")

const [N,M,K]= input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number).sort((a,b)=> a - b);

const max= arr[arr.length-1];
const maxSec= arr[arr.length-2];

let cnt = Math.floor(M/(K+1));
let remain = M%(K+1);

let oneOfset = (max * K + maxSec) * cnt;
let remainOfset = max * remain;

let result = oneOfset + remainOfset;

console.log(result);