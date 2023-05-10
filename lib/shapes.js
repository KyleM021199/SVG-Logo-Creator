class Shapes{
constructor(shapeChoice,color){
this.shapeChoice = shapeChoice;
this.color = color;
}
    
    

}
class Triangle extends Shapes{
    constructor(color){
        super(color)
    }
    render(){
        return `<polygon points="200,10 300,200 100,200" style="fill:${this.color};stroke-width:3;stroke:rgb(0,0,0)"/>`
    }
}

class Circle extends Shapes{
    constructor(shapeChoice,color){
        super(shapeChoice,color)
    }
    render(){
        return`<${this.shapeChoice} cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Square extends Shapes{
    constructor(color){
        super(color)
    }
    render(){
        return `<rect width="100" height="100" style="fill:${this.color};stroke-width:3;stroke:rgb(0,0,0)"/>`
    }
}
module.exports ={Triangle, Circle, Square};