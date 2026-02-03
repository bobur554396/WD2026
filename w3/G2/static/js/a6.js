let text = document.querySelector('#text');
let charCount = document.querySelector('#charCount');

text.addEventListener('input', function(event){
    // console.log(event.target.value);
    // console.log(event.target.value.length)
    let currentLength = event.target.value.length;
    if(currentLength <= 20) {
        charCount.innerHTML = currentLength;
    } else {
        event.target.value = event.target.value.substring(0, 20);
    }
    
});