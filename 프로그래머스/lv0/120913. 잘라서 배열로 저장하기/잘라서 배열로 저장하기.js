function solution(my_str, n) {
    var answer = [];
    my_str = my_str.split("");
    while(my_str.length>0){
        answer.push(my_str.splice(0, n).join(""))
    }
    return answer;
}