function solution(arr, k) {
    var answer = [];
    answer = [...new Set(arr)]
    var result = []
    for(let i =0; i<k; i++){
        
        if(answer.length <= i) result.push(-1)
        else result.push(answer[i])
    }
    
    return result
}