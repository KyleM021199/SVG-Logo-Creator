class Text{
constructor(userText, color){
    this.userText = userText;
    this.color = color;
}
    //This renders the text line with user color and text input
    render(){
     return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.userText}</text>`;  
    }
}

module.exports = Text;