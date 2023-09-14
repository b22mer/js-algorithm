const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [T, k] = input.shift().split(" ").map(Number);
const table = input.shift().split("");
let idx = 0;
let finLen = table.length;
let result = 0;
while (idx !== finLen) {
  if (table[idx] === "H") {
    for (let i = 1; i <= k; i++) {
      if (table[idx + i] === "P") {
        table[idx + i] = "X";
        result++;
        break;
      }
    }
  } else if (table[idx] === "P") {
    for (let i = 1; i <= k; i++) {
      if (table[idx + i] === "H") {
        table[idx + i] = "X";
        result++;
        break;
      }
    }
  }

  idx += 1;
}

console.log(result);
