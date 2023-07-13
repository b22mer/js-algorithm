function solution(x, y, n) {
    
    var visited = Array.from({length:y*2}, ()=>0);
    if(x===y) return 0;
    const bfs = ()=>{
        let queue = [];
        queue.push(x);
        while(queue.length){
            let cx = queue.shift();
            for(let i =0; i<3; i++){
                let nx;
                if(i===0){
                    nx=cx+n;
                }else if(i===1){
                    nx=cx*2;
                }else {
                    nx=cx*3;
                }
                if(nx>y) continue;
                if(visited[nx]) continue;
                visited[nx]= visited[cx]+1;
                queue.push(nx);
                if(nx===y) return visited[y];
            }
        }
        return -1;
    }
    
       return bfs();

} 
    
//     const dfs = (x, cnt)=>{
        
//         if(x===y){
//             if(answer===-1) answer= cnt;
//             else if(answer>cnt) answer=cnt;
//             return;
//         }else if(x>y) return;
//         else{
//             dfs(x * 2, cnt+1);
//             dfs(x * 3, cnt+1);
//             dfs(x + n, cnt+1);
//         }
//     }
    
//     dfs(x, cnt);
