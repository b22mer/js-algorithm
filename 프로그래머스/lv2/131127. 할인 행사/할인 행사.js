function solution(want, number, discount) {
   
    const obj = {};
    var answer= 0;
    want.forEach((it, idx)=>{
        obj[it] = number[idx];
    })
    
    for(let i = 0; i<discount.length; i++){
          let saleTerm = discount.slice(i, i+10);
        const copyObj= {...obj}
        saleTerm.forEach((it,idx)=>{
            
            if(copyObj[it]>=1){
                copyObj[it]--;
            }
            
            if(copyObj[it]===0){
                delete copyObj[it];
            }
        })
        
        if(Object.keys(copyObj).length===0) answer++
    }
    
    return answer;

    
}