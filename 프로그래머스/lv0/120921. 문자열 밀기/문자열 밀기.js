function solution(A, B) {
    let result = 0;
    for(let i = 0 ; i<A.length; i++){
       if(A === B) return result;
        else {
            A =A[A.length-1] +A.slice(0,A.length-1);
            result++;
        }
   }
    
    return -1;
    
}