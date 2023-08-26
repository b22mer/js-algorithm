function solution(n, left, right) {

    
        let 시작몇번째줄 = Math.floor(left/n); // 0
        let 시작몇번째인덱스 = left % n; // 2
        let 마무리몇번째줄 = Math.floor(right/n); // 1
        let 마무리몇번째인덱스 = right % n; // 2
    let result = [];
    
        if(시작몇번째줄 === 마무리몇번째줄 ){
            for(let j =시작몇번째인덱스; j<=마무리몇번째인덱스; j++){
                if(j<=시작몇번째줄){
                    result.push(시작몇번째줄+1);
                    
                        // 2      0
                }else if(j>시작몇번째줄){
                    result.push(j+1);
                }
                  // console.log("시작",result)
                
            }
            
            return result;
        }
    
    
    
        
            // 0            1 
    for(let i =시작몇번째줄; i<=마무리몇번째줄; i++){
        
        if(i === 시작몇번째줄){
         
                   //2                  3
            for(let j =시작몇번째인덱스; j<n; j++){
                if(j<=시작몇번째줄){
                    result.push(시작몇번째줄+1);
                    
                        // 2      0
                }else if(j>시작몇번째줄){
                    result.push(j+1);
                }
                  // console.log("시작",result)
                
            }
            
             
            
        }else if(i === 마무리몇번째줄){
                       //2             //3
            for(let j =0; j<=마무리몇번째인덱스; j++){
                      //1
                if(j<=마무리몇번째줄){
                                // 1+1
                    result.push(마무리몇번째줄+1);
                          //1 
                }else if(j>마무리몇번째줄){
                    result.push(j+1);
                }
                   // console.log("마무리",result)
            }
            
        }else{
          
            for(let j =0; j<n; j++){
                if(j<=i){
                    result.push(i+1);
                }else if(j>i){
                    result.push(j+1);
                }
                 // console.log("중간",result)
            }
           
        }
      
    
    }
  return result
    
    

}



//1234
//2234
//3334
//4444 


// 12345
// 22345
// 33345
// 44445
// 55555