# Try except block to catch errors

try:
    a = 2
    b = 3
    print(a / b)
except Exception as e:
    print(e)
finally:
    print("Clean up: closing connections/streams...")