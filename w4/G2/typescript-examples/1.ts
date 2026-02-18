let a: number = 2;
let a1 = 2; // a1 is also number data type;
// a = 'hello';

console.log(a + a1);

// function sum(a, b){
//     return a + b;
// }

// console.log(sum('1', 2));

// int sum(int a, int b){
//     return a + b;
// }

function sum(a: number, b: number): number {
    return a + b;
}

// sum('1', 2);

let student = {
    name: 'John',
    age: 20,
    isStudent: true
};

console.log(student.name);
// console.log(student.gpa);


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

interface Employee {
    name: string;
    age: number;
    position: string;
}

let employee: Employee = {
    name: 'Alice',
    age: 25,
    position: 'Developer'
};