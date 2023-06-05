const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const dx = [-1, 1,0,0];
const dy = [0,0,-1,1];
let board= input.map(it=> it.trim().split(""));

const dfs = (x,y)=>{
    if(x<0 || x>=board.length || y<0 || y>=board[0].length) return;
    if(board[x][y]!=='0') return;
    board[x][y]="1";
    
    for(let i =0; i<4; i++){
        let nx = x + dx[i];
        let ny = y + dy[i];
        dfs(nx, ny);
    }
}

let result=0;
for(let i =0; i<board.length; i++){
    for(let j =0; j<board[0].length; j++){
        if(board[i][j]==="1") continue;
        dfs(i,j);
        result++;
    }
}
console.log(result);