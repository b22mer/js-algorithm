
const fs= require("fs");
const input =fs.readFileSync("/dev/stdin").toString().split("\n");

let cnt = parseInt(input[0]);
let chk = cnt / 4;
let result = "int";
for (let i = 0; i < chk; i++) {
  result = "long " + result;
}
console.log(result);
