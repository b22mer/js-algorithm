function solution(citations) {
    let arr= citations.sort((a,b) => a-b);
    let answer= 0;
    let hIndex = 0;
    for(let i = 0; i<arr.length; i++){
        //  //인용된 논문
        // if(i+1>=arr[i]){
        //     if(arr.length-(i+1) <=arr[i]){
        //        return arr[i]; 
        //     }
        // } 
        hIndex = arr.length - i;
        if(arr[i]>=hIndex){
            answer=hIndex;
            break;
        }
    }
    
    return answer;

}