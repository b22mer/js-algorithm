function solution(babbling) {
    const chkArr = ["aya", "ye", "woo", "ma"];
    let result = 0;
    
    for(let i =0; i<babbling.length; i++){
        
        let word = babbling[i];
        let wordLen = word.length;
        chkArr.forEach(it=>{
            if(word.indexOf(it)!==-1){
                wordLen = wordLen - it.length;
            }
        })
        
        if(wordLen === 0){
            result+=1;
        }
    }
    return result;
    

}