import Tasks from './Tasks.js';

class TaskList {
  constructor(planned, todoInput, todoBtn) {
    this.planned = planned;
    this.todoInput = todoInput;
    this.todoBtn = todoBtn;
  }

  render = () => {
    this.planned.innerHTML = '';
    const sortedTasks = Tasks.getSortedTasks();
    sortedTasks.forEach((task, index) => {
      const taskList = document.createElement('li');
      const check = document.createElement('input');
      const descriptionInput = document.createElement('p');
      const listBtn = document.createElement('button');
      const icons = document.createElement('i');
      icons.className = 'fa-solid fa-trash delete';
      listBtn.appendChild(icons);
      const div = document.createElement('div');
      div.className = 'listsdiv';
      // listBtn.innerText = "Remove";
      check.type = 'checkbox';
      descriptionInput.innerText = `${task.description}`;
      if (task.completed) {
        descriptionInput.classList.add('line-through');
        check.checked = true;
      }
      check.addEventListener('change', () => {
        Tasks.toggleTaskCompleted(index);
        if (task.completed) {
          descriptionInput.classList.add('line-through');
        } else {
          descriptionInput.classList.remove('line-through');
        }
      });
      listBtn.addEventListener('click', () => {
        Tasks.removeTask(index);
        this.render();
      });

      div.append(check, descriptionInput, listBtn);
      taskList.append(div);
      this.planned.appendChild(taskList);
    });
  }

  init = () => {
    this.render();
    this.todoBtn.addEventListener('click', () => {
      if (this.todoInput.value.trim() !== '') {
        Tasks.addTask(this.todoInput.value);
        this.todoInput.value = '';
        this.render();
      }
    });
  }
}

export default TaskList;
