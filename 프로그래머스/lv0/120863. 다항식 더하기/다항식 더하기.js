function solution(polynomial) {
    polynomial = polynomial.split(" + ");
    let xNum = 0;
    let natureNum = 0;
    polynomial.forEach(it=>{
        
        if(it==="x"){
            xNum+=1;
        }else if(it.substr(-1)==="x"){
            xNum+=parseInt(it.substr(0, it.length)); 
        }else{
            natureNum+=parseInt(it);
        }
        
    })
    
    if(xNum===0){
        return natureNum.toString();
    }else if(xNum===1&&natureNum!==0){
         return "x"+" + "+natureNum.toString();
    }else if(xNum===1&&natureNum===0){
         return "x"
    }else if (xNum!==0&&natureNum!==0){
        return xNum+"x"+" + "+natureNum.toString();
    }else if(xNum!==0&&natureNum===0){
         return xNum+"x"
    }
    
    
     

}