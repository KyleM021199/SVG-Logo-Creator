const inquirer = require('inquirer');
const CreateLogo = require('./logo.js');
const fs = require('fs/promises');
const {Triangle, Circle, Square} = require('./shapes.js');
const Text = require('./text.js');

class Maker{
    constructor(){
        this.shape = '';
        this.text = '';
        this.color ='';
    }
    runShape(){
        return inquirer
            .prompt([
            {    
            type:'list',
            message: 'Please select a shape:',
            name: 'shapeInput',
            choices:['circle', 'triangle', 'square']
            }, 
            {
                type:'input',
                message: 'input up to three characters',
                name: 'textInput',
    
            },
            {
                type:'input',
                message: 'input a shape color:',
                name: 'shapeColor',
    
            },
            {
                type:'input',
                message: 'input the text color:',
                name: 'textColor',
    
            }
            

        ])
        .then(({shapeInput, shapeColor, textInput, textColor}) => {
            let shape;
            switch (shapeInput) {
            case "circle":
                shape = new Circle(shapeInput,shapeColor);
                break;
            case "triangle":
                shape = new Triangle(shapeInput,shapeColor);
                break;
            case "square":
                shape = new Square(shapeInput,shapeColor);
                break;

            }
            let text; 
            text = new Text(textInput, textColor);
            const renderShape = new CreateLogo();
            console.log(renderShape.setShape(shape));
            console.log(renderShape.setText(text))
            console.log(renderShape.renderLogo());

            // if(shapeInput=="circle"){
            //     return fs.writeFile("logo.svg", shape.render());
            //    }
            // if(shapeInput=="triangle"){
            //     return fs.writeFile("logo.svg", shape.render());
            // }

            // if(shapeInput=="square"){
            //     return fs.writeFile("logo.svg", shape.render());
            // }
        })

    }

}
module.exports = Maker;