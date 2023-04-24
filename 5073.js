const fs=require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n"); 

while(true){
    const lengthLine = input.shift().split(" ").map(Number);
    let count = lengthLine.filter(element => 0 === element).length;
    if(count===3) return;
    lengthLine.sort((a,b)=> a-b);
    if(lengthLine[0]+lengthLine[1] <= lengthLine[2]) console.log('Invalid');
    else if(lengthLine[0]===lengthLine[1]&& lengthLine[1]===lengthLine[2]) console.log('Equilateral');
    else if(lengthLine[0]===lengthLine[1]||lengthLine[1]===lengthLine[2]) console.log('Isosceles');
    else console.log('Scalene');
}

 

