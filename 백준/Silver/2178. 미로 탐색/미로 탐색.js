const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [N, M]= input.shift().split(" ").map(it=>Number(it));
let graph = []
let visited =[]
let dx = [1,-1,0,0]
let dy = [0,0,-1,1]

for (let i=0; i<N; i++) graph.push(input[i].trim().split("").map(it=>Number(it)))
for (let i=0; i<N; i++) visited.push(new Array(M).fill(false))
let answer= 1
const bfs = ()=>{

    let queue = []
    visited[0][0]=true
    queue.push([0,0,1])
    while(queue.length>0){
        let [ex, ey, d] = queue.shift()
        if(ex==N-1 && ey==M-1){
            console.log(d)
            return
        }
        let nd = d+1

        for(let i =0; i<4; i++){
            let nx = ex+ dx[i]
            let ny = ey+ dy[i]

            if(nx<N && nx>=0 && ny<M && ny>=0){
                if(graph[nx][ny]==1 && visited[nx][ny]==false){
                    visited[nx][ny]=true
                    queue.push([nx, ny, nd])
                }
            }
        }
    }

}



bfs()
