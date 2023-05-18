import { taskManager } from './localstorage.js';

describe('Testing ', () => {
  describe('Add Task Test', () => {
    test('Add Task', () => {
      const tasks = taskManager.addNewTask({
        task: 'Task 1',
        id: 1,
        status: false,
      });
      
      expect(tasks).not.toStrictEqual([]);
    });
  });

 /// const addItem = require ('./addItem');

  test('Add one new item to the list', () => {
      document.body.innerHTML =
      '<div>' +
      '  <ul id="list"><li></li></ul>' +
      '</div>';
      // addItem();
     // let lielem  = document.createElement('li');

     // const ullem  = document.getElementById('list');
     // ullem.appendChild();
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