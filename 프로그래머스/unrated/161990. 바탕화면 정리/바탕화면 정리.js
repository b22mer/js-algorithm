function solution(wallpaper) {
    //firstX 작아야해, firstY 작아야해,  finishX 커야해, finishY커야해
    let [firstX, firstY, finishX, finishY] =[51,51,-1,-1];
    let maps = wallpaper.map(it =>{
        return it.split("");
    })
    
    
    for(let i =0; i<maps.length; i++){
        
         for(let j =0; j<maps[0].length; j++){
            if(maps[i][j]==='#'){
                if(firstX>=i) firstX= i;
                if(firstY>=j) firstY= j;
                if(finishX<=i) finishX= i+1;
                if(finishY<=j) finishY= j+1;   
            }
             
         }
        
    }
    
    
 return [firstX, firstY, finishX, finishY]
    
    
}