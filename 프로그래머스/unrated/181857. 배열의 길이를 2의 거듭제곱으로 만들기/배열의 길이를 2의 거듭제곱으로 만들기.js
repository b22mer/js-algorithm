function solution(arr) {
    
    let originLen = arr.length;

    for(let i = 0; i<1000; i++){
        
        if(originLen===Math.pow(2,i)){
            return arr;
        }else if(originLen<Math.pow(2,i)){
            powNum = i;
            let addArr = new Array(Math.pow(2,i) - originLen).fill(0);
            return [...arr, ...addArr]
        }
        
    }
    
}