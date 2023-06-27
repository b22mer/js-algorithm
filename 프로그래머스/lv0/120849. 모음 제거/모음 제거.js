function solution(my_string) {

    let newArr = my_string.split("").filter(it => ["a", "e", "i" , "o" , "u"].indexOf(it)===-1).join("");
    return newArr;
    // console.log(newArr);
}