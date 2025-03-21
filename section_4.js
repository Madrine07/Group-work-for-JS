let tasks = []

function addTask(){
    let taskText = document.getElementById("taskInput").value.trim();
    if (!taskText){alert("Please enter a task!"); return; }
    //TODO: Add task to Array, clear Input, and call displayTasks()
    tasks.push(taskText);
    
    document.getElementById("taskInput").value = "";

   displayTasks();
}


function displayTasks(){
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; //clear list
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = task + ' <button class="delete-btn" onclick="deleteTask(' + index + ')">Delete</button>';
        taskList.appendChild(li);
    });
}

function deleteTask(index){
    tasks.splice(index, 1);
    displayTasks();
}
