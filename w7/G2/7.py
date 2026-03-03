a = [2, 3.5, 'hi', True]
b = (2, 3.5, 'hi', True) # immutable/can not be changed
c = {2, 3.5, 'hi', True}
d = {'name': "KBTU", "age": 20, "address": "Tole be"}


print(len(d))
print(d.keys())
print(d.values())
print(d.items())

# d['name'] = 'asd'

for key, value in d.items():
    print(f"{key}: ----> {value}")


