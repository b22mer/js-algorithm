function solution(elements) {
    var answer = [];
    const extendedElement = [...elements,...elements];
    
    elements.forEach((val, idx)=>{
        
        if(idx<elements.length){
            for(let i = 0; i<extendedElement.length; i++){
                const sliced = extendedElement.slice(i, i+idx+1);
                const ans = sliced.reduce((acc, val)=> acc+val,0);
                answer.push(ans);
                
            }
        }
    })
    
    const result = new Set(answer);
    // console.log(result)
    
    return result.size;
}