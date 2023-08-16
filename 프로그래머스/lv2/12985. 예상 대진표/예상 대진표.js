function solution(n,a,b)
{
        let answer = 1;
        while(true){
            a = Math.floor((a+1)/2);
            b = Math.floor((b+1)/2);
            if(a == b)
                break;
            answer++;
        }
        return answer;
}