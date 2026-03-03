class Person:
    # dunder functions/magic functions
    def __init__(self, name: str, age: int): 
        self.name = name
        self.age = age
    
    def do_smth(self):
        ...

    def __str__(self): # toString() (Java); self = this (Java)
        return f"{self.name} - {self.age}"


class Student(Person):
    def __init__(self, name, age, gpa):
        super().__init__(name, age)
        self.gpa = gpa

    def __str__(self):
        return f"{super().__str__()} - {self.gpa}"

p = Person("Alice", 20)
# print(type(p))
# print(p)
s = Student("Alice", 20, 3.9)
print(s)

