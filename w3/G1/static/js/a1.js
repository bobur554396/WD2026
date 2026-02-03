// - [ ] Creation of variables 
console.log("This is a0.js file");

var a = 10; // Global scope variable

let b = true; // Block scope variable
const c = "KBTU"; // Constant variable

console.log(typeof a); // number
console.log(typeof b);
console.log(typeof c);
console.log(typeof undefined);
console.log(typeof null);

// - [ ] Conditional statements
if (a > 5) {
    console.log("a is greater than 5");
} else {
    console.log("a is not greater than 5");
}

console.log(2 == 2);
console.log(2 == "2");
console.log(2 === "2"); // strict equality
console.log(2 !== "2");
console.log("A" == 65);

