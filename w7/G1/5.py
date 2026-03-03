a = 'Hello, world! \'KBTU\''
b = "Hello, world! \"KBTU\" "

print(type(a))
print(type(b))

print(a)
print(b)
print(a == b)

c = """sumary_line
Keyword arguments:
argument -- description
Return: return_description
"""

d = '''
sumary_line
multi line
string
'''

e = "hello"
print(len(e))

for i in e:
    print(i)

print('-' * 30)

for i in range(len(e)): # [0, ... len(e) - 1]
    print(e[i])


