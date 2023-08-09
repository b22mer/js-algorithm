function solution(topping) {
    var answer = 0;
    const Old = new Array(10001).fill(0);
    const Young = new Array(10001).fill(0);
    
    topping.forEach((it,idx)=>Old[it]++);
    let oldTopping = Old.filter(it=> it!=0).length;
    let youngTopping = 0;
    topping.forEach((it, idx)=>{
        if(Young[it]===0) youngTopping+=1;
        Old[it]-=1;
        Young[it]+=1;
        if(Old[it]===0) oldTopping-=1;
        if(youngTopping===oldTopping){
            answer++;
        } 
    })
    
    
    
    
    
    
//     const maps = new Map();
//     topping.forEach((it, idx)=>{
//          maps[it]++
//     })
   
//     console.log(maps)
    
    // for(let i = 1 ; i<topping.length; i++){
    //     const setStart= new Set(topping.slice(0, i)).size
    //     const setFinish= new Set(topping.slice(i, topping.length)).size
    //     // console.log(topping.slice(0, i), topping.slice(i, topping.length))
    //     if(setStart>setFinish){
    //         // console.log(answer);
    //         break;
    //     }else if(setStart===setFinish){
    //         answer++;
    //     }
    // }
    
    
    
    return answer;
}