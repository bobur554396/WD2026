a = 'Hello'
b = "world"

c = a + ' ' + b
c = "{} {}!".format(a, b)
c = "{0} {1}!".format(a, b)
c = "{1} {0}!".format(a, b)
c = "{first} {second}!".format(first=a, second=b)
c = "{first} {second}!".format(second=a, first=b)
c = f"{a} {b}!"

c = c.upper()

print(len(c))
print(c)

for el in c:
    print(el)

for i in range(len(c)): # [0...12)
    print(c[i])

print(c)
print(c[0])
print(c[:3])
print(c[3:])
print(c[1:4])
print(c[0:8:2]) # [start:end:step]
print(c[::-1]) # reverse of the string
print(c[-1]) # last char
print(c[-2])
