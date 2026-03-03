d = {"name": "Alice", "age": 30, "is_student": False}

print(len(d))
print(d.keys())
print(d.values())
print(d.items())

d['name'] = "Bob"

for key, value in d.items():
    print(f"{key}: --> {value}")


print(d['name'])
# print(d.get('gpa'))
print(d.get('gpa', "GPA not found"))
