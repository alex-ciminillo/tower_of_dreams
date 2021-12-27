import Component from './component'
import Sound from './sound'
import Background1 from './../images/background1.png'
import Background2 from './../images/background2.png'
import Background from './../images/background3.png'
import SoundButton from './../images/sound.png'
import SoundMuteButton from './../images/sound-mute.png'
import MusicButton from './../images/music.png'
import MusicMuteButton from './../images/music_slash.png'
import StartButton from './../images/buttons.png'
import StartButtonPressed from './../images/buttonsPressed.png'
import ButtonHover from './../sounds/button_hover.mp3'
import ButtonClick from './../sounds/begin_click.mp3'
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

export default class Title {

    constructor(canvas, ctx, dimensions) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.ctx.imageSmoothingEnabled = false;
        this.dimensions = dimensions;
        this.beginSound = new Sound(ButtonHover);
        this.beginClickSound = new Sound(ButtonClick, 1);
        this.btn = new Component(80, 30, StartButton, 110, 110, this.ctx, "image");
        this.mousePos = new Component("9px", "Consolas", "black", 220, 10, this.ctx, "text");
        this.myBackground = new Component(300, 150, Background, 0, 0, this.ctx, "image");
        this.myBackground1 = new Component(300, 150, Background1, 0, 0, this.ctx, "image");
        this.myBackground2 = new Component(300, 150, Background2, 0, 0, this.ctx, "image");
        this.myCliff = new Component(100, 100, Cliff, 0,75, this.ctx, "image")
        this.myCastle = new Component(45, 160, Tower, 245,0, this.ctx, "image")
        this.adventureGuy = new Component(95, 70, MainCharacter, 25, 60, this.ctx, "sprite", 5, 3, 50, 37);
        this.soundImage = new Component(10, 10, SoundButton, 5, 138, this.ctx, "image");
        this.musicImage = new Component(10, 10, MusicButton, 20, 138, this.ctx, "image");
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
                console.log("hi")
                this.cloudArr.splice(i, 1);
                this.generateCloud(1, this.ctx, 400)
            }
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
        this.mousePos.text = `${this.gx.toFixed()}, ${this.gy.toFixed()}`
        this.mousePos.update();
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