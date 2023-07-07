const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const fs= require("fs");
// const input =fs.readFileSync("/dev/stdin").toString().split("\n");

let [N, M] = input.shift().split(" ").map(Number);

let arrA = [];
let arrB = [];
let resultArr = new Array(N).fill(0).map(() => new Array(M));

// console.log(resultArr);
for (let i = 0; i < 2; i++) {
  if (i == 0) {
    for (let j = 0; j < N; j++) {
      arrA.push(input.shift().split(" ").map(Number));
    }
  } else {
    for (let j = 0; j < N; j++) {
      arrB.push(input.shift().split(" ").map(Number));
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    resultArr[i][j] = arrA[i][j] + arrB[i][j];
  }
}

resultArr.forEach((it) => console.log(it.join(" ")));
// console.log(resultArr);
