function solution(n) {
    // n=49;
    var answer = 0;
    if(n<=3) return answer;
    
    for(let i=4; i<=n; i++){
        if(i%2==0 || i%3==0) {
            console.log("첫",i)
            answer++;
        }else if(i!==5 && i%5==0){
             console.log("둘",i)
             answer++;
        } else if(i!==7 && i%7==0){
             console.log("셋",i)
             answer++;
        }
    }
    
    return answer;
}