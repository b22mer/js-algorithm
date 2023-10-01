def solution(sizes):
    newArr =[]
    garomax=-1
    seromax=-1
    for size in sizes:
        if size[0]>= size[1]:
            newArr.append([size[0], size[1]])
        else:
            newArr.append([size[1], size[0]])
    for i in newArr:
        if i[0]>=garomax:
            garomax=i[0]
        
        if i[1]>=seromax:
            seromax=i[1]
    
    return garomax*seromax