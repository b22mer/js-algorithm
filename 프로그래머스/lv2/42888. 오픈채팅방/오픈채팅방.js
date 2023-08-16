function solution(record) {
    var answer = [];
    var nameObj = {};
    
    record.map((it, idx)=>{
        const [types, uId, name] = it.split(" ");
        if(types==="Enter" || types==="Change"){
          nameObj[uId]=name;
        }
    })
    
      record.map((it, idx)=>{
        const [types, uId, name] = it.split(" ");
        if(types==="Enter"){
            answer.push(nameObj[uId]+"님이 들어왔습니다.");
        }else if(types==="Leave"){
            answer.push(nameObj[uId]+"님이 나갔습니다.");
        }
    })
      return answer;
}