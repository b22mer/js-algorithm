function solution(n) {
    var answer = '';
     // n=9
    while(n){
         let part=(n%3).toString();
         if(part==="0"){
             part = "4";
             answer=part+answer;
             n = Math.floor(n/3)-1;
             continue;
         }
         else if(part==="1") part= "1";
         else if(part==="2") part="2"
         answer=part+answer;
         n = Math.floor(n/3);
    }
    
    return answer;
    
}


