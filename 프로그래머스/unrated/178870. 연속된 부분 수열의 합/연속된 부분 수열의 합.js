function solution(sequence, k) {

    var prefix = [0];
    sequence.forEach((num, i)=>{
        prefix.push(num + prefix[i]);
    })
    
    let min = Infinity;
    let answer= [];
    let [start, end] = [0, 0];
    while(start<=end){
        let total = prefix[end] - prefix[start];
        
        if(total===k){
            let len = end - start -1;
            if(len<min){
                answer = [start, end-1];
                min =len;
            }
          
        }
        
        if(total<k){
            end+=1;
        }else{
            start+=1;
        }
    }
 
    return answer;
    // console.log(prefix)
    // return answer;
}