function solution(k, dungeons) {
    //[최소 필요, 소모피로]
    let result = 0;
    let maxVal = -10000;
    let HP = k;

    const DFS = (HP, dungeons, visited) => {
        let cnt = 0;
        for (let i = 0; i < dungeons.length; i++) {
            if (visited[i]) cnt++;
        }

        if (cnt > maxVal) maxVal = cnt;

        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i]) {
                if (HP >= dungeons[i][0]) {
                    visited[i] = true;
                    HP -= dungeons[i][1];
                    DFS(HP, dungeons, visited);
                    HP += dungeons[i][1];
                    visited[i] = false;
                }
            }
        }
    }

    const visited = new Array(dungeons.length).fill(false); // visited 배열 초기화
    DFS(HP, dungeons, visited);
    return maxVal
    
    
    
    
    
    
    
    
//     let HP1=k
//     let HP2=k
//     let result1=0
//     let result2=0
//     dungeons.sort((a, b)=>b[1]-a[1])
//     console.log(dungeons)
//     for(let i =0; i<dungeons.length; i++){
//         if(HP1>=dungeons[i][0]){
//             HP1-=dungeons[i][1]
//             result1++
//              console.log(HP1)
//         }
//     }
//     console.log("----")
    
//     dungeons.sort((a, b)=>b[0]-a[0])
//     console.log(dungeons)
//         for(let i =0; i<dungeons.length; i++){
//         if(HP2>=dungeons[i][0]){
             
//             HP2-=dungeons[i][1]
//             result2++
//             console.log(HP2)
//         }
//     }
    
      // console.log(result2)
    
    
    
//     // 80 20 
//    const test= (arr,cnt, HP)=>{
//         let queue = [arr.shift()];
//         let visited  = new Array(arr.length).fill(false)
//         while(queue.length > 0){
//             let [needminHP, consumHP]=queue.shift();
//             // 80 20
//             // 현 80
            
//             for(let i =0; i<arr.length; i++){
//                 if(HP-consumHP >=arr[i][0] && !visited[i]){
//                     HP= HP -consumHP;
//                     consumHP= arr[i][1];
//                     visited[i]=true;
//                     queue.push(arr[i]);
//                     cnt++;
//                     break;
//                 }
//             }
//         }
//          return ++cnt;
//     }
   
   
//     let max = -1;
//     for(let i =0; i<dungeons.length; i++){
        
//         if(dungeons[i][0]>k) continue;
//         let count = 1;
//         let result = test(dungeons,count, k);
//         if(max<result) max=result;
        
//     }
    

    
   
//     return max;
    
    
}