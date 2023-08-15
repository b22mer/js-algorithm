function solution(n, wires) {
    const tree = {}; 
    wires.map(w => {
        const [a, b] = w;
        if(!tree[a]) tree[a] = [];
        if(!tree[b]) tree[b] = [];
        tree[a].push(b);
        tree[b].push(a);
    })
    
    const searchTree = (root, exception) => {
        let count = 0;
        const queue = [root];
        const visited = [];
        visited[root] = true;
        while(queue.length){
            const cur = queue.pop();
            tree[cur].map(next => {
                if(next !== exception && !visited[next]){
                    visited[next] = true;
                    queue.push(next);
                }
            })
            count++;
        }
        return count;
    }
    
    let answer = 100; 
    wires.map((w, i) => { 
        const [a, b] = w;
        const dif = Math.abs(searchTree(a,b) - searchTree(b,a));
        answer = answer > dif ? dif : answer;
    })
    return answer;
}