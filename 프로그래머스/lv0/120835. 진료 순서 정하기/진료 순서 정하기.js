function solution(emergency) {
    var answer = [];
    const maps = new Map ();
    const sortedArr= [...emergency].sort((a, b)=> Number(b)-Number(a))
     sortedArr.forEach((it, idx)=>{
        maps.set(it, idx);
    })

    emergency.forEach(it=>{
        answer.push(maps.get(it)+1);
    })

   return answer;
    

}