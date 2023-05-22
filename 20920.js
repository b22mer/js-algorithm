const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n")

const [N, M] = input.shift().split(" ").map(Number);


let arr = [];
const frequencies = new Map();

for (let i = 0; i < input.length; i++) {
  const word = input[i].trim();
  if (word.length >= M) {
    arr.push(word);
    frequencies.set(word, (frequencies.get(word) || 0) + 1);
  }
}

arr.sort((a,b)=> {
    let A = frequencies.get(a);
    let B = frequencies.get(b)

    if(A===B){
        if(a.length == b.length){
            return a.localeCompare(b);
        }
    
        return b.length - a.length;
    
    }
    return B- A;
})


let result = [...new Set([...arr])];

// 출력 형식을 바꾸니 결국됐다. 하..
console.log(result.join('\n'));
// result.forEach(it => console.log(it));

