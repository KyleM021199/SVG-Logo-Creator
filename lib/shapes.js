class Shapes{
constructor(shapeChoice,color){
this.shapeChoice = shapeChoice;
this.color = color;
}
    
    

}
class Triangle extends Shapes{
    constructor(shapeChoice,color){
        super(shapeChoice,color)
    }
    //This renders the polygon line for a triangle with user color
    render(){
        return `<polygon points="200,10 300,200 100,200" style="fill:${this.color};stroke-width:3;stroke:rgb(0,0,0)"/>`
    }
}

class Circle extends Shapes{
    constructor(shapeChoice,color){
        super(shapeChoice,color)
    }
    //This renders the circle line with user color
    render(){
        return`<${this.shapeChoice} cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Square extends Shapes{
    constructor(shapeChoice,color){
        super(shapeChoice,color)
    }
    //This renders rect line for a square with user color
    render(){
        return `<rect width="100" height="100" style="fill:${this.color};stroke-width:3;stroke:rgb(0,0,0)"/>`
    }
}
module.exports ={Triangle, Circle, Square};