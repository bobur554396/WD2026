try:
    a = 2
    b = 0
    print(a / b)
except Exception as e:
    print(f"An error occurred: {e}")


c = 10


# This condition will not be true, so the code inside the if block will not execute
if c > 20: # This condition is false, so the code inside this block will not execute
    print("c is greater than 20")