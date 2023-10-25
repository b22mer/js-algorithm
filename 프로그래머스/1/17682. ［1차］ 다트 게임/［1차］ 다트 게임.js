function solution(dartResult) {
   
    var answer = 0
    var start
    if(dartResult.charAt(0)=='1' && dartResult.charAt(1)=='0'){
        start=2
        answer=10
    }else {
        start=1
        answer=Number(dartResult.charAt(0))
    }
    var evalList = []
    
    for(let i = start; i<dartResult.length; i++){
        
        if(dartResult.charAt(i)=='S'){
            answer = answer
        }else if(dartResult.charAt(i)=='D'){
            answer = Math.pow(answer,2)
        }else if(dartResult.charAt(i)=='T'){
            answer = Math.pow(answer,3)
        }else if(dartResult.charAt(i)=='*'){
            answer *=2
            evalList.length>=1? evalList[evalList.length-1]*=2:""
        }else if(dartResult.charAt(i)=='#'){
            answer = -1*answer
        }else{ // 숫자면
            if(dartResult.charAt(i)=='1' && dartResult.charAt(i+1)=='0'){
                evalList.push(answer)
                answer=10
                continue;
            }else if(dartResult.charAt(i-1)=='1' && dartResult.charAt(i)=='0'){
                continue;
            }
            evalList.push(answer)
            answer= Number(dartResult.charAt(i))
        }
        
        if(i==dartResult.length-1){
            evalList.push(answer)
        }
    }
    answer=0
    for(let i=0; i<evalList.length; i++){
        answer+=evalList[i]
    }
    // answer = evalList.reduce((a, b)=> a+b)
    
    return answer;
}