const inquirer = require('inquirer');
const { createLogo } = require('./logo.js');
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
            type:'checkbox',
            message: 'Please select a shape:',
            name: 'shapeInput',
            choices:['circle', 'triangle', 'square']
            }, 
            {
                type:'input',
                message: 'input up to three characters',
                name: 'colorInput',
    
            },
            

        ])
        .then(({shapeInput, colorInput}) => {
            let shape;
            switch (shapeInput) {
            case "circle":
                shape = new Circle(colorInput);
                break;
            case "triangle":
                shape = new Triangle(colorInput);
                break;
            case "square":
                shape = new Square(colorInput);
                break;

            }
        })

    }
    

    // addColor(){
    //     return inquirer
    //     .prompt([
    //         {
    //             type:'input',
    //             message: 'input up to three characters',
    //             name: 'colorInput',
    
    //            },

        
    //     ])
    //     .then(() => {

    //     })

        

    // }
}
module.exports = Maker;