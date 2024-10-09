// Get references to the elements
const addTaskButton = document.getElementById("add-task");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const Clear = document.getElementById("clear");


// When "Add Task" button is clicked
addTaskButton.onclick = function() {
  const taskText = taskInput.value.trim(); // Get the task input

  // Check if input is empty
  if (taskText === "") {
    alert("Please enter a task.");
    return; // Stop if no task is entered
  }

  // Create a new task (li element)
  const newTask = document.createElement("li");
  newTask.textContent = taskText; // Add the task text

  // Create a "Complete" button for each task
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  
  
  // When "Complete" button is clicked
  completeButton.onclick = function() {
    completeButton.classList.add("CB");
    completeButton.innerHTML = "✔️" ;// Strike through task text
  };

  // Create a "Delete" button for each task
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("D");
  deleteButton.textContent = "Delete";

  // When "Delete" button is clicked
  deleteButton.onclick = function() {
    newTask.remove(); // Remove the task from the list
  };

  // Add the buttons to the task item
  newTask.appendChild(completeButton);
  newTask.appendChild(deleteButton);

  // Add the new task to the list
  taskList.appendChild(newTask);

  // Clear the input box after adding the task
  taskInput.value = "";
};

Clear.onclick = function() {
    taskInput.value = "" ; }
