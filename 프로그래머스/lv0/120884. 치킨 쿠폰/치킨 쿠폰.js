function solution(chicken) {
    let coupon = chicken, serviceChickenSum = 0

    while(coupon >= 10){
        // 쿠폰으로 치킨 주문
        const newChickenService = Math.floor(coupon/10)
        // 주문한 서비스 치킨 Count
        serviceChickenSum += newChickenService
        // 남은 쿠폰 갯수 + 주문한 서비스 치킨으로 얻은 쿠폰 합쳐서 계산
        coupon = coupon % 10 + newChickenService
    }
    return serviceChickenSum

}


// function solution(chicken) {
    
//     let result = 0;
//     let etc = 0;
    
//     if(chicken<10) return 0;
    
    
//     while(chicken>=10){
//         etc+= chicken%10;
//         chicken = Math.floor(chicken/10);
//         result +=chicken;
//     } 
    
    
//     return result + (etc<10 ? 0 : Math.floor(etc/10));

// }