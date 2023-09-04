function solution(dots) {
    
    dots = dots.sort((a, b)=> Number(a[0])-Number(b[0]));
    let garo = Math.abs(dots[0][1]- dots[1][1]);
    let sero = Math.abs(dots[1][0]- dots[2][0]);
    return garo*sero

    
    
    
    
    
}