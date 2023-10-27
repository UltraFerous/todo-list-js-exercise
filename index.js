// Arrays to keep track of each task's state

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    completeTask: function() {
      this.complete = true;
    },
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
}
// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Clean it up"); 
const task2 = newTask("Do Laundry", "Wash clothes"); 

task2.logTaskState(); 
task2.completeTask();
task2.logTaskState(); 
