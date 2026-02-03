let arr = [1, 'hi', true, ['a']];
arr.push(42);
arr.pop();
// b = arr.slice(1, 3);
// console.log(b);
// arr.splice(0, 2);
arr.unshift('start');
console.log(arr, arr.length);


function separator(option){
    let line = '';
    for(let i = 0; i < 20; i++) {
        line += '-';
    }
    console.log(line);
    console.log(`Option #${option}`);
    console.log(line);
}

// Option 1.
separator(1);
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Option 2.
separator(2);
for(let elm of arr) {
    console.log(elm);
}

// Option 3.
separator(3);
for(let indx in arr) {
    console.log(arr[indx]);
}

// Option 4.
separator(4);
let i = 0;
while(i < arr.length) {
    console.log(arr[i]);
    i++;
} 

// Option 5.
separator(5);
arr.forEach(function(elm, indx) { // anonymous function
    console.log(elm, indx);
});

// Option 6.
separator(6);
function showItem(elm, indx) { // named function
    console.log(elm, indx);
}
arr.forEach(showItem);

c = [1, 2, 3, 4, 5];
d = c.map(function(elm) {
    return elm * 2;
});
console.log(d);

even = c.filter(function(elm) {
    return elm % 2 === 0;
});
console.log(even);