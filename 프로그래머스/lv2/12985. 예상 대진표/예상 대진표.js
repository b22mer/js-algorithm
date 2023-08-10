function solution(n,a,b)
{
//     let cnt =0;
//     var answer = new Array(n).fill().map((element, index)=>{
//         return index+1 === a ? "A": index+1 === b ? "B": index+1
//     })
//     let isFinish = true;
    
//     while(isFinish){
//         let arr = []
//         arr=answer.slice(0,2);
        
//         if(arr.indexOf("A")!=-1){
            
//         }else if(arr.indexOf("B")!=-1){

//         }
        
        
//     }
    
//     console.log(answer)

        let answer = 1;

        while(true){

            a = Math.floor((a+1)/2);
            b =   Math.floor((b+1)/2);

            if(a == b)
                break;

            answer++;
            console.log(a,b)

        }

        return answer;
    
}