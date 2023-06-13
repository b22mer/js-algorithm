function solution(k, score) {
    var answer = [];
    var honorList =[];
    let n = score.length;

    for(let i = 0 ; i<n; i++){
        
        let item = score[i];
        if(honorList.length<k){
            honorList.push(item);
          
            answer.push(Math.min(...honorList));
        }else if(honorList.length===k){
            let minValue = Math.min(...honorList);
            if(minValue<item){
                let idx = honorList.indexOf(minValue);
                honorList.splice(idx,1);
                honorList.push(item);
                answer.push(Math.min(...honorList));
            }else{
                answer.push(Math.min(...honorList));
            }
        }
        
          // console.log(answer)
    }
    
    // console.log(answer)
    return answer; 
    
}