
const fs= require("fs");
const input =fs.readFileSync("/dev/stdin").toString().split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let arr = Array.from({ length: N }, (v, i) => i + 1);
let sets;
for (let i = 0; i < M; i++) {
  sets = input.shift().split(" ").map(Number);
  [arr[sets[0] - 1], arr[sets[1] - 1]] = [arr[sets[1] - 1], arr[sets[0] - 1]];
}

console.log(arr.join(" "));
