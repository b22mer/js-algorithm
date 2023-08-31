function solution(my_string) {
    var numbers = "0123456789";
    var result = my_string.split("").filter((it)=>{
        if(numbers.includes(it)){
            return (it);
        }
    }).sort((a,b)=> Number(a)-Number(b))
    
    return result.map(Number)
}