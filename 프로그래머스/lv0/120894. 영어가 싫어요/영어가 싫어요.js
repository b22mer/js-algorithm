function solution(numbers) {
    let obj ={
        "zero":0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
    }
    
    let part = ""
    let answer=""
    numbers= numbers.split("");
    while(numbers.length>0){
        part+= numbers.shift();
        if(obj[part]!==undefined){
            answer+=obj[part].toString();
            part="";
        }
        
    }
    return parseInt(answer);

    
}