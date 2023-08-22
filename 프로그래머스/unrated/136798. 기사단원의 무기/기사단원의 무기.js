function solution(number, limit, power) {
    
    const yaksoo = (n)=>{
        let cnt=0;
        
        for (let i = 1; i * i <= n; i++) {
            if (n % i == 0) {
                cnt++;
                if (i * i < n) {
                    cnt++;
                }
            }
        }
        return cnt;
    }
    
    let arr  = Array.from({length:number},(it,idx)=>idx+1);
    let result = 0;
    arr = arr.map(it=> yaksoo(it))
    arr = arr.map(it=>it>limit? power : it)
    
    
    result = arr.reduce((accumulator, currentValue)=>accumulator+currentValue, 0 );
    return result
    
    
     
    
}