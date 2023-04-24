const fs=require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n"); 

[H,W,N,M]= input.shift().split(" ").map(Number);

let garo = W % (1+M) !==0 ? Math.floor(W / (1+M))+1: W / (1+M);
let sero = H % (1+N) !==0 ? Math.floor(H / (1+N))+1:H / (1+N);

console.log(garo*sero);



