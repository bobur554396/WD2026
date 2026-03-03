# Iterable objects/Collections
a = [3, 3.8, 'hi', True] # list
b = (3, 3.8, 'hi', True) # tuple - immutable list
c = {3, 3.8, 'hi', True} # set - unique list of values
d = {"name": "KBTU", "address": "Tole bi", "type": "University"} # dict/dictionary/object/map

# List
print(len(a))
a.append(5)
a.pop()
print(len(a))
print(type(a))

# Tuple
# b.append(123) # error

# Set
print(len(c))
c.add(3)
print(len(c))
print(c)

