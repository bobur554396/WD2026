a = [2, 3.5, 'hi', True]
b = (2, 3.5, 'hi', True) # immutable/can not be changed
c = {2, 3.5, 'hi', True}
d = {'name': "KBTU", "age": 20, "address": "Tole be"}

print(type(a))
print(type(b))
print(type(c))
print(type(d))

print(len(a))

a.append(12)
a.pop()

print(len(a))

for el in a:
    print(el)



