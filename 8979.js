const fs=require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n"); 

[N, countryNum] = input.shift().split(" ").map(Number);

const countryMap = new Map();

for(let i = 0 ; i<N; i++){
    let country = input.shift().split(" ").map(Number);
    countryMap.set(country.shift(), country);
}



let rank=1;
for(let i=1; i<=countryNum; i++) {
    if(countryMap.get(i)[0] >countryMap.get(countryNum)[0]) {
        rank++;
    }
    else if(countryMap.get(i)[0] ===countryMap.get(countryNum)[0] &&countryMap.get(i)[1] > countryMap.get(countryNum)[1]) {
        rank++;
    }
    else if(countryMap.get(i)[0] ===countryMap.get(countryNum)[0] && countryMap.get(i)[1] === countryMap.get(countryNum)[1] && countryMap.get(i)[2] > countryMap.get(countryNum)[2]) {
        rank++;
    }
}

console.log(rank);