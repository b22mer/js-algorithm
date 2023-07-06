const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n")

const cnt = parseInt(input.shift());

for(let i = 0 ; i< cnt ; i++){
    let newChar = input[i].replace(/\r/g, '');
    console.log(input[i].charAt(0)+ newChar.charAt(newChar.length-1)); 
}

