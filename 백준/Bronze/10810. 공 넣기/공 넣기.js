
const fs= require("fs");
const input =fs.readFileSync("/dev/stdin").toString().split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let arr = new Array(N).fill(0);
let sets;
for (let i = 0; i < M; i++) {
  sets = input.shift().split(" ").map(Number);
  for (let j = sets[0] - 1; j < sets[1]; j++) {
    arr[j] = sets[2];
  }
}
console.log(arr.join(" "));
