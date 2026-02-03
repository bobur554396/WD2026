console.log("This is a0.js file");

var a = 10; // Example variable declaration
let b = 'hello'; // Example variable declaration
const pi = 3.14; // Example constant declaration
// pi = 20; // This will cause an error

console.log(typeof 20);
console.log(typeof 20.2);
console.log(typeof 'hello');
console.log(typeof "hello");
console.log(typeof true);
console.log(typeof [1, 2, 3]);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {name: 'Alice', age: 25});

let student = {
    name: 'KBTU',
    age: 18,
    message: function() {
        console.log(`Hello from ${this.name}`);
    }
};

console.log(student.name);
student.name = "SITE";
student.message();
