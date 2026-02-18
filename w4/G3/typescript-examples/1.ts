// let a = 2;
let a: number = 2;
// a = 'hello'; // error
let isOk: boolean = true;

// function sum(a, b){
//     return a + b;
// }
// sum('2', 3);

function sum(a: number, b: number): number {
    return a + b;
}
// console.log(sum(2, 3));


let student = {
    name: 'John',
    age: 20,
    isStudent: true
}
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
