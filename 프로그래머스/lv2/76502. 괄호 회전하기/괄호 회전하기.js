function solution(s) {
    const getIsCorrectString = (stringsArr)=>{
        const correctSet = {
            ']' : '[',
            ')' : '(',
            '}' : '{',
        }
        const stack = []
        let isCorrectString = true
        stringsArr.forEach(str=>{
            if(str === '(' || str === '{' || str === '[' ){
                stack.push(str)
            }
            else{
                if(correctSet[str] === stack.at(-1)){
                    stack.pop()
                }
                else{
                    isCorrectString = false
                }
            }
        })
        return stack.length === 0 && isCorrectString
    }

    let answer = 0
    const rotate= s.split("");
    for(let i=0;i<s.length;i++){
        const changedS = [...rotate.slice(i,rotate.length), ...rotate.slice(0,i)]
        const isCorrectString = getIsCorrectString(changedS)
        answer += (isCorrectString)
    }

    return answer
}