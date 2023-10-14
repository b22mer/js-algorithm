from collections import deque


N = int(input())
que = deque()
for i in range(N):
    que.append(i+1)

while len(que)!=1:
    que.popleft()
    que.append(que.popleft())

print(que[0])