import './style.css';

import TaskList from './module/TaskList.js';

const planned = document.querySelector('#tasks_lists');
const todoInput = document.querySelector('#todo_input');
const todoBtn = document.querySelector('#todo_btn');
const clearCompletedBtn = document.querySelector('#clear-completed-btn');

const taskList = new TaskList(planned, todoInput, todoBtn, clearCompletedBtn);
taskList.init();
