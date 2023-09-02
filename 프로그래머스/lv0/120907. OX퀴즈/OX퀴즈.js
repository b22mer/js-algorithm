function solution(quiz) {
   let answer = [];
    quiz.forEach((it, idx)=>{
        const totalPart = it.split("=");
        const expValue = eval(totalPart[0]);
        expValue===parseInt(totalPart[1])? answer.push("O"): answer.push("X")
    })
    
    return answer;
}