let counter = 0;
let count = document.getElementById("count");
let incrementButton = document.getElementById("plus");
let decrementButton = document.getElementById("minus");

incrementButton.addEventListener("click", function(){
    counter++;
    count.innerHTML = counter;
});

decrementButton.addEventListener("click", function(){
    counter--;
    count.innerHTML = counter;
});