import { taskManager } from './localstorage.js';

describe('Testing ', () => {
  describe('Add Task Test', () => {
    test('Add Task', () => {
      const tasks = taskManager.addNewTask({
        task: 'Task 1',
        id: 1,
        status: false,
      });

      document.body.innerHTML = '<div>'
      + '  <ul id="list"></ul>'
      + '</div>';

      const ullem = document.getElementById('list');
      const lielem = document.createElement('li');
      lielem.innerHTML = tasks.task;
      ullem.appendChild(lielem);

      expect(tasks).not.toStrictEqual([]);
    });
  });

  test('Add one new item to the list', () => {
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
  });

  describe('subtraction function test unit', () => {
    test('should remove appropriate task upon user actions', () => {
      expect(
        taskManager.removeTaskById(1),
      ).not.toStrictEqual([]);
    });
  });
});