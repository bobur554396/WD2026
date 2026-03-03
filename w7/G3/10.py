# Iterable objects/Collections
a = [3, 3.8, 'hi', True] # list
b = (3, 3.8, 'hi', True) # tuple - immutable list
c = {3, 3.8, 'hi', True} # set - unique list of values
# dict/dictionary/object/map
d = {
    "name": "KBTU", 
    "address": {
        "city": "Almaty", 
        "street": "Tole bi",
        "house": 59
    }, 
    "type": "University"
} 

print("-"*30)

# print(d['name1']) # error
print(d.get('name1', 'Name1 prop is not exists'))

print("-"*30)

print(len(d))
print(d.keys())
print(d["address"].keys())
# print(d.values())
# print(d.items())

# d["name1"] = "SITE"
 
print("-"*30)

for key, value in d.items():
    print(f"{key}: ====> {value}")
