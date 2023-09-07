function solution(dots) {

    let first = dots.shift();
    
    

    for(let i=0; i<3; i++){
        
        let second = dots.shift();
        dots.sort((a,b)=>a[0]-b[0]);
        // 기울기 
        let originRotate = (second[1]-first[1])/(second[0]-first[0]);
        let subRotate = (dots[1][1]-dots[0][1])/(dots[1][0]-dots[0][0]);
        
        if(originRotate===subRotate) return 1;
     
        dots.push(second);
    }
   
    
    return 0;
    
}