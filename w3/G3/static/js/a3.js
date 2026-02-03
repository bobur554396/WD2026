let counter = document.getElementById("counter");
let incrementButton = document.querySelector("#increment");
let decrementButton = document.querySelector(".decrement");
let cnt = 0;

incrementButton.addEventListener('click', function(){
    // console.log(++cnt);
    counter.innerHTML = ++cnt;
});

decrementButton.addEventListener('click', function(){
    // console.log(--cnt);
    counter.innerHTML = --cnt;
});