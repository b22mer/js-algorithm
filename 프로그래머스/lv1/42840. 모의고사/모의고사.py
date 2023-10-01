def solution(answers):
    firstVal =0
    secondVal = 0
    thirdVal = 0
    maxVal=0
    pattern1 = [1, 2, 3, 4, 5]
    pattern2 = [2, 1, 2, 3, 2, 4, 2, 5]
    pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    for i in range(len(answers)):
        if answers[i]==pattern1[i%5]:
            firstVal+=1
        if answers[i]==pattern2[i%8]:
            secondVal+=1
        if answers[i]==pattern3[i%10]:
            thirdVal+=1
    
    members= [firstVal,secondVal,thirdVal]
    maxVal = max(members)
    result= []
    
    for index, val in enumerate(members):
        if maxVal==val:
            result.append(index+1)
            
            
    return result
    
    
    
    
    
   