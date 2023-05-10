import './style.css';

import TaskList from './module/TaskList.js';

const planned = document.querySelector('#tasks_lists');
const todoInput = document.querySelector('#todo_input');
const todoBtn = document.querySelector('#todo_btn');

const taskList = new TaskList(planned, todoInput, todoBtn);
taskList.init();
