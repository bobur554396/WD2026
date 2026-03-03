name = input("Enter your name: ")

def greeting(name: str = "SITE") -> str:
    return f"Hello {name}"


print(greeting(name))