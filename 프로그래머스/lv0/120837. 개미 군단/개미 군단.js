function solution(hp) {
    var answer = 0;
    var attackValue = [5, 3, 1];
    var idx =0;
    
    // 장군 5 / 병정 3 / 일개미 1
    
    while(true){
        
        if(hp===0) return answer;
        
        if(hp/attackValue[idx]>=0){
            answer+=Math.floor(hp/attackValue[idx]);
            hp = hp%attackValue[idx];
            idx+=1;
        }else if(hp/attackValue[idx]>=0){
            hp = hp%attackValue[idx];
            idx+=1;
        }
          
    }
    
    
    return answer;
}