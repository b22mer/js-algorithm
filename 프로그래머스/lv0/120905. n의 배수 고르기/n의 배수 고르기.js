function solution(n, numlist) {
    var answer = numlist.filter((it, idx)=>{
        return it%n===0;
    })
    return answer;
    
}