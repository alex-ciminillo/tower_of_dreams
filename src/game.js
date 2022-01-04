import Title from './title.js'
import BlackScreen from './blackScreen.js'
import Home from './home.js'
import Component from "./component"
import EditScreen from "./editScreen"
import EventListener from './eventListener.js'
import Tower from './tower.js'
import Training from './training.js'



export default class TowerOfDreams {
    constructor(canvas, canvas2) {
        this.alpha = 0.99;
        this.delta = 0.01;
        this.canvas = canvas
        this.canvas2 = canvas2
        this.ctx = canvas.getContext("2d");
        this.ctx.scale(4,4)
        this.ctx2 = canvas2.getContext("2d");
        this.ctx2.scale(4,4)
        this.tower = new Tower(this.ctx, 0, 0, this.canvas)
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.title = new Title(this.canvas, this.ctx, this.dimensions);
        this.blackScreen = new BlackScreen(this.canvas, this.ctx, this.dimensions);
        this.home = new Home(this.canvas, this.ctx, this.dimensions);
        this.editScreen = new EditScreen(this.canvas, this.ctx, this.dimensions, this, this.canvas2, this.ctx2);
        this.eventListener = new EventListener(this.canvas, this.ctx, this.dimensions, this.canvas2);
        this.editButton = new Component(20.67, 6.21, "invisible", 278.51, 143.57, this.ctx, "other");
        this.gy = 0;
        this.gx = 0;
        this.editMode = false;
        this.showEditButton = false;
        this.training = new Training(this.ctx, 0, 0, this.canvas)
        

        this.registerEvents();
        this.animate();
        // //real code
        // this.currentScreen = "Title"
        // // //end real code
        
        this.fadeScreen = false;
        
        //test code for tower screen
        this.currentScreen = "Tower"
        //end test code for tower
    }

    registerEvents() {
        this.boundClickHandler = this.click.bind(this);
        this.boundHoverHandler = this.hover.bind(this);
        this.ctx.canvas.addEventListener("mousemove", this.boundHoverHandler);  
        this.ctx.canvas.addEventListener("mousedown", this.boundClickHandler);
        this.ctx.canvas.addEventListener("mouseup", this.boundClickHandler); 
        this.ctx.canvas.addEventListener("mousemove", this.boundHoverHandler);  
        this.ctx2.canvas.addEventListener("mouseup", this.boundClickHandler);
        this.ctx2.canvas.addEventListener("mousedown", this.boundClickHandler);
        this.ctx2.canvas.addEventListener("mousemove", this.boundHoverHandler);
    }

    updateGxGy(e) {
        this.gxgyArr = this.eventListener.updateGxGy(e);
        
        this.gx = this.gxgyArr[0]
        this.gy = this.gxgyArr[1]
        
    }

    updateGxGy2(e) {
        this.gxgyArr2 = this.eventListener.updateGxGy2(e);
        this.gx2 = this.gxgyArr2[0]
        this.gy2 = this.gxgyArr2[1]
    }


    hover(e) {
        this.updateGxGy(e)
        this.updateGxGy2(e)
        if (this.currentScreen === "Title") { this.titleHover(e) }
        else if (this.currentScreen === "Home") { this.homeHover(e) }
        else if (this.currentScreen === "Training") { this.trainingHover(e) }
        else if (this.currentScreen === "Tower") { this.towerHover(e) }
    }

    click(e) {
            this.checkForEditModeEnabling(e);
            if (this.showEditButton === true) { this.enableEditMode(e)  }
            if (this.editMode === true) {
                this.editScreen.saveClicks(this.gx, this.gy, e);
            } else {
                if (this.currentScreen === "Title") { this.titleClick(e) }
                else if (this.currentScreen === "Home") { this.homeClick(e) }
                else if (this.currentScreen === "Training") { this.trainingClick(e) }
                else if (this.currentScreen === "Tower") { this.towerClick(e) }
            }
    }

    towerClick(e) {
        this.tower.click(e)
        if (this.tower.goHome === true) { 
            this.currentScreen = "Home" 
            this.tower.reset();
        }
    }

    towerHover(e) {
        this.tower.hover(e);
    }

    trainingClick(e) {
        this.training.click(e);
        if (this.training.goHome === true) { 
            this.currentScreen = "Home";
            this.training.goHome = false;
        } else if (this.training.towerTime === true) { 
            this.currentScreen = "Tower" 
            this.towerTime = false;
        }
    }

    trainingHover(e) {
        this.training.hover(e);
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
        if (this.home.beginTraining === true) { 
            this.beginTraining(); 
        } else if (this.home.beginTower === true) {
            this.currentScreen = "Tower"
            this.home.beginTower = false;
        }
    }

    beginTraining() {
        this.currentScreen = "Training"
        this.home.beginTraining = false;
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

    checkForEditModeEnabling(e) {
        this.mousePos = e.type
        if (e.type === "mousedown") {
            let x = this.gx;
            let y = this.gy;
            setTimeout(()=>{ 
                if (x === this.gx && y === this.gy && this.mousePos === "mousedown") {
                    this.showEditButton = true;
                }
            }, 1000)
        } else {
            setTimeout(()=>{
                this.showEditButton = false;
            }, 1000)
        }

    }


    enableEditMode(e) {
        if (this.editButton.clicked(this.gx, this.gy) && e.type === "mousedown") {
            if (this.editMode === true) {
                this.editMode = false
                this.canvas2.classList.add('canvas3');
                this.canvas2.classList.remove('canvas2');
            } else {
                this.editMode = true;
                this.canvas2.classList.add('canvas2');
                this.canvas2.classList.remove('canvas3');
            } 
        }
    }

    animate() {
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if (this.fadeScreen) { this.fadeOut() }

        // real code
        if (this.currentScreen === "Title") { this.title.animate(); } 
        else if (this.currentScreen === "Black Screen") { this.blackScreen.animate(); } 
        else if (this.currentScreen === "Home") { this.home.animate(); }
        else if (this.currentScreen === "Training") { this.training.animate(this.gx, this.gy); }
        else if (this.currentScreen === "Tower") { this.tower.animate(this.gx, this.gy); }

        this.ctx.globalAlpha = this.alpha;
        // real code end

        if (this.showEditButton === true) { this.editButton.update(); }
        if (this.editMode === true) { this.editScreen.animate(this.gx, this.gy, this.gx2, this.gy2) }
        requestAnimationFrame(this.animate.bind(this));
        
    }


}