const { hello } = require('./index');

test('hello returns correct message', () => {
  expect(hello()).toBe('Hello from Mac mini!');
});
