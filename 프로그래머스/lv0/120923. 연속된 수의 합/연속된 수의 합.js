function solution(num, total) {
    
    

    
    let cnt =0;
    let chk = total+num;

    while(true){
        
        let cal =0;
        let result = []
        for(let j =0 ; j<num; j++){
            result.push(chk - j);
            cal+= chk - j;
        }
        
        if(cal === total) return result.sort((a, b)=> a-b);
        chk--;
    }
}