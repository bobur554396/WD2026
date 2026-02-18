let a = 2; // internally will be of type number
// a = 'hello';
let b: number = 3; // explicitly defined as number
// b = 'hello';

// console.log(a + b);

let student = {
    name: 'John',
    age: 20,
    isEnrolled: true
};

console.log(student.name);
// console.log(student.gpa); // This will give an error because 'gpa' is not defined in the 'student' object.


// function add1(x, y){
//     return x + y;
// }


// int sum(int a, int b){
//     return a + b;
// }


function add(x: number, y: number): number {
    return x + y;
}


class Person {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    gpa: number;
    
    constructor(name: string, age: number, gpa: number) {
        super(name, age);
        this.gpa = gpa;
    }
}


interface Vehicle {
    make: string;
    model: string;
    year: number;
}

let car: Vehicle = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
};

let version: number = 21;
let isActive: boolean = true;
let items: string[] = ['a', 'b', 'c'];
// Any type (avoid when possible)
let data: any = 'could be anything';
// Union types
let id: string | number = 123;
// Type inference (TypeScript figures it out)
let inferred = 'TypeScript knows this is a string';

// Enum definition
enum CourseLevel {
    Beginner = 'BEGINNER',
    Intermediate = 'INTERMEDIATE',
    Advanced = 'ADVANCED'
}
