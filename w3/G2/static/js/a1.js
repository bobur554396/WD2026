console.log("This is a0.js file");

var c = 30; // function scope variable

function showA() {
    let a = 10; // block scope variable
    const b = 20; // block scope variable
    console.log("Value : " + a + ", " + b + ", " + c);
}
showA();
console.log(c);


let student = {
    name: "Alice",
    age: 21,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
}
student.greet();
console.log("Student Name: " + student.name);   

console.log(typeof 12);
console.log(typeof 12.3);
console.log(typeof true);
console.log(typeof 'true');
console.log(typeof "true");
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {name: "KBTU"});



