const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
[N, M]= input.shift().split(" ").map(Number);
const dx = [-1, 1,0,0];
const dy = [0,0,-1,1];

const board = input.map(it => it.trim().split("").map(Number));

const bfs = (x,y)=>{
    let queue = [[x,y]]
    while(queue.length!==0){
        let position = queue.shift();
        let nx = position[0];
        let ny = position[1];
        for(let i = 0; i<4; i++){

            let rx = nx + dx[i];
            let ry = ny + dy[i];

            if(rx<0 || rx>=N || ry<0 || ry>=M) continue;
            if(board[rx][ry]===0) continue;
            if(board[rx][ry]===1){
                board[rx][ry]= board[nx][ny]+1;
                queue.push([rx,ry]);
            }
        }
    }
    return board[N-1][M-1];
}

console.log(bfs(0,0));