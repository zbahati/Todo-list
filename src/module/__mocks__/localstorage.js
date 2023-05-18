const tasks = [
  {
    id: 1,
    taskDesc: 'Learn Testing',
    completed: false,
  },
  {
    id: 2,
    taskDesc: 'Collaborative works',
    completed: true,
  },
  {
    id: 3,
    taskDesc: 'Porfolio Project',
    completed: false,
  },
  {
    id: 4,
    taskDesc: 'Professional Git hub profile lesson',
    completed: false,
  },
];

const taskManager = {
  addNewTask: (task) => {
    tasks.push(task);
    return tasks;
  },

  removeTaskById: (id) => {
    const tasksLeft = tasks.filter((task) => task.id !== id);
    tasksLeft.forEach((task, index) => {
      task.id = index + 1;
    });
    return tasksLeft;
  },

};

const editTask = (item) => {
  const { id, taskDesc } = item;
  const editedTask = tasks.find((instance) => instance.id === id);

  editedTask.taskDesc = taskDesc;
};

const clearTask = () => {
  const Newtasks = tasks.filter((task) => !task.completed);
  return Newtasks;
};

const updateTask = (taskId) => {
  const taskStatus = tasks.find((task) => task.id === taskId);
  if (taskStatus) {
    taskStatus.completed = true;
  }
  return taskStatus;
};

module.exports = {
  editTask,
  clearTask,
  updateTask,
  tasks,
  taskManager,
};
