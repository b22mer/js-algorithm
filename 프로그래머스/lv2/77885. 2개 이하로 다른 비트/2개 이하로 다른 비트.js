function solution(numbers) {
    
    const result = [];
 
    for(let i = 0; i<numbers.length; i++){
        
        if(numbers[i]%2===0){
             result.push(numbers[i]+1)
             
        }else{
             let origin = "0"+numbers[i].toString(2);
             for(let j = origin.length-1; j>=0; j--){
                 if(origin.charAt(j)==="0"){
                     origin = origin.substring(0,j)+"10"+origin.substring(j+2,origin.length+1)
                     result.push(parseInt(origin,2))
                     break;
                 }
             }
        }
        

        
        
//         while(true){
//                 let origin = numbers[i].toString(2);
//                 let bikyo = num.toString(2);
            
//                 origin=origin.length<bikyo.length?  "0"+origin : origin;
//                 let cnt=0;    
            
//                 for(let j=0; j<bikyo.length;j++){
//                     if(origin.charAt(j)!==bikyo.charAt(j)) cnt++;
//                     if(cnt>2) break;
//                 }
                
//                 if(cnt>2){
//                     num+=1;
//                     continue;
//                 }
                
//                 result.push(parseInt(bikyo,2));
//                 break;
//         }
    }
    
    return result;
    
    
    
}