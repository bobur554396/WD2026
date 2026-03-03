a = 'Hello'
b = "world"

# String builder options
c = a + ' ' + b
c = "{} {}".format(a, b)
c = "{0} {1}".format(a, b)
c = "{1} {0}".format(a, b)
c = "{first} {second}".format(first=a, second=b)
c = f"{a} {b}!"

print(c)

for el in c:
    print(el, type(el))

for i in range(len(c)): # [0;...;len(c) - 1]
    print(c[i], type(c[i]))

# Slicing
print(c)
print(c[0])
print(c[2])
print(c[:4]) # [0:4)
print(c[4:]) # [4:end)
print(c[4:7]) # [4:7)
print(c[0:10:2]) # [start:end:step]
print(c[:]) # c[:] = c
print(c[::-1]) # reverse the string
print(c[-1]) 
print(c[-2]) 

