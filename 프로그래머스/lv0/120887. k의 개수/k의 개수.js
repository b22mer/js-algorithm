function solution(i, j, k) {
    
    let result = 0;
    for(let start = i; start<=j; start++){
        result+=start.toString().split("").filter(it=> it==k).length;
    }
    
    return result;
}