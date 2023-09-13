function solution(bin1, bin2) {
    bin1 = parseInt(bin1, 2);
    bin2 = parseInt(bin2, 2);
    let result = (bin1 + bin2).toString(2);
  
    return result;
}