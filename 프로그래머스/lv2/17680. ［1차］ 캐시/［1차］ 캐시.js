function solution(cacheSize, cities) {
    var answer = 0;
    var caches= [];
    
    cities.forEach((it, idx)=>{
        
        if(caches.length<cacheSize){
            
            if(caches.includes(it.toLowerCase())){
                const value=caches.indexOf(it.toLowerCase());
                caches.splice(value,1);
                caches.push(it.toLowerCase());
                answer++;
            }else{
                    caches.push(it.toLowerCase());
                    answer+=5;
            }
            
        }else if(cacheSize>0){
            
            if(caches.includes(it.toLowerCase())){
                const value=caches.indexOf(it.toLowerCase());
                caches.splice(value,1);
                caches.push(it.toLowerCase());
                answer++;
            }else{
                caches.shift();
                caches.push(it.toLowerCase());
                answer+=5;
            }
            
        }else if(cacheSize===0){
            answer+=5;
        }
    })
    

    
    
    
    
    return answer;
    

}