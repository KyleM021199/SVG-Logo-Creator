const {Triangle, Circle, Square} = require('../lib/shapes.js');

describe("Circle", () =>{
  test.only("Will output a circle", () =>{
    const shapes = new Circle("circle");
    const svgOutput = 'circle'
    expect(svgOutput).toEqual(shapes);
    });
});
