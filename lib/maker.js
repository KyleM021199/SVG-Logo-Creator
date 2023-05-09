const inquirer = require('inquirer');
const { createLogo } = require('./logo.js');
const { writeFile } = require('fs/promises');

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
            

        ])
        .then(() => {

        })

    }
    
    runText(){
       return inquirer
       .prompt([
            {
            type:'input',
            message: 'input up to three characters',
            name: 'textInput',

           },

       ])
       
       .then(() => {

       })
    }

    addColor(){
        return inquirer
        .prompt([
            {
                type:'input',
                message: 'input up to three characters',
                name: 'colorInput',
    
               },

        
        ])
        .then(() => {

        })

        

    }
}