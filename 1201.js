let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let [N, score, P] = input.shift().split(" ").map(Number);

if (input.length === 0) {
  var scoreList = [];
} else {
  var scoreList = input.shift().split(" ").map(Number);
}

if (N == P && score <= scoreList.sort((a, b) => a - b)[0]) {
  console.log(-1);
  return;
}

scoreList.push(score);
const answer = new Array(scoreList.length).fill(1);

for (let i = 0; i < N + 1; i++) {
  for (let j = 0; j < N + 1; j++) {
    if (scoreList[i] < scoreList[j]) {
      answer[i]++;
    }
  }
}

console.log(answer[N]);
