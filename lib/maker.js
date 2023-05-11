//brings in everything needed to build up the app 
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
    // this method runs the inquirer's four questions and outputs a logo.svg file
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
            text = new Text(textInput.toUpperCase(), textColor);
            const renderShape = new CreateLogo();
            renderShape.setShape(shape);
            if(textInput.length < 4){
            renderShape.setText(text);
            }else{
            //errors out if text goes beyond 3 characters
             console.log("There can be only up to 3 characters");
             console.log(error);
            }
            // writes the created logo to a file named "logo.svg"
            return fs.writeFile("logo.svg",renderShape.renderLogo());

        })
        .then(() => {
            console.log("Your logo has been made!");

        })
        .catch((error) => {
            console.log(error);
            console.log(" Something went wrong.");
          });

    }

}
module.exports = Maker;