const addBoolean = require('../src/addBoolean');

test('test adding booleans', () => {
  //negating matchers
  expect(addBoolean(false, false)).not.toBe(1);
  
});