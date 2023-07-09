let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

//ax+by=c
//dx+ey=f

let [a, b, c, d, e, f] = [...input.shift().split(" ").map(Number)];

let B = b * d;
let E = e * a;
let C = c * d;
let F = f * a;

let A = a * e;
let D = d * b;
let y = (C - F) / (B - E);
C = c * e;
F = f * b;
let x = (C - F) / (A - D);
console.log(x + " " + y);
// console.log(y);
