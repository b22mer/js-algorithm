function solution(n, m, section) {
    const arr = Array.from({length:n},(it, idx)=> 1);
    section.forEach(it=>arr[it-1]=0);
    let idx = 0;
    let result =0;
    while(true){
        
         if(idx>=arr.length){
             break;
         }
        
        if(arr[idx]===1) idx+=1;
        if(arr[idx]===0){
            idx=idx+m;
            result++;
            // if(idx>=arr.length) break;
        }
        
        
    }
    return result
    
}