let fs= require('fs');
const input = fs.readFileSync("./input.txt").toString().trim().split("\n"); 

let N = parseInt(input.shift())
let headChk=false;
let armChk=false;
let lLeg =0;
let rLeg=0;
let weiChk=0;
let lengthArr=[]
let neckposition=[];

for(let i = 0; i<N; i++){


    const chkString = input.shift();

    //없으면 넘어가
    if(chkString.indexOf('*')!==-1 && !headChk){
        headChk= true;
        console.log(i+2, chkString.indexOf('*')+1)
        neckposition=[i+1,chkString.indexOf('*') ];
        continue;
    } 


    // 팔길이 구하기 위함
    const leftside= chkString.indexOf('*');
    const rightside= chkString.lastIndexOf('*');

    if(leftside!==rightside && !armChk){
        lengthArr.push(neckposition[1]-leftside);
        lengthArr.push(rightside-neckposition[1]);
        armChk=true;
        continue;
    }


    // 허리 길이 구하기

    if(leftside===rightside&& neckposition[1]===leftside ){
        weiChk=i;
        continue;
    }

    if(leftside!==-1 ){
        if(leftside!==rightside){
            lLeg+=1;
            rLeg+=1
        }else if(leftside < neckposition[1]){
            lLeg+=1;
        }else{
            rLeg+=1;
        }
    }

}

lengthArr.push(weiChk-neckposition[0]);
lengthArr.push(lLeg);
lengthArr.push(rLeg);

lengthArr.forEach(it => process.stdout.write(it+" "))


