const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n")

const N =Number(input.shift());
const arr = input.shift().split(" ").map(Number).sort((a,b)=> a-b);
const max = Number(input[0]);
let sum = 0;
arr.forEach(it => sum +=it);

if(sum < max){
    console.log(arr[arr.length-1]);
    return;
}


let left = 1; 
let right = arr[arr.length-1]; 
let answer= 0;
while(left<=right){

    let mid = parseInt((left + right) / 2);
    let point =0;
    arr.forEach(it => {
        if(it >mid) point+=mid;
        else point+=it;
    })

    if(point<=max){
        left = mid +1
        answer = mid;
    }else if(point>max){
        right =mid-1;
    }
}

console.log(answer);
