function solution(my_string, s, e) {
    let arr= my_string.split("");
    let newArr = [...arr.slice(0,s),...arr.slice(s,e+1).reverse(),...arr.slice(e+1,arr.length)];
    // let newArr = arr.splice(s, e-s, ...arr.slice(s, e).reverse());
    return newArr.join("");
}