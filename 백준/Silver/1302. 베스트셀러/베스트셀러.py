d= dict()

for _ in range(int(input())):
    book = input()
    if book in d:
        d[book]+=1
    else:
        d[book]=1

m = max(d.values())
candidate = []

for k, v in d.items():
    if v==m:
        candidate.append(k)
    
candidate.sort()
print(candidate[0])
