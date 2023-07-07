const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const fs= require("fs");
// const input =fs.readFileSync("/dev/stdin").toString().split("\n");
let scoreList = input.map((it) => it.split(" "));
// console.log(scoreList);

let total = 0;
let totalScore = 0;

for (let i = 0; i < scoreList.length; i++) {
  if (scoreList[i][2] === "P" || scoreList[i][2] === "P\r") {
    continue;
  } else if (scoreList[i][2] === "A+" || scoreList[i][2] === "A+\r") {
    total += parseInt(scoreList[i][1]);
    totalScore += 4.5 * parseInt(scoreList[i][1]);
  } else if (scoreList[i][2] === "A0" || scoreList[i][2] === "A0\r") {
    total += parseInt(scoreList[i][1]);
    totalScore += 4.0 * parseInt(scoreList[i][1]);
  } else if (scoreList[i][2] === "B+" || scoreList[i][2] === "B+\r") {
    total += parseInt(scoreList[i][1]);
    totalScore += 3.5 * parseInt(scoreList[i][1]);
  } else if (scoreList[i][2] === "B0" || scoreList[i][2] === "B0\r") {
    total += parseInt(scoreList[i][1]);
    totalScore += 3.0 * parseInt(scoreList[i][1]);
  } else if (scoreList[i][2] === "C+" || scoreList[i][2] === "C+\r") {
    total += parseInt(scoreList[i][1]);
    totalScore += 2.5 * parseInt(scoreList[i][1]);
  } else if (scoreList[i][2] === "C0" || scoreList[i][2] === "C0\r") {
    total += parseInt(scoreList[i][1]);
    totalScore += 2.0 * parseInt(scoreList[i][1]);
  } else if (scoreList[i][2] === "D+" || scoreList[i][2] === "D+\r") {
    total += parseInt(scoreList[i][1]);
    totalScore += 1.5 * parseInt(scoreList[i][1]);
  } else if (scoreList[i][2] === "D0" || scoreList[i][2] === "D0\r") {
    total += parseInt(scoreList[i][1]);
    totalScore += 1.0 * parseInt(scoreList[i][1]);
  } else if (scoreList[i][2] === "F" || scoreList[i][2] === "F\r") {
    total += parseInt(scoreList[i][1]);
  }
}

console.log((totalScore / total).toFixed(6));
