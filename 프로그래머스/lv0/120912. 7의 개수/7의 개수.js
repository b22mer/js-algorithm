function solution(array) {
    let answer = 0;
    array = array.join("");
    for(let i = 0; i<array.length; i++){
        if(array.charAt(i)==="7") answer++;
    }
    return answer;
}