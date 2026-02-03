let count = document.getElementById("count");
let increment = document.querySelector(".inc");
let decrement = document.querySelector(".dec");

let value = 0;
increment.addEventListener('click', function(){
    count.innerHTML = ++value;
});

decrement.addEventListener('click', function(){
    count.innerHTML = --value;
});