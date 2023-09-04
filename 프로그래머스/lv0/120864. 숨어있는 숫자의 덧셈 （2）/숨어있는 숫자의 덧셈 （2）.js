function solution(my_string) {
    
    const numstr= "0123456789";
    let part=""
    let result = 0;
    for(let i=0; i<my_string.length; i++){
        
        if(numstr.indexOf(my_string.charAt(i))!==-1){
           part+=my_string.charAt(i);
        }else{
            if(part===""){}
            else{
                  result+= parseInt(part)
                  part="";
            }
        }
        
        
        if(i===my_string.length-1){
             if(part===""){}
            else{
                  result+= parseInt(part)
                  part="";
            }
        }
    }
    return result;
}