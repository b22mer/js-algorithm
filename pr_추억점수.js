function solution(name, yearning, photo) {
    const pair  = new Map();
    for(let i = 0; i<name.length; i++){
        pair.set(name[i], yearning[i]);
    }
    
    const result = [];
    let score=0;
    let sum = 0;
    photo.forEach(it=>{
        sum = 0;
        it.forEach(it=>{
            score = pair.get(it)===undefined? 0:pair.get(it);
            sum+=Number(score); 
        })
        
        result.push(sum)
    })
    
    return result

}