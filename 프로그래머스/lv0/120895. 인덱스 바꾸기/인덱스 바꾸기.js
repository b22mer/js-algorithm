function solution(my_string, num1, num2) {
    
    my_string= my_string.split("");
    let part1 = my_string[num1];
    let part2 = my_string[num2];
    my_string[num1]=part2;
    my_string[num2]=part1;
    
    my_string=my_string.join("");
    return my_string
    
    
    
}