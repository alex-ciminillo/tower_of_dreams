import House from './../images/home.png'
import Component from "./component"
import MainCharacter from './../images/adventure.png'
import MainCharacterReversed from './../images/adventureReversed.png'
import Map from './../images/map.png'
import TrainingBox from './../images/simpleYesNoHomeBox.png'



export default class Home {
    constructor(canvas, ctx, dimensions) {
        
        this.canvas = canvas;
        this.ctx = ctx;
        this.dimensions = dimensions;
        this.myBackground = new Component(300, 150, "black", 0, 0, this.ctx, "other");
        this.myHouse = new Component(300, 150, House, 0, 0, this.ctx, "image");
        this.adventureGuy = new Component(55, 30, MainCharacter, 85, 60, this.ctx, "sprite", 5, 3, 50, 37);
        this.myMap = new Component(20.7, 11.4, Map, 138.6, 59.6, this.ctx, "image");
        this.myTraining = new Component(22, 15, "invisible", 88, 16, this.ctx, "other");
        this.move = true;
        this.askIfTrainingBox = false;
        this.anime = "idleRight";
        this.frame = 0;
        
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
            this.checkIfMovedToSpot();
        }
        
    }

    checkIfMovedToSpot() {
        if (this.myTraining.intersecting(this.adventureGuy)) {
            this.askIfTrainingBox = true;
        }
    }

    askIfTraining() {
        this.trainingBoxImage = new Component(87, 13, TrainingBox, 140, 59, this.ctx, "image");
        
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
        this.checkIfMovedToSpot();
        this.adventureGuy.checkIfStillMoving(this.clickedSpotx, this.clickedSpoty);
        this.myBackground.update();
        this.myHouse.update();
        this.myMap.update();
        this.myTraining.update();
        this.adventureGuy.newPos();
        this.adventureGuy.update();
        if (this.askIfTrainingBox === true) { this.askIfTraining(); }
        
        
        
        this.frame++
        if (this.move) {
            if (this.anime === "idleRight") { this.idleCharacter(3, 6, 13, 5, 1); }
             else if (this.anime === "runLeft") { this.idleCharacter(5, 0, 8, 1, -1); }
             else if (this.anime === "idleLeft") { this.idleCharacter(3, 0, 13, 5, -1); }
             else if (this.anime === "runRight") { this.idleCharacter(1, 6, 8, 1, 1); }
         } 

    }

}