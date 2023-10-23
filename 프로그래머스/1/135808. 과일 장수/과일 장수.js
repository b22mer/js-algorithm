function solution(k, m, score) {
    // k 최고점
    // m 상자안 사과수
    // score 사과리스트
    var result = 0
    score.sort().reverse()
    for(let i =0; i<score.length; i=i+m){
        let arr = score.slice(i, i+m)
        if(arr.length==m){
            result+=arr[arr.length-1]*m
        }
    }
    
    return result
    
    
    
    
}