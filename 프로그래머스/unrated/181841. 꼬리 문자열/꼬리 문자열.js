function solution(str_list, ex) {
    let result = ""
    str_list.forEach(it=>it.indexOf(ex)==-1 ? result+=it: "")
    return result;
}