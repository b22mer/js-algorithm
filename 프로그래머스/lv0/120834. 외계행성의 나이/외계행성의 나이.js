function solution(age) {
    let answer = "";
    age = age.toString();
    for(let i = 0; i<age.length; i++){
        let chars= age.charAt(i)
        let asc = chars.charCodeAt(0);
        let result = String.fromCharCode(asc+49)
        answer+=result;
    }
    return answer;
}