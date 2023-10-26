const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n").map(it => it.split(" ").map(it=> Number(it)))
let [N ,M] = input[0]
let graph = [...new Array(N)].map(i=> new Array(N).fill(0))
let visited = new Array(N).fill(false)

for(let i = 0; i<M ; i++){
    let [x,y] = input[i+1]
    graph[x-1][y-1]=1
    graph[y-1][x-1]=1
}



const dfs = (now)=>{

    for(let nxt =0; nxt<N; nxt++){
        if(graph[now][nxt] && visited[nxt]==false){
            visited[nxt]=true
            dfs(nxt)
        }
    }
}

let answer= 0
for(let i=0; i<N; i++){
    if(visited[i]==false){
        answer+=1
        visited[i]=true
        dfs(i)
    }
}


console.log(answer)