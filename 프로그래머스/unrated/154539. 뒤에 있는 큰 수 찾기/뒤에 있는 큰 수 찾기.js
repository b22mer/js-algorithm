function solution(numbers) {
   
    var stack=[]
    var leng = numbers.length;
    var answer=Array.from({length:leng}, ()=>-1);
    numbers.forEach((it, index)=>{
        while(stack.length !==0 && numbers[stack[stack.length-1]] < it){
            answer[stack.pop()] = numbers[index]
        }
        stack.push(index);
    })
    
    // for i, ele in enumerate(numbers):
    //     while stack and numbers[stack[-1]] < numbers[i]:
    //         answer[stack.pop()] = numbers[i]
    //     stack.append(i)
//     // var stack=[]
//     while(leng!==answer.length){
//         let pop = numbers.shift();
        
//     }
    
    
//     //18개맞음
//     numbers.forEach((it, idx)=>{
//         var checkBig = false;
//         for(let i=idx+1; i<numbers.length; i++){
//             if(numbers[i]>it) {
//                 answer.push(numbers[i]);
//                 checkBig= true
//                 break;
//             }
//         }
//         if(!checkBig) answer.push(-1);
//     })
    // return answer;

    
// 1.
//     while(answer.length!==leng){
//         var front = numbers.shift();
//         var bigNum=numbers.find((it) => {
//             return it > front;
//         })
//         if(bigNum) answer.push(bigNum)
//         else answer.push(-1)
//         // console.log(bigNum)
//         // console.log( numbers.indexOf(front))
// 2. 
// //         let checkBig = false;
// //         for(let i = 0 ; i<numbers.length; i++){
// //             if(front<numbers[i]){
// //                 answer.push(numbers[i]);
// //                 checkBig=true;
// //                 break;
// //             }    
// //         }
        
// //         if(!checkBig){
// //            answer.push(-1) 
// //         }
//     }
    return answer;
}