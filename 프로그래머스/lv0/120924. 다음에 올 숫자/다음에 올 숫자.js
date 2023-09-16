function solution(common) {
    let chk = false;
    
    if(common[1]-common[0] === common[2]-common[1]){
        let chai = common[1]-common[0];
        return common[common.length-1]+chai;
    } else {
        let chai = common[1]/common[0];
         return common[common.length-1]*chai;
    }
}