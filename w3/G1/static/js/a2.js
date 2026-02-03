// - [ ] Loops

function separator(n, option=1){
    // console.log('Option: ' + option);
    console.log(`Option: ${option}`);
    let line = ''
    for(let i = 0; i < n; i++) {
        line += '-';
    }
    console.log(line);
}

let arr = [1, 2.4, 'hello', true];
arr.push(100); // adding element to the end
arr.pop(); // removing last element
arr.unshift('first');
console.log(arr);


// Option 1.
separator(25, 1);
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Option 2.
separator(25, 2);
for(let index in arr) {
    console.log(arr[index]);
}

// Option 3.
separator(25, 3);
for(let elm of arr) {
    console.log(elm);
}


// Option 4.
separator(25, 4);
arr.forEach(function(elm, index){ // anonymous function
    console.log(`Index: ${index}, Element: ${elm}`);
});


// Option 5.
separator(25, 5);
function showElement(elm, index){ // Named function
    console.log(`Index: ${index}, Element: ${elm}`);
}
arr.forEach(showElement);

