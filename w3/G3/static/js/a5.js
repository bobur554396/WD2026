let text = document.querySelector('#text');
let charCount = document.querySelector('#charCount');


text.addEventListener('input', function() {
    let curCount = this.value.length;
    if(curCount <= 20){
        charCount.textContent = curCount;
    } else {
        this.value = this.value.substring(0, 20);
    }
});