import Title from './title.js'
import BeginRed from './../images/begin_red.png'
import BeginBlue from './../images/begin_blue.png'
import BeginYellow from './../images/begin_yellow.png'

export default class TowerOfDreams {
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext("2d");
        this.ctx.scale(4,4)
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.title = new Title(this.canvas, this.ctx, this.dimensions);
        this.registerEvents();
        this.animate();
        this.titleScreen = true;
    }

    registerEvents() {
        this.boundClickHandler = this.click.bind(this);
        this.boundHoverHandler = this.hover.bind(this);
        this.ctx.canvas.addEventListener("mousedown", this.boundClickHandler);
        this.ctx.canvas.addEventListener("mouseup", this.boundClickHandler); 
        this.ctx.canvas.addEventListener("mousemove", this.boundHoverHandler);  
    }

    updateGxGy(e) {
        let rect = this.canvas.getBoundingClientRect();
        this.gx = (e.clientX - rect.left) / (rect.right - rect.left) * this.canvas.width;
        this.gy =  (e.clientY - rect.top) / (rect.bottom - rect.top) * this.canvas.height;
    }

    hover(e) {
        this.updateGxGy(e);
        if (this.titleScreen === true) { this.titleHover(e) }
        
    }

    click(e) {
        this.updateGxGy(e);
        if (this.titleScreen === true) { this.titleClick(e) }
    }

    titleClick(e) {
        if (e.type == "mousedown" && this.title.btn.clicked(this.gx, this.gy)) {
            this.mouseState = "down"
            this.title.btn.color = BeginYellow
        } else if (e.type == "mouseup" && this.title.btn.clicked(this.gx, this.gy)) {
            this.title.btn.color = BeginRed
            this.mouseState = "up"
            this.beginGame();
        } else if (e.type == "mouseup" && !this.title.btn.clicked(this.gx, this.gy)) {
            this.mouseState = "up"
            this.title.btn.color = BeginRed
        }
    }

    titleHover(e) {
        if (this.title.btn.clicked(this.gx, this.gy) && this.mouseState !== "down") {
            this.title.btn.color = BeginBlue
        } else if (!this.title.btn.clicked(this.gx, this.gy)) {
            this.title.btn.color = BeginRed
        }
        if (this.title.btn.clicked(this.gx, this.gy) && this.mouseState === "down") {
            this.title.btn.color = BeginYellow
        } 
    }

    beginGame() {
        this.titleScreen = false;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.titleScreen === true) {
            this.title.animate();
        }
            
        
        
        requestAnimationFrame(this.animate.bind(this));
    }


}