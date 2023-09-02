function solution(array) {
    const objArr=[];
    array.forEach((it, idx)=>{
        objArr.push({value:it, index:idx})
    })
 
    objArr.sort((a, b)=>{
        return b.value -  a.value    
    })
   

    return [objArr[0].value, objArr[0].index]
}