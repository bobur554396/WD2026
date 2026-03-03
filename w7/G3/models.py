
"""Person and Student class module"""

class Person:
    """Person class implementation"""
    def __init__(self, name, age): # dunder functions/magic functions
        self.name = name
        self.age = age

    # toString (Java); __str__ (Python)
    def __str__(self):
        """To string function for Person class"""
        return f"{self.name} - {self.age}"

# p = Person("Alice", 20)
# print(p)

# a = 2
# print(a)

class Student(Person):
    def __init__(self, name, age, gpa):
        super().__init__(name, age)
        self.gpa = gpa
    
    def __str__(self):
        return f"{super().__str__()} - {self.gpa}"

# s = Student("Alice", 20, 3.9)
# print(s)