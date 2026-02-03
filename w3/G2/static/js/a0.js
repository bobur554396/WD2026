let taskInput = document.querySelector(".taskInput");
let addTaskBtn = document.querySelector(".addTaskBtn");
let tasksList = document.querySelector(".tasksList");

addTaskBtn.addEventListener("click", function(){
    // console.log(taskInput.value);
    let curTask = taskInput.value;
    if(curTask === "") {
        alert("Please enter a task!");
        return;
    }
    let taskItem = document.createElement("li");
    let deleteBTN = document.createElement("button");
    deleteBTN.innerHTML = "Delete";
    taskItem.innerHTML = curTask;
    taskItem.appendChild(deleteBTN);
    tasksList.appendChild(taskItem);
    taskInput.value = "";
});