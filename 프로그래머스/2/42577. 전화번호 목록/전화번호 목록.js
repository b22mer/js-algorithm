function solution(phone_book) {
    
    
    

    
    // 방법 2
      const table = {};

  for (const number of phone_book) {
    table[number] = true;
  };

  for (const number of phone_book) {
    for (let i = 1; i < number.length; i += 1) {
      const prefix = number.slice(0, i);
      if (table[prefix]) return false;  
    };
  };

  return true;
    
    
        // 방법 1
//     phone_book.sort()

//     const isPrefix = phone_book.some((book,idx)=>{
//         return phone_book[idx+1]?.indexOf(book) === 0
//     })

//     return !isPrefix
    
//     var answer = true;
//     var chkArr= []
//     phone_book.sort((a,b)=> a.length - b.length)
//     for(let i =0; i< phone_book.length; i++){
//         let checkStr = phone_book[i]
    
//         chkArr = phone_book.filter(it=>{
//             var chk = it.slice(0,checkStr.length)
//             return chk ==checkStr
//         })
        
//         if(chkArr.length>1) return false
//     }
    
//     return true;
}