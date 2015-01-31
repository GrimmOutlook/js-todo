// Problem: User interaction does not work
// Solution: Add interactivity so the user can manage daily tasks
var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");

// Plan: 1. Add tasks
var addTask = function (){
  console.log("Add Task");
  // When button is pressed,
  // Create a new list item with the text from #new-task
    //input (checkbox)
    //label
    //input (text)
    //button.edit
    //button.delete
    //Each of the above elements will need to be modified and appended
};

// 2. Edit an existing task
var editTask = function (){
  console.log("Edit Task");
  //When the edit button is pressed:
    //if the class of the parent is .editMode
      //switch from .editMode
      //label text to become the input's value
    //else
      //switch to .editMode
      //input value becomes the label's text

    //Toggle .editMode on the parent
};

// 3. Delete an existing task
var deleteTask = function(){
  console.log("Delete Task");
  //When delete button is pressed
    //remove the parent list item from the ul
};

// 4. Mark a task as complete
var taskCompleted = function(){
  console.log("Task Completed");
  //When the checkbox is checked
    //Append the task list item to the #completed-tasks
};

// 5. Mark a task as incomplete
var taskIncomplete = function(){
  console.log("Task Incomplete");
  //When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks
};


//Set the click handler to the addTask function
//addButton????
addButton.onclick = addTask;



