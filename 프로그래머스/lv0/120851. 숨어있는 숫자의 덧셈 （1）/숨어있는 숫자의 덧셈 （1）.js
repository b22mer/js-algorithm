function solution(my_string) {
    const answer = my_string
                        .replace(/[^0-9]/g,'')
                        .split('')
                        .map(it=>Number(it))
                        .reduce((acc,val)=>acc+val)
    return answer 
}