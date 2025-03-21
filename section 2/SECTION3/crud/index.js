// Add a task
function addTask(){
let taskText = document.getElementById('taskInput').value.trim();
if (!taskText){alert("please enter a task!"); return; }
//TODO: add task to Array, clear InputDeviceInfo, and call displayTasks()
}

//display tasks
function displayTasks(){
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear list
    // TODO: loop throgh tasks array, create <li>elements, and add delete button
}

// Delete task
function deleteTask(index){
    //TODO: Remove task using splice() and refresh list
}