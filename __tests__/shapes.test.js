const {Triangle, Circle, Square} = require('../lib/shapes.js');

describe("Circle", () =>{
  test("Will output a circle", () =>{
    const shapes = new Circle("circle", "red");
    const svgOutput = '<circle cx="150" cy="100" r="80" fill="red" />'
    expect(svgOutput).toEqual(shapes.render());
    });
});
