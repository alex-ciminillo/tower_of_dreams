import Component from './component'
import Background from './../images/title_screen.png'
import BeginRed from './../images/begin_red.png'
import BeginBlue from './../images/begin_blue.png'
import BeginYellow from './../images/begin_yellow.png'

export default class Title {

    constructor(canvas, ctx, dimensions) {
        this.canvas = canvas;
        this.mouseState = "hover";
        this.ctx = ctx;
        this.dimensions = dimensions;
        this.btn = new Component(80, 20, BeginRed, 110, 110, this.ctx, "image");
        this.mousePos = new Component("9px", "Consolas", "black", 220, 10, this.ctx, "text");
        this.myBackground = new Component(300, 150, Background, 0, 0, this.ctx, "image");
        this.titleWords = new Component("16px", "TitleScreen", "black", 10, 15, this.ctx, "text");
        this.titleWords2 = new Component("16px", "TitleScreen", "black", 10, 30, this.ctx, "text");
        this.titleScreen = true;
        this.gx = 0;
        this.gy = 0;
    }


    animate() {
        this.myBackground.newPos();
        this.myBackground.update();
        this.btn.newPos();
        this.btn.update();
        this.mousePos.text = `${this.gx.toFixed()}, ${this.gy.toFixed()}`
        this.mousePos.update();
        this.titleWords.text = "\"...the one that makes it to the top"
        this.titleWords.update();
        this.titleWords2.text = "will have their greatest desire fulfilled...\""
        this.titleWords2.update();
        return this.titleScreen;
    }





}