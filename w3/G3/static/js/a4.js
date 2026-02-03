let color = document.querySelector("#color");
let box = document.querySelector(".box");

color.addEventListener("input", function(event){
    // console.log(event.target.value);
    // let c = event.target.value;
    // let c = color.value;
    let c = this.value;
    box.style.backgroundColor = c;
});