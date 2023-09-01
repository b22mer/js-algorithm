function solution(array, n) {
    var min = 101;
    array=array.sort((a,b)=> a-b);
    var answer=0;
    array.forEach((it, idx)=>{
        if(min>Math.abs(it-n)){
            min=Math.abs(it-n)
            answer= it;
        }
        
        
    })
    
    
    return answer;
}