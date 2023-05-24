const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let [N, X] = input.shift().split(" ").map(Number);
// 입력 받은거 맨 앞에 0 추가해주기. (누적합 쓰려구)

const arr = [0, ...input[0].split(" ").map(Number)]
arr.push(...input[0].split(" ").map(Number));

// 누적합
for (let i = 1; i <= N; i++) {
  arr[i] += arr[i - 1];
}

let max = 0;
let cnt = 0;
// X일만큼 최대 블로그 들어온 수 구해주기
for (let i = X; i <= N; i++) {
  let sum = arr[i] - arr[i - X];
  if (sum > max) {
    max = sum;
    cnt = 1;
  } else if (sum === max) {
    cnt++;
  }
}
if (max === 0) {
  console.log("SAD");
} else {
  console.log(max);
  console.log(cnt);
}