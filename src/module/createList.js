// // const planned = document.querySelector('#tasks_lists');
// // const todoInput = document.querySelector('#todo_input');
// // const todoBtn = document.querySelector('#todo_btn');

// // let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// // const saveData = () => {
// //   localStorage.setItem('tasks', JSON.stringify(tasks));
// // };

// // const Todo = () => {
// //   planned.innerHTML = '';
// //   tasks.sort((a, b) => a.index - b.index);
// //   tasks.forEach((task, index) => {
// //     const taskList = document.createElement('li');
// //     const check = document.createElement('input');
// //     const descriptionInput = document.createElement('p');
// //     const listBtn = document.createElement('button');
// //     const div = document.createElement('div');
// //     div.className = 'listsdiv';
// //     listBtn.innerText = 'Remove';
// //     check.type = 'checkbox';
// //     descriptionInput.innerText = `${task.description}`;
// //     if (task.completed) {
// //       descriptionInput.classList.add('line-through');
// //       check.checked = true;
// //     }
// //     check.addEventListener('change', () => {
// //       task.completed = check.checked;
// //       if (task.completed) {
// //         descriptionInput.classList.add('line-through');
// //       } else {
// //         descriptionInput.classList.remove('line-through');
// //       }
// //       saveData();
// //     });
// //     listBtn.addEventListener('click', () => {
// //       tasks.splice(index, 1);
// //       tasks.forEach((task, index) => {
// //         task.index = index + 1;
// //       });
// //       saveData();
// //       Todo();
// //     });

// //     div.append(check, descriptionInput, listBtn);
// //     taskList.append(div);
// //     planned.appendChild(taskList);
// //   });
// // };

// // todoBtn.addEventListener('click', () => {
// //   const newTask = {
// //     description: todoInput.value,
// //     completed: false,
// //     index: tasks.length + 1,
// //   };
// //   tasks.push(newTask);
// //   saveData();
// //   todoInput.value = '';
// //   Todo();
// // });

// // export default Todo;

// const taskList = document.querySelector('#tasks_lists');
// const todoInput = document.querySelector('#todo_input');
// const todoBtn = document.querySelector('#todo_btn');

// let taskData = JSON.parse(localStorage.getItem('tasks')) || [];

// const saveData = () => {
//   localStorage.setItem('tasks', JSON.stringify(taskData));
// };

// const createTaskElement = (task, index) => {
//   const taskListElement = document.createElement('li');
//   const check = document.createElement('input');
//   const descriptionElement = document.createElement('p');
//   const deleteBtn = document.createElement('button');
//   const div = document.createElement('div');
//   div.className = 'listsdiv';
//   deleteBtn.innerText = 'Remove';
//   check.type = 'checkbox';
//   descriptionElement.innerText = `${task.description}`;
//   if (task.completed) {
//     descriptionElement.classList.add('line-through');
//     check.checked = true;
//   }
//   check.addEventListener('change', () => {
//     updateTaskCompletion(index, check.checked);
//   });
//   deleteBtn.addEventListener('click', () => {
//     deleteTask(index);
//   });
//   div.append(check, descriptionElement, deleteBtn);
//   taskListElement.append(div);
//   return taskListElement;
// };

// const renderTaskList = () => {
//   taskList.innerHTML = '';
//   taskData.sort((a, b) => a.index - b.index);
//   taskData.forEach((task, index) => {
//     const taskElement = createTaskElement(task, index);
//     taskList.appendChild(taskElement);
//   });
// };

// const updateTaskCompletion = (index, isCompleted) => {
//   taskData[index].completed = isCompleted;
//   if (isCompleted) {
//     taskList.children[index].querySelector('p').classList.add('line-through');
//   } else {
//     taskList.children[index].querySelector('p').classList.remove('line-through');
//   }
//   saveData();
// };

// const deleteTask = (index) => {
//   taskData.splice(index, 1);
//   taskData.forEach((task, index) => {
//     task.index = index + 1;
//   });
//   saveData();
//   renderTaskList();
// };

// const addNewTask = () => {
//   const newTask = {
//     description: todoInput.value,
//     completed: false,
//     index: taskData.length + 1,
//   };
//   taskData.push(newTask);
//   saveData();
//   todoInput.value = '';
//   renderTaskList();
// };

// todoBtn.addEventListener('click', addNewTask);

// renderTaskList();

// export default renderTaskList;
