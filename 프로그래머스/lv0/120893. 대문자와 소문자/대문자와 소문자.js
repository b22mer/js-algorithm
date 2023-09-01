function solution(my_string) {
    var answer = '';
    
    for (let i = 0; i<my_string.length; i++){
        if(my_string.charCodeAt(i)<=122 && my_string.charCodeAt(i)>=97){
            answer+=my_string.charAt(i).toUpperCase();
        }else answer+=my_string.charAt(i).toLowerCase();
    }

    return answer;
}