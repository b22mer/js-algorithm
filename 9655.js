const fs=require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n"); 

const number=parseInt(input.shift())

console.log(number%2===1? "SK":"CY");






