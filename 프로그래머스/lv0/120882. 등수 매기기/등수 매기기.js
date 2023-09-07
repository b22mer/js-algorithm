function solution(score) {
    let rank = Array.from({length: score.length},(it)=> 0);
    score = score.map((it, idx)=>{
        return (it[0]+it[1])/2;
    })
    let len = score.length;
    
    for(let i =0; i<len; i++){
        let sc = score.shift();
        let cnt = 0;
        for(let j=0; j<score.length; j++){
            if(sc>=score[j]) cnt++;
        }
        rank[i]= len-cnt;
        score.push(sc);
        
    }
    
    return rank;
    
}
    
