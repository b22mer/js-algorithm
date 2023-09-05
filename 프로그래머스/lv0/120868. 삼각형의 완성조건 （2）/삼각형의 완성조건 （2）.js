function solution(sides) {
    sides.sort((a,b)=> b- a);
    let top =sides[0];
    let result1 =top- (sides[0] - sides[1]);
    let result2 =sides[0]+sides[1]-(sides[0]+1);
    return result1 + result2
}