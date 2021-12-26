import House from './../images/home.png'
import Component from "./component"
import MainCharacter from './../images/adventure.png'
import MainCharacterReversed from './../images/adventureReversed.png'
import Map from './../images/map.png'


export default class Home {
    constructor(canvas, ctx, dimensions) {
        
        this.canvas = canvas;
        this.ctx = ctx;
        this.dimensions = dimensions;
        this.mousePos = new Component("9px", "Consolas", "black", 200, 30, this.ctx, "text");
        this.myBackground = new Component(300, 150, "black", 0, 0, this.ctx, "other");
        this.myHouse = new Component(300, 150, House, 0, 0, this.ctx, "image");
        this.adventureGuy = new Component(48, 35, MainCharacter, 85, 60, this.ctx, "sprite", 5, 3, 50, 37);
        this.myMap = new Component(19, 13, Map, 140, 59, this.ctx, "image");
        this.myTraining = new Component(22, 15, "invisible", 88, 16, this.ctx, "other");
        this.move = true;
        this.anime = "idleRight";
        this.frame = 0;
        this.gy = 0;
        this.gx = 0;
    }

    initMove(start, row, anime) {
        
        if (anime === "idleRight") {
            this.adventureGuy.color = MainCharacter
        } else if (anime === "idleLeft") {
            this.adventureGuy.color = MainCharacterReversed
        } else if (anime === "runLeft") {
            this.adventureGuy.color = MainCharacterReversed
        }else if (anime === "runRight") {
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

    hover(e) {
        if (this.adventureGuy.moving === false) {
     
            if (this.adventureGuy.dir(this.gx, this.gy) === "left" && this.anime !== "idleLeft") {

                this.move = false;
                this.initMove(3, 5, "idleLeft")
            } else if (this.adventureGuy.dir(this.gx, this.gy) === "right" && this.anime !== "idleRight") {
                this.move = false;
                this.initMove(3, 5, "idleRight")
            }       
        }
    }

    click(e) {
        if (e.type === "mouseup") {
            this.clickedSpotx = this.gx;
            this.clickedSpoty = this.gy; 
            
            if (this.adventureGuy.dir(this.gx, this.gy) === "left") {
                this.move = false;
                this.initMove(5, 1, "runLeft")
            }
            if (this.adventureGuy.dir(this.gx, this.gy) === "right") {
                this.move = false;
                this.initMove(1, 1, "runRight")
            }    
            this.adventureGuy.moveToMouse(this.gx, this.gy, 0.8)
            this.checkSpeed();
            if (this.myTraining.clicked(this.gx, this.gy)) {
                this.checkIfMovedToSpot();
            }
        }
        
    }

    checkIfMovedToSpot() {
        while (this.adventureGuy.speedX > 0 || this.adventureGuy.speedY > 0) {
            console.log(this.myTraining.intersecting(this.adventureGuy))
        }
    }

    checkSpeed() {
        if (this.adventureGuy.speedX > 0) {
            this.anime = "runRight"
        } else if (this.adventureGuy.speedX < 0) {
            this.anime = "runLeft"
        } else if (this.adventureGuy.speedX === 0 && this.anime === "runLeft") {
            this.move = false;
            this.initMove(3, 5, "idleLeft")
        } else if (this.adventureGuy.speedX === 0 && this.anime === "runRight") {
            this.move = false;
            this.initMove(3, 5, "idleRight")
        }
    }

    boundaries(){
        let xBoundRight = 20;
        let xBoundLeft = 236;
        let yBoundBottom = 92;
        let yBoundTop = 5;
        if (this.adventureGuy.x < xBoundRight) {
            this.adventureGuy.x = xBoundRight;
            this.adventureGuy.speedX = 0;
            this.adventureGuy.speedY = 0;
        } else if (this.adventureGuy.x > xBoundLeft) {
            this.adventureGuy.x = xBoundLeft;
            this.adventureGuy.speedX = 0;
            this.adventureGuy.speedY = 0;
        } else if (this.adventureGuy.y > yBoundBottom) {
            this.adventureGuy.y = yBoundBottom;
            this.adventureGuy.speedX = 0;
            this.adventureGuy.speedY = 0;
        } else if (this.adventureGuy.y < yBoundTop) {
            this.adventureGuy.y = yBoundTop;
            this.adventureGuy.speedX = 0;
            this.adventureGuy.speedY = 0;
        }
    }


    animate() {
        this.boundaries();
        this.checkSpeed();
        this.adventureGuy.checkIfStillMoving(this.clickedSpotx, this.clickedSpoty);
        this.myBackground.update();
        this.myHouse.update();
        this.myMap.update();
        this.myTraining.update();
        this.adventureGuy.newPos();
        this.adventureGuy.update();
        
        this.mousePos.text = `${this.gx.toFixed()/4}, ${this.gy.toFixed()/4}`
        this.mousePos.update();
        
        this.frame++
        if (this.move) {
            if (this.anime === "idleRight") { this.idleCharacter(3, 6, 13, 5, 1); }
             else if (this.anime === "runLeft") { this.idleCharacter(5, 0, 8, 1, -1); }
             else if (this.anime === "idleLeft") { this.idleCharacter(3, 0, 13, 5, -1); }
             else if (this.anime === "runRight") { this.idleCharacter(1, 6, 8, 1, 1); }
         } 

    }

}