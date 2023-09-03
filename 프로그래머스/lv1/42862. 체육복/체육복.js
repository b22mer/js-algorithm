function solution(n, lost, reserve) {
    
    let answer= 0;
    const ClassArr = Array.from({length:n},(it, idx)=>0)
    
    const newArr= lost.filter(it => reserve.includes(it)); 
    
    console.log(ClassArr.indexOf(24));
    
    lost.forEach(it=>{
        if(newArr.indexOf(it)===-1){
            ClassArr[it-1]=2
        }
    }); // 체육복이 없으면2
    
    
    reserve.forEach(it=>{
        if(newArr.indexOf(it)===-1){
            ClassArr[it-1]=1
        }
    });// 체육복이 있으면1
    
    console.log(ClassArr)
    ClassArr.map((it, idx)=>{
        if(it===0) answer++;
        else if(it===1){
            if(ClassArr[idx+1]===2){
                ClassArr[idx]=0;
                ClassArr[idx+1]=0;
                answer++;
            }else{
                ClassArr[idx]=0;
                answer++;
            }
        }
        else if(it===2){
            if(ClassArr[idx+1]===1){
                ClassArr[idx]=0;
                ClassArr[idx+1]=0
                answer++;
            }
        }
    
    })
    
    return answer;
    
    
    
    
    
    
    
    
    
    
    
//     var cnt = n;
//     lost = lost.sort((a, b)=> a-b);
//     reserve = reserve.sort((a, b)=> a-b);
    
//     // for(let i=0; i<lost.length; i++){
//     //         for(let j=0; j<reserve.length; j++){
//     //             if(Math.abs(reserve[j]-lost[i])===0){
//     //             lost[i]=-1;
//     //             reserve[j]=-1;
//     //             break;
//     //         }
//     //     }
//     // }
    
//     1 2 3 [4] 5
  
//     (1) 2 [3]
//     for (let i = 0 ; i< lost.length; i++){
        
//         let leng = reserve.filter(it=> Math.abs(it-lost[i])===1).length;
//         let chk = lost[i];
        
//         if(leng==0 ){
//             cnt--;
//             continue;
//         }
        
//         if(chk===-1) continue;
        
        
//         for(let j= 0 ; j<reserve.length; j++){
//             if(Math.abs(reserve[j]-lost[i])===1) {
//                 reserve[j]=-1;
//                 break;
//             }
            

//         }
        
        
//     }
//    return cnt
}