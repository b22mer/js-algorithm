function solution(n) {
  
    // const factorial = (n)=>{
    //     if(n < 0) return -1;
    //     else if(n===0) return 1;
    //     else return factorial(n-1) *n;    
    // }
    // var idx =1;
    // while(true){
    //     if(n === factorial(idx)) return idx;
    //     idx++;
    // }
    
    var num = 1;
    var idx = 1;
    while(true){
        num*=idx;
        if(num===n) return idx;
        if(num>n) return idx-1;
        idx++;
        
    }
    
}