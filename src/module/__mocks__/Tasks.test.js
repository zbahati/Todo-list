import taskManager from './localstorage.js';

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

  describe('subtraction function test unit', () => {
    test('should remove appropriate task upon user actions', () => {
      expect(
        taskManager.removeTaskById(1),
      ).toStrictEqual([]);
    });
  });
});