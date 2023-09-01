function solution(order) {
    let str = "369"
    let answer= 0;
    order = order.toString();
    for(let i = 0; i<str.length; i++){
        
        let part = str.charAt(i);
        for(let j= 0; j<order.length; j++){
            if(order.charAt(j)===part){
                answer+=1;
            }
        }
    }
    
    return answer;
}