function solution(priorities, location) {
    var answer = 0;
    var objArr =[];
    priorities.forEach((it, idx)=>{
        objArr.push({value: it, location: idx});
    })
    var count = 0;
    
    while(true){
        const first = objArr.shift();
        const checkArr = objArr.filter((it)=>{
        
            return it.value>first.value;
        });
        
        // console.log(checkArr)
        
        // 큰수가 있다면 
        if(checkArr.length>0) {
            objArr.push(first)
        // 큰수가 없다면
        }else {
            if(first.location === location){
                return count+1;
            }
            count++;
        }
        
    }
    
   
}