const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr= Array.from({length:N},(v, i)=> i+1);

let sets;
let changeArr;
for(let i = 0; i<M; i++){
    sets = input.shift().split(" ").map(Number);
    changeArr = arr.slice(sets[0]-1, sets[1]);
    changeArr.reverse();
    arr.splice(sets[0]-1, sets[1]-sets[0]+1, ...changeArr)
}

console.log(arr.join(" "));
