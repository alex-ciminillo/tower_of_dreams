import Component from './title_component'
import Background from './../images/title_screen.png'
import BeginRed from './../images/title_screen.png'
import BeginBlue from './../images/title_screen.png'
import BeginYellow from './../images/title_screen.png'

export default class Title {

    constructor(canvas) {
        this.canvas = canvas
        this.mouseState = "hover"
        this.ctx = canvas.getContext("2d");
        this.ctx.scale(4,4)
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.btn = new Component(80, 20, "red", 110, 110, this.ctx, "button")
        this.mousePos = new Component("9px", "Consolas", "black", 220, 10, this.ctx, "text");
        this.myBackground = new Component(100, 100, Background, 0, 0, this.ctx, "image");
        this.titleWords = new Component("16px", "TitleScreen", "black", 10, 15, this.ctx, "text")
        this.titleWords2 = new Component("16px", "TitleScreen", "black", 10, 30, this.ctx, "text")
        this.registerEvents();
        this.gx = 0;
        this.gy = 0;
        this.animate();
        
    }

    registerEvents() {
        this.boundClickHandler = this.click.bind(this);
        this.boundHoverHandler = this.hover.bind(this);
        this.ctx.canvas.addEventListener("mousedown", this.boundClickHandler);
        this.ctx.canvas.addEventListener("mouseup", this.boundClickHandler); 
        this.ctx.canvas.addEventListener("mousemove", this.boundHoverHandler);  
    }

    hover(e) {
        let rect = this.canvas.getBoundingClientRect();
        this.gx = (e.clientX - rect.left) / (rect.right - rect.left) * this.canvas.width;
        this.gy =  (e.clientY - rect.top) / (rect.bottom - rect.top) * this.canvas.height;
        if (this.btn.clicked(this.gx, this.gy) && this.mouseState !== "down") {
            this.btn.color = "blue"
        } else if (!this.btn.clicked(this.gx, this.gy)) {
            this.btn.color = "red"
        }
        if (this.btn.clicked(this.gx, this.gy) && this.mouseState === "down") {
            this.btn.color = "yellow"
        } 
    }

    click(e) {
        let rect = this.canvas.getBoundingClientRect();
        this.gx = (e.clientX - rect.left) / (rect.right - rect.left) * this.canvas.width;
        this.gy =  (e.clientY - rect.top) / (rect.bottom - rect.top) * this.canvas.height;
        if (e.type == "mousedown" && this.btn.clicked(this.gx, this.gy)) {
            this.mouseState = "down"
            this.btn.color = "yellow"
        } else if (e.type == "mouseup" && this.btn.clicked(this.gx, this.gy)) {
            this.btn.color = "red"
            this.mouseState = "up"
        } else if (e.type == "mouseup" && !this.btn.clicked(this.gx, this.gy)) {
            this.mouseState = "up"
            this.btn.color = "red"
        }
        
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.myBackground.newPos();
        this.myBackground.update();
        this.ctx.drawImage(this.myBackground.image,0,0, 300, 150); 
        this.btn.newPos();
        this.btn.update();
        this.mousePos.text = `${this.gx.toFixed()}, ${this.gy.toFixed()}`
        this.mousePos.update();
        this.titleWords.text = "\"...the one that makes it to the top"
        this.titleWords.update();
        this.titleWords2.text = "will have their greatest desire fulfilled...\""
        this.titleWords2.update();
        requestAnimationFrame(this.animate.bind(this));
    }





}