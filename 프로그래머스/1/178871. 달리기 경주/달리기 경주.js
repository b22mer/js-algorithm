function solution(players, callings) {
    // callings.forEach(it=>{
    //     let price = players.indexOf(it);
    //     [players[price-1],players[price]] = [players[price],players[price-1]]
    // })
    // return players
    
    let playerList ={};
    let rankList = {};
    
    players.forEach((player, rank)=>{
        let curRank = rank+1;
        playerList[player] = curRank
        rankList[curRank] = player
    })
 
    callings.forEach(player=>{
        let curRank = playerList[player]
        playerList[player] = curRank-1
        playerList[rankList[curRank-1]] = curRank
        rankList[curRank] = rankList[curRank-1]
        rankList[curRank-1] = player

        
    })
    

    
    return (Object.values(rankList))
  
   
}