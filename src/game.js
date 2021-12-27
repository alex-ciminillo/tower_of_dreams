import Title from './title.js'
import BlackScreen from './blackScreen.js'
import Home from './home.js'
import Component from "./component"
import EditScreen from "./editScreen"
import EventListener from './eventListener.js'



export default class TowerOfDreams {
    constructor(canvas) {
        this.alpha = 0.99;
        this.delta = 0.01;
        this.canvas = canvas
        this.ctx = canvas.getContext("2d");
        this.ctx.scale(4,4)
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.title = new Title(this.canvas, this.ctx, this.dimensions);
        this.blackScreen = new BlackScreen(this.canvas, this.ctx, this.dimensions);
        this.home = new Home(this.canvas, this.ctx, this.dimensions);
        this.editScreen = new EditScreen(this.canvas, this.ctx, this.dimensions);
        this.editMode = true;
        this.eventListener = new EventListener(this.canvas, this.ctx, this.dimensions);
        
        this.gy = 0;
        this.gx = 0;
        
        

        this.registerEvents();
        this.animate();
        //real code
        this.currentScreen = "Title"
        //end real code
        
        this.fadeScreen = false;
        
        // //test code for home screen
        // this.currentScreen = "Home"
        // //end test code for homescreen
    }

    registerEvents() {
        this.boundClickHandler = this.click.bind(this);
        this.boundHoverHandler = this.hover.bind(this);
        this.ctx.canvas.addEventListener("mousedown", this.boundClickHandler);
        this.ctx.canvas.addEventListener("mouseup", this.boundClickHandler); 
        this.ctx.canvas.addEventListener("mousemove", this.boundHoverHandler);  
    }

    updateGxGy(e) {
        this.gxgyArr = this.eventListener.updateGxGy(e);
        this.gx = this.gxgyArr[0]
        this.gy = this.gxgyArr[1]
    }


    hover(e) {
        this.updateGxGy(e)
        if (this.currentScreen === "Title") { this.titleHover(e) }
        else if (this.currentScreen === "Home") { this.homeHover(e) }
    }

    click(e) {
        this.editScreen.saveClicks(this.gx, this.gy);
        if (this.currentScreen === "Title") { this.titleClick(e) }
        if (this.currentScreen === "Avatar Chooser") { this.avatarChooserClick(e) }
        if (this.currentScreen === "Home") { this.homeClick(e) }
    }

    
    titleHover(e) {
        this.title.gx = this.gx;
        this.title.gy = this.gy;
        this.title.titleHover(e);
    }

    titleClick(e) {
        this.title.titleClick(e);
        if (this.title.beginGame === true) { this.beginGame(); }
    }
    
    homeHover(e) {
        this.home.gx = this.gx;
        this.home.gy = this.gy;
        this.home.hover(e)
    }

    homeClick(e) {
        this.home.click(e)
    }



    beginGame() {
        this.fadeScreen = true;
        this.fadeUp = false;
        this.nextScreen = "Black Screen"
        setTimeout(()=>{
            this.currentScreen = "Home"
        }, 7000)
    }

    fadeOut() {
        if (this.fadeUp) {
            this.alpha += this.delta;
        } else {
            this.alpha -= this.delta;
        }
        if (this.alpha <= 0) { 
            this.fadeUp = true;
            this.currentScreen = this.nextScreen;
        } else if (this.alpha >= 1) {
            this.fadeUp = false;
            this.fadeScreen = false;
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if (this.fadeScreen) { this.fadeOut() }

        // real code
        if (this.currentScreen === "Title") { this.title.animate(); } 
        else if (this.currentScreen === "Black Screen") { this.blackScreen.animate(); } 
        else if (this.currentScreen === "Home") { this.home.animate(); }
        this.ctx.globalAlpha = this.alpha;
        // real code end

        // // test code to show home
        // this.home.animate();
        // // test code end

        if (this.editMode === true) { this.editScreen.animate(this.gx, this.gy) }
        
        requestAnimationFrame(this.animate.bind(this));
    }


}