const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n")

const [N, M]= input.shift().split(" ").map(Number);
let arr = [];
for(cnt of input){
    arr.push(Math.min(...cnt.split(" ").map(Number)));
}
let result = Math.max(...arr);
console.log(result);

