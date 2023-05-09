const Text = require('../lib/text.js');

describe('Text', () =>{
  test('Will render the text', () =>{
    const text = new Text();
    const err = new Error('Class must render text less than four characters');
    expect(text.render()).toThrow(err)
    });
});
