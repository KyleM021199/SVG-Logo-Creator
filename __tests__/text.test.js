const Text = require('../lib/text.js');

describe('Text', () =>{
  test('Will render the text', () =>{
    const text = new Text("SVG", "white");
   //const err = new Error('Class must render text less than four characters');
   const svgOutput = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>`;
   expect(svgOutput).toEqual(text.render());
    });
});
