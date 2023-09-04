function solution(keyinput, board) {
 
    let result = [0, 0]
    let pos =0;
    let garoLimit = Math.floor(board[0]/2)
    let seroLimit = Math.floor(board[1]/2)
    keyinput.forEach((it, idx)=>{
        
        switch(it){
                
            case "left":
               pos=result[0]-1
               if(-garoLimit<=pos){
                   result[0]=pos;
               }
                break;
            case "right":
                 pos= result[0]+1
                if(garoLimit>=pos){
                   result[0]=pos;
                }
                break;
            case "up":
                 pos= result[1]+1
                 if(seroLimit>=pos){
                   result[1]=pos;
                }
                break;
            case "down":
                 pos= result[1]-1
             if(-seroLimit<=pos){
                   result[1]=pos;
                }
                break;   
        }
        
    })
    
    
    return result;
    
    
}