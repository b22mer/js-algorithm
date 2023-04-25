const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let N = parseInt(input.shift());

for (let i = 0; i < N; i++) {

    let newArr = input.shift().split(" ").map(Number);
    let arrNum = newArr.shift();
    let cnt = 0;
    while (true) {
        let chk = true;
        for (let j = 0; j < newArr.length; j++) {
            let point = newArr[j];
            for (let k = 0; k < j; k++) {
                if (point < newArr[k]) {
                    const changeItem = newArr.splice(j, 1)[0];
                    newArr.splice(k, 0, changeItem);
                    cnt+=20-k-(20-j);
                    chk = false;
                    break;
                }
            }

            if (chk === false) {
                break;
            }
        }
        if(chk) break;
    }
    console.log(arrNum,cnt);
}
