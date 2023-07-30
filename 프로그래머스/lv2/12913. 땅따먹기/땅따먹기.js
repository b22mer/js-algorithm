function solution(land) {

    var answer = 0

    
    for(let i =1; i<land.length; i++){
        for(let j=0; j<4; j++){
            let tmp = land[i-1][j]
            land[i-1][j] = -1
            land[i][j]+=Math.max(land[i-1][0],land[i-1][1],land[i-1][2],land[i-1][3])
            land[i-1][j] = tmp
        }
        answer = Math.max(land[i][0],land[i][1],land[i][2],land[i][3])
    }
       
    
    return answer
    

}