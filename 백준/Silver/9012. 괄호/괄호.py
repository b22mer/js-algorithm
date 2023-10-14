for _ in range(int(input())):
    stack = []
    isOK=True
    for ch in input():
        if ch == "(":
            stack.append("(")
        else:
            if len(stack)!=0:
                stack.pop()
            else:
                isOK= False

    if len(stack)==0 and isOK==True:
        print("YES")
    else:
        print("NO")

