let taskInput = document.querySelector('.taskInput');
let addTaskBtn = document.querySelector('.addTaskBtn');
let taskList = document.querySelector('.taskList');

addTaskBtn.addEventListener('click', function() {
    // console.log(taskInput.value);
    let currentTask = taskInput.value;
    if(currentTask === '') {
        alert('Please enter a task title.');
        return;
    }
    let newItem = document.createElement('li');
    newItem.innerHTML = currentTask;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'x';
    newItem.appendChild(deleteBtn);
    let edit = document.createElement('button');
    edit.innerHTML = 'edit';
    newItem.appendChild(edit);

    taskList.appendChild(newItem);
    taskInput.value = '';
});