// Problem: User interaction does not work
// Solution: Add interactivity so the user can manage daily tasks
var taskInput = document.getElementById("new-task");
var addButton = getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");

// Plan: 1. Add tasks
var addTask = function (){

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

  //When delete button is pressed
    //remove the parent list item from the ul
};

// 4. Mark a task as complete
var taskCompleted = function(){

  //When the checkbox is checked
    //Append the task list item to the #completed-tasks
};

// 5. Mark a task as incomplete
var taskIncomplete = function(){

  //When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks
};
