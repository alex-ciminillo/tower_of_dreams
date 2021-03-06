import Component from './component'
import Sound from './sound'
import Background1 from './../images/background1.png'
import Background2 from './../images/background2.png'
import Background from './../images/background3.png'
import ButtonHover from './../sounds/button_hover.mp3'
import Cliff from './../images/cliffTitle.png'
import Tower from './../images/castleTitle.png'
import MainCharacter from './../images/adventure.png'
import MainCharacterReversed from './../images/adventureReversed.png'
import Cloud1 from './../images/cloud1.png'
import Cloud2 from './../images/cloud2.png'
import Cloud3 from './../images/cloud3.png'
import Cloud4 from './../images/cloud4.png'
import Cloud5 from './../images/cloud5.png'
import Cloud6 from './../images/cloud6.png'
import Cloud7 from './../images/cloud7.png'
import Cloud8 from './../images/cloud8.png'
import SoundButton from './../images/soundImage.png'
import SoundMuteButton from './../images/sound-mute.png'
import MusicButton from './../images/music.png'
import MusicMuteButton from './../images/music_slash.png'
import StartButton from './../images/buttons.png'
import StartButtonPressed from './../images/buttonsPressed.png'
import TitleTheme from './../sounds/hope.mp3'


export default class Title {

    constructor(canvas, ctx, dimensions) {
        this.currentImports = ['./component', './sound','/background1.png','/background2.png','/background3.png']
        this.canvas = canvas;
        this.ctx = ctx;
        this.ctx.imageSmoothingEnabled = false;
        this.dimensions = dimensions;
        this.mouseOnBegin = false;
        this.beginSound = new Sound(ButtonHover);
        this.btn = new Component(80, 30, StartButton, 110, 110, this.ctx, "image");
        this.myBackground = new Component(300, 150, Background, 0, 0, this.ctx, "image");
        this.myBackground1 = new Component(300, 150, Background1, 0, 0, this.ctx, "image");
        this.myBackground2 = new Component(300, 150, Background2, 0, 0, this.ctx, "image");
        this.myCliff = new Component(100, 100, Cliff, 0,75, this.ctx, "image")
        this.myCastle = new Component(65, 160, Tower, 235,0, this.ctx, "image")
        this.adventureGuy = new Component(95, 70, MainCharacter, 25, 60, this.ctx, "sprite", 5, 3, 50, 37);
        this.soundImage = new Component(10, 10, SoundMuteButton, 270, 138, this.ctx, "image");
        this.musicImage = new Component(10, 10, MusicMuteButton, 285, 138, this.ctx, "image");
        this.titleWords = new Component("16px", "TitleScreen", "black", 10, 15, this.ctx, "text");
        this.titleWords2 = new Component("16px", "TitleScreen", "black", 10, 30, this.ctx, "text");
        this.titleScreen = true;
        this.gx = 0;
        this.gy = 0;
        this.frame = 0;
        this.anime = "idleRight";
        this.move = true;
        this.cloudArr = []
        this.generateCloud(55, this.ctx)

        this.beginTheme = new Sound(TitleTheme, 0.2);
        this.themeMusic = false;
        
        this.allSounds = false;
        
    }

    generateCloud(num, ctx, xMin) {
        if (xMin === undefined) { xMin = 0; }
        const cloudImages = [Cloud2, Cloud3, Cloud4, Cloud5, Cloud6, Cloud7]
        for (let i = 0; i < num; i++) {
            let cloudImage = Math.floor(Math.random() * (6 - 0) + 0);
            let y = Math.floor(Math.random() * (145 - 95) + 95);
            let x = Math.floor(Math.random() * (400 - xMin) + xMin);
            let width = Math.floor(Math.random() * (100 - 60) + 50);
            let height = Math.floor(Math.random() * (35 - 20) + 20);
            let speed = Math.floor(Math.random() * (-15 - -1) + -1);
            let cloud = new Component(width, height, cloudImages[cloudImage], x, y, ctx, "image");
            cloud.speedX = speed/100;
            this.cloudArr.push(cloud)
        }
    }

    initMove(start, row, anime) {
        
        if (anime === "idleRight") {
            this.adventureGuy.color = MainCharacter
        } else {
            this.adventureGuy.color = MainCharacterReversed
        } 
        
        this.adventureGuy.column = start;
        this.adventureGuy.row = row;
        this.anime = anime;
        this.frame = 0;
        this.move = true;
    }

    idleCharacter(start, stop, speed, row, colDir) {
        if (this.frame >= speed) {
            this.adventureGuy.column += colDir;
            this.frame = 0;
            if (this.adventureGuy.column === stop + colDir) {
                this.adventureGuy.column = start;
                this.adventureGuy.row = row;
            }
        }
    }

    createNewClouds() {
        for (let i = 0; i < this.cloudArr.length; i++) {
            if (this.cloudArr[i].x < 0 - this.cloudArr[i].width) {
                this.cloudArr.splice(i, 1);
                this.generateCloud(1, this.ctx, 400)
            }
        }
    }

    titleClick(e) {
        if (this.themeMusic === false) {
            // this.beginTheme.play()
            this.themeMusic = true;
        }
        if (e.type == "mousedown" && this.btn.clicked(this.gx, this.gy)) {
            this.mouseState = "down"
            // this.btn.color = StartButtonPressed
        } else if (e.type == "mouseup" && this.btn.clicked(this.gx, this.gy)) {
            this.btn.color = StartButton
            this.mouseState = "up"
            this.beginTheGame();
        } else if (e.type == "mouseup" && !this.btn.clicked(this.gx, this.gy)) {
            this.mouseState = "up"
            this.btn.color = StartButton
        }
        if (e.type == "mouseup" && this.soundImage.clicked(this.gx, this.gy)) {
            if (this.soundImage.color === SoundButton ) {
                this.soundImage.color = SoundMuteButton;
                this.allSounds = false;
            } else {
                this.soundImage.color = SoundButton;
                this.allSounds = true;
            }
        }
        if (e.type == "mouseup" && this.musicImage.clicked(this.gx, this.gy)) {
            if (this.musicImage.color === MusicButton ) {
                this.musicImage.color = MusicMuteButton;
                this.beginTheme.stop();
            } else {
                this.musicImage.color = MusicButton;
                this.beginTheme.play();
            }
        }
    }

    beginTheGame() {
        this.beginGame = true;
        this.move = false;
        this.initMove(5, 1, "runLeft")
        this.adventureGuy.speedX = -2
        document.cookie = "start=true"
    }

    titleHover(e) {
        if (this.btn.clicked(this.gx, this.gy) && this.mouseState !== "down") {
            // this.btn.color = StartButtonPressed
            if (this.mouseOnBegin === false) { 
                if (this.allSounds === true) { this.beginSound.play(); }
                this.mouseOnBegin = true;
            }
        } else if (!this.btn.clicked(this.gx, this.gy)) {
            this.btn.color = StartButton
            if (this.mouseOnBegin === true) { 
                if (this.allSounds === true) {  this.beginSound.play(); }
                this.mouseOnBegin = false;
            }
        }
        if (this.btn.clicked(this.gx, this.gy) && this.mouseState === "down") {
            // this.btn.color = StartButtonPressed
        } 
    }

   

    animate() {
        
        this.myBackground1.newPos();
        this.myBackground1.update();
        this.myBackground2.newPos();
        this.myBackground2.update();
        this.myBackground.newPos();
        this.myBackground.update();
        
        this.myCastle.newPos();
        this.myCastle.update();

        for (let i = 0; i < this.cloudArr.length; i++) {
            this.cloudArr[i].newPos();
            this.cloudArr[i].update();
        }
        this.createNewClouds();


        this.myCliff.newPos();
        this.myCliff.update();
        this.adventureGuy.newPos();
        this.adventureGuy.update();
        this.btn.newPos();
        this.btn.update();
        this.soundImage.newPos();
        this.soundImage.update();
        this.musicImage.newPos();
        this.musicImage.update();
        this.titleWords.text = "Tower"
        this.titleWords.update();
        this.titleWords2.text = "of Dreams"
        this.titleWords2.update();
        this.frame++
        if (this.move) {
           if (this.anime === "idleRight") { this.idleCharacter(3, 6, 13, 5, 1); }
            else if (this.anime === "runLeft") { this.idleCharacter(5, 0, 8, 1, -1); }
        }
        
    }





}