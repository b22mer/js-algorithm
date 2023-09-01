function solution(cipher, code) {
    cipher = "0"+cipher;
    let answer =""
    for(let i = code; i<cipher.length; i+=code){
        answer+=cipher.charAt(i);
    }
    
    return answer;
}