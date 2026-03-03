"Person and Student class module"

class Person:
    "Person class description"

    # constructor
    def __init__(self, name, age): # dunder functions/magic functions  
        self.name = name # self (Python) == this (Java)
        self.age = age
    
    # toString (Java)
    def __str__(self):
        return f"{self.name} - {self.age}"
    
# p = Person("Alice", 20)
# print(p)
# print(type(p))

# a = 2
# print(a)
# print(type(a))


class Student(Person):
    def __init__(self, name, age, gpa):
        super().__init__(name, age)
        self.gpa = gpa
    
    def __str__(self):
        return f"{super().__str__()} - {self.gpa}"
    
    def get_gpa(self):
        "Method for returning the student's GPA"
        return self.gpa

# s = Student("Alice", 20, 3.8)
# print(s)