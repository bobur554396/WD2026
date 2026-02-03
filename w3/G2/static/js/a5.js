let colorInput = document.getElementById('color');
let box = document.querySelector('.box');

colorInput.addEventListener('input', function(event) {
    // console.log(event.target.value);
    let color = event.target.value;
    box.style.backgroundColor = color;
    box.style.color = "#fff";
    box.style.fontSize = "3em";
    box.innerHTML = color;
});