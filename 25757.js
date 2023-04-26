const fs=require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n"); 

[N, typeOfGame]= input.shift().split(" ").map(it=> it.trim());

let newArr= new Set([...input.map(it=> it.trim())])
let newLength =newArr.size;

if(typeOfGame==="Y"){
    console.log(Math.floor(newLength));
}else if(typeOfGame ==="F"){
    console.log(Math.floor(newLength/2));
}else if(typeOfGame){
    console.log(Math.floor(newLength/3));
}
