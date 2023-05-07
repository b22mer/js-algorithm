let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let N = Number(input.shift());
let M = Number(input.shift());
let positionList = input.shift().split(" ").map(Number);

let height = 1;

while (true) {
  let list = [];

  if (
    positionList[0] - height > 0 ||
    positionList[positionList.length - 1] + height < N
  ) {
    height++;
    continue;
  }

  let chk = true;
  for (let i = 0; i < positionList.length - 1; i++) {
    if (positionList[i] + height < positionList[i + 1] - height) {
      chk = false;
      break;
    }
  }

  if (!chk) {
    height++;
    continue;
  } else {
    console.log(height);
    return;
  }
}
