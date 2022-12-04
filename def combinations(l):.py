def combinations(l):
  result = []
  for x in l:
    lst = []
    for c in result:
        lst.append(c + [x])
    result += lst
    #result = result + [c + [x] for c in result]
  return result

print(combinations([1,2,3]))