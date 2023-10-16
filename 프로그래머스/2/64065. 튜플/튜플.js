function solution(s) {
    let originArr = s.slice(2, s.length-2).split("},{")
    let newArr = []
    let result = []
    originArr.forEach(it=>{
        let part = it.split(",").map(str=> Number(str))
        newArr.push(part)
    })

    newArr.sort((a,b)=> a.length - b.length)
    
    newArr.forEach(it=>{


            it.forEach(it=>{
                if(!result.includes(it)){
                    result.push(it)
                } 
            })
        
    })
   
    
    return result
}