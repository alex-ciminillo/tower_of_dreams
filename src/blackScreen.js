import Component from "./component";



export default class BlackScreen {
    constructor(canvas, ctx, dimensions) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.dimensions = dimensions;
        this.myBackground = new Component(300, 150, "black", 0, 0, this.ctx, "other");
        this.titleWords = new Component("16px", "TitleScreen", "white", 25, 65, this.ctx, "text");
        this.titleWords2 = new Component("16px", "TitleScreen", "white", 25, 80, this.ctx, "text");
        
        
        
    }


    animate() {
        this.myBackground.update();

        this.titleWords.text = "\"...the one that makes it to the top"
        this.titleWords.update();
        this.titleWords2.text = "will have their greatest desire fulfilled...\""
        this.titleWords2.update();
    }



}