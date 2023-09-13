const fs=require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); 

let T = parseInt(input.shift());

for(let t = 0; t<T; t++){

    let testcase = parseInt(input.shift());
    let testArr= input.shift().trim().split(" ");
    let banTeamList = [];
    let teamList = new Map();
    let setTest = [...new Set(testArr)];


    setTest.forEach(it=>{
        teamList.set(it, {arr: [], total:0});
    })

    setTest.forEach(it=>{
        let a = testArr.filter(item=> it==item).length;
        if(a<6) banTeamList.push(it);
    })



    let fastest = 1;
    
    for(let i=0; i<testcase; i++){
        if(banTeamList.indexOf(testArr[i])==-1){
            const team = teamList.get(testArr[i]);
            team.arr.push(fastest);
            team.total+=fastest;
            teamList.set(testArr[i], team);
            fastest+=1;
        }
    }




    let min = Number.MAX_SAFE_INTEGER;
    let result = 0;
    for (const [key, value] of teamList) {
        if(value.arr.length ===0 ) continue;
        let total = value.arr[0] + value.arr[1] + value.arr[2] + value.arr[3]
        if(min>=total){
            teamList.set(key, {...value, four:total ,chk: value.arr[4]});
            min= total;
            result = key;
        }
      }

      let fourthMin =Number.MAX_SAFE_INTEGER;

      for (const [key, value] of teamList) {
        if(value.arr.length ===0 ) continue;
        if(value.four===min && fourthMin>value.chk){
            result = key;
            fourthMin = value.chk;
        }
      } 

      
    
      console.log(result)


}