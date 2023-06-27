function solution(numer1, denom1, numer2, denom2) {
    let sumNumer = numer1* denom2 + numer2* denom1;
    let sumDenom = denom1 * denom2;
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    let gcdVal = gcd(sumNumer, sumDenom);
    var answer = [sumNumer / gcdVal , sumDenom/gcdVal];
    return answer;
}