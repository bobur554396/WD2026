a = "hello."
b = 'world'


pattern = r"hello\."
c = a + b
c = "{} {}".format(a, b)
c = "{0} {1}".format(a, b)
c = "{1} {0}".format(a, b)
c = "{first} {second}".format(second=a, first=b)
c = f"{a} " + "{ " + f"{b}!"

print(len(c))
print(c)
print(c[0])
print(c[:3])
print(c[3:])
print(c[3:5])
print(c[3:10:2]) # [start:stop:step]
print(c[::2]) # [start:stop:step]
print(c[::-1]) # [start:stop:step]
print(c[-1])
print(c[-2])

