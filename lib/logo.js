const {Triangle, Circle, Square} = require('./shapes.js');
const Text = require('./text.js');


// const newUserShape = new
// const newUserText
class CreateLogo{
constructor(){
    this.shapeChoice='';
    this.textInput='';
}
renderLogo() {

    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shapeChoice}
        ${this.textInput}
    </svg>
    `
}
    setShape(shape){
        this.shapeChoice = shape.render();

    }

    setText(text){
        this.textInput = text.render();
    }


    
}

module.exports = CreateLogo;

// <circle cx="150" cy="100" r="80" fill="green" />
// <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>