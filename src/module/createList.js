const task = [
  {
    description: 'Learn basic fundamentals',
    completed: false,
    index: 4,
  },
  {
    description: 'Take break of 15 munite',
    completed: false,
    index: 2,
  },
  {
    description: 'Meet my coding partner after break',
    completed: false,
    index: 3,
  },
  {
    description: 'Meet my coding partner after break',
    completed: true,
    index: 1,
  },
];

const Todo = () => {
  const planned = document.getElementById('tasks_lists');
  planned.innerHTML = '';
  task.sort((a, b) => a.index - b.index);
  task.forEach((task) => {
    const taskList = document.createElement('li');
    const check = document.createElement('input');
    const descriptionInput = document.createElement('input');
    const listBtn = document.createElement('button');
    const div = document.createElement('div');
    div.className = 'listsdiv';
    listBtn.innerHTML = '';
    listBtn.innerText = 'Remove';
    check.type = 'checkbox';
    descriptionInput.type = 'text';
    descriptionInput.value = `${task.description}`;
    div.append(check, descriptionInput, listBtn);
    taskList.append(div);
    if (task.completed) {
      taskList.classList.add('completed');
    }
    planned.appendChild(taskList);
  });
};

export default Todo;
