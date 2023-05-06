const Shapes = require('../lib/shapes.js');

describe('Shapes', () =>{
  test('', () =>{
    const shapes = new Shapes();
    const err = new Error('Class must render a shape');
    expect(shapes.render).toThrow(err)
    });
});
