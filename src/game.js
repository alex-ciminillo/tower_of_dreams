import Title from './title.js'
import BlackScreen from './blackScreen.js'
import Home from './home.js'
import Sound from './sound'
import TitleTheme from './../sounds/hope.mp3'
import SoundButton from './../images/sound.png'
import SoundMuteButton from './../images/sound-mute.png'
import MusicButton from './../images/music.png'
import MusicMuteButton from './../images/music_slash.png'
import StartButton from './../images/buttons.png'
import StartButtonPressed from './../images/buttonsPressed.png'
import Component from "./component"



export default class TowerOfDreams {
    constructor(canvas) {
        this.alpha = 0.99;
        this.delta = 0.01;
        this.mouseOnBegin = false;
        this.canvas = canvas
        this.ctx = canvas.getContext("2d");
        this.ctx.scale(4,4)
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.title = new Title(this.canvas, this.ctx, this.dimensions);
        this.blackScreen = new BlackScreen(this.canvas, this.ctx, this.dimensions);
        this.home = new Home(this.canvas, this.ctx, this.dimensions);
        this.mousePos = new Component("9px", "Consolas", "white", 200, 10, this.ctx, "text");
        this.mouseClick1 = new Component("9px", "Consolas", "white", 200, 40, this.ctx, "text");
        this.mouseClick2 = new Component("9px", "Consolas", "white", 200, 50, this.ctx, "text");
        this.mouseClickDiff = new Component("9px", "Consolas", "white", 200, 60, this.ctx, "text");
        
        this.firstClick = [0,0]
        this.secondClick = [0,0]
        this.clickDiff = [0,0]
        this.clickNum = 1;
        this.gy = 0;
        this.gx = 0;
        this.drawDummy = false;
        this.firstImagePos = 0;
        this.imagesArr = this.loadAllImages()
        

        this.registerEvents();
        this.animate();
        // //real code
        // this.currentScreen = "Title"
        // //end real code
        this.beginSound = new Sound(TitleTheme, 0.2);
        this.themeMusic = false;
        this.allSounds = true;
        this.fadeScreen = false;
        this.dummyImageArr = [];
        this.mouseClicksArr = [];
        this.mouseClickXYArr = [];
        this.mouseClickPosIncrement = 20;
        //test code for home screen
        this.currentScreen = "Home"
        //end test code for homescreen
        this.colors = ["white", "blue", "yellow", "green", "red", "orange", "purple"]
        
    }

    images () {
        const path = require.context("./../images", false, /\.png$/)
        return path.keys().map(path)
    }

    createMouseClick() {
        this.newClick = new Component("9px", "Consolas", this.colors[this.dummyImageArr.length - 1], 200, this.mouseClicksY, this.ctx, "text");
        this.mouseClicksArr.push(this.newClick)
    }



    loadAllImages() {
        let images = this.images();
        let imageArr = []
        for (let i = 0; i < images.length; i++) {
            imageArr.push(new Component(20, 5, images[i], 0, this.firstImagePos, this.ctx, "image"));
            this.firstImagePos += 5;
        }
        return imageArr
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
        if (this.currentScreen === "Title") { this.titleHover(e) }
        else if (this.currentScreen === "Home") { this.homeHover(e) }
        
    }

    saveClicks(gx, gy) {
        if (this.clickNum === 1) {
            // this.drawDummy = false;
            this.secondClick = [0,0]
            this.clickDiff = [0,0]
            this.firstClick = [gx.toFixed()/4, gy.toFixed()/4]
            this.createMouseClick();
            this.mouseClickXYArr.push([gx.toFixed()/4, gy.toFixed()/4])  
            this.clickNum++
        } else {
            this.secondClick = [gx.toFixed()/4, gy.toFixed()/4]
            this.createMouseClick();
            this.mouseClickXYArr.push([gx.toFixed()/4, gy.toFixed()/4])
            this.clickNum--
            this.clickDiff = [Math.abs(this.secondClick[0] - this.firstClick[0]), Math.abs(this.secondClick[1] - this.firstClick[1])]
            if (this.firstClick[0] !== this.secondClick[0] && this.firstClick[1] !== this.secondClick[1]) { 
                this.createDummyComponent()
                this.drawDummy = true; 
            } else {
                this.imageFound = false;
                if (this.imageSelectorClicked() === false && this.dummyImageClicked() === false) {
                    this.drawDummy = false;
                    this.imageSelection = undefined;
                    this.dummyImageArr = [];
                    this.mouseClicksArr = [];
                }
            }
        }
    }

    imageSelectorClicked() {
        for (let i = 0; i < this.imagesArr.length; i++) {
            if (this.imagesArr[i].clicked(this.gx, this.gy)) {
                this.imageSelection = this.imagesArr[i]
                this.imageFound = true;
                return true;
            }
        }
        return false;
    }

    dummyImageClicked() {
        for (let i = this.dummyImageArr.length - 1; i > 0; i--) {
            if (this.dummyImageArr[i].clicked(this.gx, this.gy)) {
               this.dummyImageArr.splice(i, 1)
                return true;
            }
        }
        return false;
    }



    click(e) {
        
        if (this.themeMusic === false) {
            this.beginSound.play()
            this.themeMusic = true;
        }
        this.updateGxGy(e);
        this.saveClicks(this.gx, this.gy);
        if (this.currentScreen === "Title") { this.titleClick(e) }
        if (this.currentScreen === "Avatar Chooser") { this.avatarChooserClick(e) }
        if (this.currentScreen === "Home") { this.homeClick(e) }
    }

    avatarChooserClick(e) {
        if (e.type == "mouseup" && this.avatarChooserScreen.btn.clicked(this.gx, this.gy)) {
            this.avatarChooserScreen.changeColor();
        } else if (e.type == "mouseup" && this.avatarChooserScreen.nextBtn.clicked(this.gx, this.gy)) {
            this.fadeScreen = true;
            this.nextScreen = "Title"
        }
    }

    createDummyComponent() {
        if (this.imageSelection === undefined) {
            this.dummy = new Component(this.clickDiff[0], this.clickDiff[1], "red", this.firstClick[0], this.firstClick[1], this.ctx, "other");
        } else {
            this.dummy = new Component(this.clickDiff[0], this.clickDiff[1], this.imageSelection.color, this.firstClick[0], this.firstClick[1], this.ctx, "image");
        }
        this.dummyImageArr.push(this.dummy)
    }

    drawDummyComponent() {
        for (let i = 0; i < this.dummyImageArr.length; i++) {
            this.dummyImageArr[i].update();
        };
    }
    drawMouseClicksComponent() {
        for (let i = 0; i < this.dummyImageArr.length; i++) {
            this.mouseClicksArr[i*2].text = `${this.mouseClickXYArr[i*2][0]}, ${this.mouseClickXYArr[i*2][1]}`
            this.mouseClicksArr[i*2].update();
            this.mouseClicksArr[i*2 + 1].text = `${this.mouseClickXYArr[i*2 + 1][0]}, ${this.mouseClickXYArr[i*2 + 1][1]}`
            this.mouseClicksArr[i*2 + 1].update();
        };
    }

    titleClick(e) {
        if (e.type == "mousedown" && this.title.btn.clicked(this.gx, this.gy)) {
            this.mouseState = "down"
            this.title.btn.color = StartButtonPressed
        } else if (e.type == "mouseup" && this.title.btn.clicked(this.gx, this.gy)) {
            this.title.btn.color = StartButton
            this.mouseState = "up"
            this.beginGame();
        } else if (e.type == "mouseup" && !this.title.btn.clicked(this.gx, this.gy)) {
            this.mouseState = "up"
            this.title.btn.color = StartButton
        }
        if (e.type == "mouseup" && this.title.soundImage.clicked(this.gx, this.gy)) {
            if (this.title.soundImage.color === SoundButton ) {
                this.title.soundImage.color = SoundMuteButton;
                this.allSounds = false;
            } else {
                this.title.soundImage.color = SoundButton;
                this.allSounds = true;
            }
        }
        if (e.type == "mouseup" && this.title.musicImage.clicked(this.gx, this.gy)) {
            if (this.title.musicImage.color === MusicButton ) {
                this.title.musicImage.color = MusicMuteButton;
                this.beginSound.stop();
            } else {
                this.title.musicImage.color = MusicButton;
                this.beginSound.play();
            }
        }
    }

    titleHover(e) {
        this.title.gx = this.gx;
        this.title.gy = this.gy;
        if (this.title.btn.clicked(this.gx, this.gy) && this.mouseState !== "down") {
            this.title.btn.color = StartButtonPressed
            if (this.mouseOnBegin === false) { 
                if (this.allSounds === true) { this.title.beginSound.play(); }
                this.mouseOnBegin = true;
            }
        } else if (!this.title.btn.clicked(this.gx, this.gy)) {
            this.title.btn.color = StartButton
            if (this.mouseOnBegin === true) { 
                if (this.allSounds === true) {  this.title.beginSound.play(); }
                this.mouseOnBegin = false;
            }
        }
        if (this.title.btn.clicked(this.gx, this.gy) && this.mouseState === "down") {
            this.title.btn.color = StartButtonPressed
        } 
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
        // this.avatarChooserScreen = new AvatarChooserScreen(this.canvas, this.ctx, this.dimiensions)
        // this.fadeScreen = true;
        // this.nextScreen = "Avatar Chooser"
        this.title.move = false;
        this.title.initMove(5, 1, "runLeft")
        this.title.adventureGuy.speedX = -2
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

        // // real code
        // if (this.currentScreen === "Title") {
        //     this.title.animate(); 
        // } else if (this.currentScreen === "Black Screen") {
        //     this.blackScreen.animate();
        // } else if (this.currentScreen === "Home") {
        //     this.home.animate();
        // }
        // this.ctx.globalAlpha = this.alpha;
        // // real code end

        // test code to show home
        this.home.animate();
        if (this.drawDummy) { 
            this.drawDummyComponent(); 
            this.drawMouseClicksComponent()
        }
        for (let i = 0; i < this.imagesArr.length; i++) {
            this.imagesArr[i].update();
        }
        this.mousePos.text = `${this.gx.toFixed()/4}, ${this.gy.toFixed()/4}`
        this.mousePos.update();
        this.mouseClick1.text = `${this.firstClick[0]}, ${this.firstClick[1]}`
        this.mouseClick1.update();
        this.mouseClick2.text = `${this.secondClick[0]}, ${this.secondClick[1]}`
        this.mouseClick2.update();
        this.mouseClickDiff.text = `${this.clickDiff[0]}, ${this.clickDiff[1]}`
        this.mouseClickDiff.update();
        


        requestAnimationFrame(this.animate.bind(this));
    }


}