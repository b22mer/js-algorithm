function solution(s) {
    s = s.split("");
    let alpha = [...new Set(s)];
    let result="";
    for(let i= 0; i<alpha.length; i++) result+=s.filter((it, idx)=>it===alpha[i]).length ===1? alpha[i]:""; 
    return result.split("").sort().join("");
    
}