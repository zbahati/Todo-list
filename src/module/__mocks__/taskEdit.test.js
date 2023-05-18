import {
  editTask, clearTask, updateTask, tasks,
} from './localstorage.js';

describe('Testing', () => {
  test('Test for ClearCompleted', () => {
    const clearCompletedTask = clearTask();
    expect(clearCompletedTask.length).toBe(3);
  });

  test('Test of Updating', () => {
    const editingTest = {
      id: 1,
      taskDesc: 'David',
      completed: false,
    };

    editTask(editingTest);
    expect(tasks[0].taskDesc).toBe('David');
  });

  test('Check if task is completed', () => {
    const taskId = 2;

    const taskchecked = updateTask(taskId);

    expect(taskchecked.completed).toBe(true);
  });
});