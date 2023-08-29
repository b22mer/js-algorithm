function solution(num_list, n) {
    var answer = [];
    var arr = [];
    while(true){
        if(arr.length === n){
            answer.push(arr);
            arr = [];
        }
        if(num_list.length===0){
            return answer;
        }
  
        if(arr.length<n){
            arr.push(num_list.shift());
        }
        
        
    }
    
}