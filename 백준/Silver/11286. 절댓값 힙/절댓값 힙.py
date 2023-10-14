import heapq
import sys

input = sys.stdin.readline
hq = []

for _ in range(int(input())):
    ele = int(input())
    if(ele!=0):
        heapq.heappush(hq, (abs(ele),ele))
    else:
        print(heapq.heappop(hq)[1] if hq else 0 )

