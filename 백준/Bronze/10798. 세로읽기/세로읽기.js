const fs=require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
let newArr = input.map(it=> it.replace(/\r/g, "").split(""));
let result= "";
// console.log(newArr);
let maxLeng=-1;
newArr.forEach(it=> it.length>maxLeng? maxLeng=it.length: maxLeng);

    for(let j =0; j<maxLeng; j++){
        for(let i =0; i<newArr.length; i++){
            newArr[i][j]===undefined|| newArr[i][j]===null ? result+="":result+=newArr[i][j];
         }
    }

console.log(result);
