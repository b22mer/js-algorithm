const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N,M]= input.shift().split(" ").map(Number);
const position = input.shift().split(" ").map(Number);
let [x, y, dir] =[...position];

const board = input.map(it => it.split(" ").map(Number));
board[x][y]= -1;
let check=0;
while(true){


  //북
  if(dir===0 && board[x][y-1]===0){
    y = y-1;
    dir=3
    board[x][y]=-1;
    check=0;
  //동
  }else if(dir===1 && board[x-1][y]===0){
    x = x-1;
    dir=0;
    board[x][y]=-1;
    check=0;
  //남
  }else if(dir===2 && board[x][y+1]===0){
    y = y+1;
    dir=1;
    board[x][y]=-1;
    check=0;
  //서
  }else if(dir===3 && board[x+1][y]===0){
    x = x+1;
    dir=2;
    board[x][y]=-1;

    check=0;
  }else{
    if(check === 4){
      if(dir===0){
        if(board[x+1][y]===1){
          break;
        }else{
          x= x+1
          board[x][y]=-1;
          check=0;
        }
        //동남서
      }else if(dir===1){
        if(board[x][y-1]===1){
          break;
        }else{
          y= y-1;
          board[x][y]=-1;
          check=0;
        }
      }else if(dir===2){
        if(board[x-1][y]===1){
          break;
        }else{
          x= x-1
          board[x][y]=-1;
          check=0;
        }
      }else if(dir===3){
        if(board[x][y+1]===1){
          break;
        }else{
          y= y+1
          board[x][y]=-1;
          check=0;
        }
      }
    }
    dir= dir-1 >=0 ? dir-1: 3;
    check++;
  }
}



let result=0;
board.forEach(it=> it.forEach(it=> {
  if(it===-1) result++;
}))

console.log(result);