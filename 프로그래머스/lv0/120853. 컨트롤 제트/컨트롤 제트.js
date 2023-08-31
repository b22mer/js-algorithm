function solution(s) {
    var answer = 0;
    
    
    s = s.split(" ");
    s.forEach((it, idx)=>{
        if(it ==="Z"){
            answer-=parseInt(s[idx-1]);
        }else{
            answer+=parseInt(it);
        }
        
    })
    
    
    
    return answer;
}