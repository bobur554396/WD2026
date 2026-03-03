name = input("Enter your name: ")


def greeting1(name):
    return f"hello {name}!"

def greeting2(name: str = 'KBTU') -> str:
    return f"hello {name}!"


print(greeting2(name))

