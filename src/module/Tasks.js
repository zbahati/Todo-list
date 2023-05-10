// import Task from './Task.js';

// const Tasks = {
//   tasks: JSON.parse(localStorage.getItem('tasks')) || [],

//   saveData() {
//     localStorage.setItem('tasks', JSON.stringify(this.tasks));
//   },

//   addTask(description) {

//     const newTask = new Task(description, false, this.tasks.length + 1);
//     this.tasks.push(newTask);
//     this.saveData();
//   },

//   removeTask(index) {
//     this.tasks.splice(index, 1);
//     this.tasks.forEach((task, index) => {
//       task.index = index + 1;
//     });
//     this.saveData();
//   },

//   toggleTaskCompleted(index) {
//     const task = this.tasks[index];
//     task.completed = !task.completed;
//     this.saveData();
//   },

//   getSortedTasks() {
//     return this.tasks.sort((a, b) => a.index - b.index);
//   },
// };

// export default Tasks;

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const Tasks = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],

  saveData: () => {
    localStorage.setItem('tasks', JSON.stringify(Tasks.tasks));
  },

  addTask: (description) => {
    const newTask = new Task(description, false, Tasks.tasks.length + 1);
    Tasks.tasks.push(newTask);
    Tasks.saveData();
  },

  removeTask: (index) => {
    Tasks.tasks.splice(index, 1);
    Tasks.tasks.forEach((task, index) => {
      task.index = index + 1;
    });
    Tasks.saveData();
  },

  toggleTaskCompleted: (index) => {
    const task = Tasks.tasks[index];
    task.completed = !task.completed;
    Tasks.saveData();
  },

  getSortedTasks: () => Tasks.tasks.sort((a, b) => a.index - b.index),
};

export default Tasks;
