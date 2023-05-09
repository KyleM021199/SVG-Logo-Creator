const Circle = require('../lib/shapes.js');

describe('Shapes', () =>{
  test('Will output a shape', () =>{
    const shapes = new Circle();
    const svgOutput = 'circle'
    //const err = new Error('Class must render a shape');
    expect(shapes.render()).toEqual(svgOutput);
    });
});
