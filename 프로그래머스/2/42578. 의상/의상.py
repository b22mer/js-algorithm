import math
def solution(clothes):
    d = dict();
    sumOfCnt = len(clothes)
    # print(sumOfCnt)
    for clothe in clothes:
        cloType = clothe[1]
        if cloType in d:
            d[cloType]+=1
        else:
            d[cloType]=1
   
    for k, v in d.items():
        v =  int(math.factorial(v)/math.factorial(v-1) + 1)
        d[k]= v
    result =1
    for e in d.values():
        result *=e
        
    return (result-1)

