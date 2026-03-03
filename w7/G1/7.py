a = [3, True, "hello", 3.14]
b = (3, True, "hello", 3.14)
c = {3, True, "hello", 3.14}
d = {"name": "Alice", "age": 30, "is_student": False}

print(type(a))
print(type(b))
print(type(c))
print(type(d))


a.append(10)
# b.append(10) # This will raise an error because tuples are immutable
c.add(10)
c.add(3)
c.add(10)

print(len(a))
print(len(b))
print(len(c))
print(len(d))


