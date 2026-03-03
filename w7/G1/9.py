def greeting1(name):
    return f"Hello, {name}!"

def greeting(name: str = "SITE") -> str:
    return f"Hello, {name}!"

print(greeting("KBTU"))
print(greeting())