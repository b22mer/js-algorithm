function solution(board) {
    
    // 상 하 좌 우 좌상대 우상대 좌하대 우하대
   const pos = [[-1,0],[1,0],[0,-1],  [0,1], [-1,-1], [-1,1], [1,-1], [1,1]];
    
    
    for(let i =0; i<board.length; i++){
        for(let j =0; j<board[0].length; j++){
            if(board[i][j]===0||board[i][j]===2 ) continue;
            if(board[i][j]===1){
                
                pos.forEach((it, idx)=>{
                    
                    let dx = i+it[0];
                    let dy = j+it[1];
                    if(dx<board.length&& dx>=0&& dy<board[0].length&& dy>=0){
                        if(board[dx][dy]===1){
                            
                        }else board[dx][dy]=2;
                    }
                  
                })
                 
            }
        }
    }
    

    
    
    let answer= 0;
        for(let i =0; i<board.length; i++){
        for(let j =0; j<board[0].length; j++){
                if(board[i][j]===0){
                    answer++;
                }
        }
     }
    
    
    return answer;
    
    
    
    
    
    
    
    
    
    
    
}