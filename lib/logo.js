const Shapes = require('./shapes.js');
const Text = require('./text.js');
const Color = require('./color.js');

function createLogo(shape, text, color) {

    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <${shape}> cx="150" cy="100" r="80" fill="${color}"</>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</tex
    </svg>
    `
}

module.exports = { createLogo };

// <circle cx="150" cy="100" r="80" fill="green" />
// <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>