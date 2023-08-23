function solution(user_id, banned_id) {
    let answer = 0;
    let visit=[];
    let set=new Set();
    
    const check=(i,j)=>{
        for(let idx=0;idx<i.length;idx++){
            if(i[idx]!=='*' && i[idx]!==j[idx]) return false;
        }
        return true;
    }
   
    const makeList=(idx_i,count,str)=>{
        if(count===banned_id.length){
            let arr=str.split(" ");
            arr.shift();
            arr.sort();
            let newstr=arr.join("");
            set.add(newstr);
        } 
        if(idx_i>=user_id.length) return;
        
        for(let i=idx_i;i<banned_id.length;i++){
            for(let j=0;j<user_id.length;j++){
      
                if(visit[j]) continue;

                if(banned_id[i].length!==user_id[j].length) continue;
                if(!check(banned_id[i],user_id[j])) continue;
  
                visit[j]=1;
                makeList(i+1,count+1,str+" "+user_id[j]);
                visit[j]=0;
            }
        }
    }
    
    makeList(0,0,"");
    return set.size;
}