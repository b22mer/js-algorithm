function solution(array) {

    const arrSet= new Set(array);
    if(arrSet.size===1) return array[0];
    let choiceArr = [...arrSet];
    const valueObj={}
    choiceArr.forEach(it=> valueObj[it]=0)
       array.forEach(it=>{
        valueObj[it]+=1;
    })
function findMaxKey(obj) {
  let maxValue = Number.MIN_SAFE_INTEGER; // 시작값으로 가장 작은 정수로 설정
  let maxKey = -1;

  for (const key of choiceArr) {
    if (obj[key] > maxValue) {
      maxValue = obj[key];
      maxKey = key;
    } else if (obj[key] === maxValue) {
      // 최대값과 같은 값이 또 나타났을 때, 유일하지 않다는 뜻이므로 -1을 반환
      maxKey = -1;
    }
  }

  return maxKey;
}
    
    

    return  Number(findMaxKey(valueObj))
    
    
    
    
    
    
    
    
          

}