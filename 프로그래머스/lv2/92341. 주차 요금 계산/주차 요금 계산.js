function solution(fees, records) {
    
    let [기본시간, 기본요금, 단위시간, 단위요금] = fees;
    let newRecords= records.map(it=> it.split(" ")).sort((a,b)=> a[1]-b[1]);
    let names= [...new Set(newRecords.map(it=> it[1]))]
    var answer= []
   
    for(let i = 0 ; i<names.length; i++){
        
        let record = newRecords.filter(it => it[1] === names[i]);
        let terms = record.length;
        var totalTime=0;
        
        //홀수
        if(terms%2!=0){
           
                for(let j=0; j<terms; j++){
                     var time =record[j][0].split(":");
                if(record[j][2]==='IN'){
                    //마지막인경우
                    if(j===terms-1){
                       
                        totalTime += 1439-((parseInt(time[0])*60+(parseInt(time[1]))))
                        break;
                    }
                    totalTime -= ((parseInt(time[0])*60+(parseInt(time[1]))))
    
                }else if(record[j][2]==='OUT'){
                    totalTime += ((parseInt(time[0])*60+(parseInt(time[1]))))
                }
                
                
            }
            
            
    
        
        //짝수
        }else{
              for(let j=0; j<terms; j++){
                   var time =record[j][0].split(":");
                if(record[j][2]==='IN'){
                    totalTime -= ((parseInt(time[0])*60+(parseInt(time[1]))))
    
                }else if(record[j][2]==='OUT'){
                    totalTime += ((parseInt(time[0])*60+(parseInt(time[1]))))
                }
                
                
            }
            
        }
        
        

        
        if(totalTime<=기본시간) answer.push(기본요금);
        else{
            let bill = 기본요금+Math.ceil((totalTime-기본시간)/단위시간)*단위요금;
            answer.push(bill);
        }
        
    }
    
    return answer;
}

