let a = [1, 2.4, 'hello', true, ['a']];
a.push(42);
a.pop();
a.unshift('start');

console.log(a);


function divider(n, option){
    let line = '';
    for(let i = 0; i < n; i++){
        line += '-';
    }
    // console.log('Option #: ' + option);
    console.log(line);
    console.log(`Option #: ${option}`);
    console.log(line);
}

// Loop through the array

// Option 1.
divider(20, 1)
for(let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

// Option 2.
divider(20, 2)
for(let item of a) {
    console.log(item);
}

// Option 3.
divider(20, 3);
for(let index in a){
    console.log(a[index]);
}

// Option 4.
divider(20, 4);
a.forEach(function(item, index){ // anonymous function
    console.log(`Index ${index}: ${item}`);
});

// Option 5.
divider(20, 5);
a.forEach((item, index) => { // arrow function
    console.log(`Index ${index}: ${item}`);
});


// Option 6.
divider(20, 6);
function showItem(item, index){ // named function
    console.log(`Index ${index}: ${item}`);
}
a.forEach(showItem);