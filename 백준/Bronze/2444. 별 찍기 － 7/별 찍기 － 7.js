const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let cnt = parseInt(input[0]);

// 상부 
let space="";
let star="*";
let lastStar;
for(let i =0; i<cnt; i++){
    
    for(let j = 0; j<cnt-(i+1); j++){
        space+=" ";
    }
    console.log(space+star);
    space="";
    lastStar=star;
    star+="**";
}
space="";
//하부
for(let i =0; i<cnt-1; i++){
    
    for(let j = 0; j<i+1; j++){
        space+=" ";
    }
    lastStar = lastStar.slice(2);
    console.log(space+lastStar);
    space="";
}

