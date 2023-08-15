const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let maps = input.map((it) => it.split(""));
var resultB = 0;
var resultW = 0;
var cntB = 0;
var cntW = 0;
var color;
const dfs = (x, y) => {
  if (x <= -1 || y <= -1 || x >= M || y >= N) {
    return;
  }

  if (maps[x][y] === color) {
    if (maps[x][y] === "B") cntB++;
    else if (maps[x][y] === "W") cntW++;
    maps[x][y] = "O";
    dfs(x + 1, y);
    dfs(x, y + 1);
    dfs(x - 1, y);
    dfs(x, y - 1);
  }
};

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (maps[i][j] === "O") continue;
    color = maps[i][j];
    dfs(i, j);
    resultB += cntB * cntB;
    resultW += cntW * cntW;
    cntB = 0;
    cntW = 0;
  }
}

console.log(resultW + " " + resultB);
