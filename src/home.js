import House from './../images/home.png'
import Component from "./component"
import MainCharacter from './../images/adventure.png'
import MainCharacterReversed from './../images/adventureReversed.png'
import Map from './../images/map.png'
import SimpleYesNoHomeBox from './../images/simpleYesNoHomeBox.png'

import Background1 from './../images/background1.png'
import Background2 from './../images/background2.png'
import Background3 from './../images/background3.png'
import CastleTitle from './../images/castleTitle.png'
import Cloud1 from './../images/cloud1.png'
import Cloud3 from './../images/cloud3.png'
import Cloud4 from './../images/cloud4.png'
import Cloud7 from './../images/cloud7.png'
import Cloud8 from './../images/cloud8.png'
import Cloud6 from './../images/cloud6.png'
import Cloud2 from './../images/cloud2.png'
import CliffTitle from './../images/cliffTitle.png'
import AdventurerSingle from './../images/adventurerSingle.png'



export default class Home {
    constructor(canvas, ctx, dimensions) {
        
        this.canvas = canvas;
        this.ctx = ctx;
        this.dimensions = dimensions;
        this.myBackground = new Component(300, 150, "black", 0, 0, this.ctx, "other");
        this.myHouse = new Component(300, 150, House, 0, 0, this.ctx, "image");
        this.adventureGuy = new Component(55, 30, MainCharacter, 85, 60, this.ctx, "sprite", 5, 3, 50, 37);
        this.myMapImage = new Component(20.7, 11.4, Map, 138.6, 59.6, this.ctx, "image");
        this.myMap = new Component(1, 1, "invisible", 147.2, 64, this.ctx, "Other");
        this.myTraining = new Component(12, 15, "invisible", 75, 0, this.ctx, "other");
        this.move = true;
        this.yesInvisibleBox = new Component(38.38, 11.36, "invisible", 115.99, 84.69, this.ctx, "other")
        this.noInvisibleBox = new Component(38.38, 11.36, "invisible", 115.99, 84.69, this.ctx, "other")
        
        // test code section


        //test code section end




        this.askIfTrainingBox = false;
        this.anime = "idleRight";
        this.frame = 0;
        this.instaElements = [];
        this.createInstaElements();
        this.currentImports = ['./home.png', './component', './adventure.png', './adventureReversed.png', './map.png', './simpleYesNoHomeBox.png']
        
    }

    createInstaElements() {
        this.instaElements = [new Component(13.320090701290027, 6.001171088144297, Background1, 172.1428108924363, 18.363964847607136, this.ctx, "image"),
        new Component(13.335414360422945, 5.991820738800612, Background2, 172.12748723330338, 18.37331519695082, this.ctx, "image"),
        new Component(13.320090701290027, 5.991820738800612, Background3, 172.1428108924363, 18.37331519695082, this.ctx, "image"),
        new Component(3.6133188235423503, 4.810170340492327, CastleTitle, 180.4229501049092, 19.11450198584417, this.ctx, "image"),
        new Component(3.6131220930336276, 4.200954356474433, CastleTitle, 180.42324936787026, 18.43768102047705, this.ctx, "image"),
        new Component(1.333924527520617, 0.4061557996163492, Cloud1, 180.09731750275563, 22.66621216758214, this.ctx, "image"),
        new Component(1.2404502068098102, 0.4990748962192262, Cloud3, 181.10529698518664, 22.776842362177423, this.ctx, "image"),
        new Component(1.2098028885439716, 0.4984904993852455, Cloud4, 182.17521052675852, 22.573959639601636, this.ctx, "image"),
        new Component(1.2251265476768909, 0.5265415474163024, Cloud7, 180.22144398731132, 23.118617488871326, this.ctx, "image"),
        new Component(1.3186008683876977, 0.47102384818816834, Cloud8, 181.663400311719, 23.15543448941209, this.ctx, "image"),
        new Component(1.6442286249622313, 0.4984904993852455, Cloud6, 182.7642230266476, 22.934280238781536, this.ctx, "image"),
        new Component(1.1473825270914242, 0.44357431611367293, Cloud4, 183.3537121376904, 23.478588819480645, this.ctx, "image"),
        new Component(1.178389387321488, 0.5358918967599884, Cloud1, 180.2835048067996, 23.653924988797332, this.ctx, "image"),
        new Component(1.3484820036968905, 0.5078408487289314, Cloud4, 180.7646677035733, 23.432438588718778, this.ctx, "image"),
        new Component(1.4733698256301828, 0.5633585479570655, Cloud6, 181.98902806829352, 23.524773288487676, this.ctx, "image"),
        new Component(0.9615596105906805, 0.388039497762958, Cloud4, 179.2601884852607, 22.93376089461336, this.ctx, "image"),
        new Component(1.2090367055873257, 0.5078408487289314, Cloud8, 182.67173933611423, 23.792662166714077, this.ctx, "image"),
        new Component(1.1944792294110522, 0.4984904993852455, Cloud1, 184.1443007253386, 23.164784838755775, this.ctx, "image"),
        new Component(1.3025110262981325, 0.4429728001571114, Cloud1, 183.7257500749472, 22.49087826799182, this.ctx, "image"),
        new Component(1.085681249567326, 0.3325217985348239, Cloud6, 184.31515952467066, 23.672625687484707, this.ctx, "image"),
        new Component(1.2404502068098102, 0.35122249722219534, Cloud6, 179.40009585778682, 23.330753539606196, this.ctx, "image"),
        new Component(1.178389387321488, 0.5540081986133796, Cloud8, 179.16717623896648, 23.617107988256574, this.ctx, "image"),
        new Component(1.0389440892119222, 0.4429728001571114, Cloud8, 178.3297382673524, 22.67564468871422, this.ctx, "image"),
        new Component(1.3645718457864557, 0.4984904993852455, Cloud8, 176.8571346246789, 22.58330998894532, this.ctx, "image"),
        new Component(1.3484820036968905, 0.37868914841927204, Cloud6, 177.57045095731627, 23.257119538524673, this.ctx, "image"),
        new Component(1.2404502068098102, 0.47102384818816834, Cloud8, 177.97346319251204, 23.589641337059494, this.ctx, "image"),
        new Component(1.4572799835406176, 0.48914015004155953, Cloud2, 178.37632095064828, 23.072560855469543, this.ctx, "image"),
        new Component(1.4105428231852137, 0.5721245004667708, Cloud1, 176.59356768759267, 23.589641337059494, this.ctx, "image"),
        new Component(1.3025110262981325, 0.47102384818816834, Cloud6, 175.44859841783813, 23.478605938603227, this.ctx, "image"),
        new Component(1.4726036426735352, 0.48972454687554023, Cloud7, 175.29105666129453, 23.15543448941209, this.ctx, "image"),
        new Component(1.4580461664972635, 0.48914015004155953, Cloud8, 172.33247738290646, 22.684995038057902, this.ctx, "image"),
        new Component(1.3484820036968905, 0.48914015004155953, Cloud3, 172.62397378920997, 22.84161338956464, this.ctx, "image"),
        new Component(1.860292218736392, 0.5078408487289314, Cloud2, 173.02698602440574, 23.257119538524673, this.ctx, "image"),
        new Component(0.046737160355403595, 0.009350349343685727, Cloud2, 162.99458639008353, 22.693760990567608, this.ctx, "image"),
        new Component(1.6894334194043434, 0.4990748962192262, Cloud2, 172.114881423219, 23.79242703845068, this.ctx, "image"),
        new Component(1.3186008683876977, 0.5908251991541418, Cloud6, 172.46843864901084, 23.663275338141023, this.ctx, "image"),
        new Component(4.341192632356012, 2.5573205454980474, CliffTitle, 172.14335747375117, 21.392222491582295, this.ctx, "image"),
        new Component(4.434993932739943, 3.0744917776726446, CliffTitle, 172.1428108924363, 21.290610496882707, this.ctx, "image"),
        new Component(2.061798336334279, 1.6339735478090827, AdventurerSingle, 173.87352759595677, 21.068120553468336, this.ctx, "image"),
        new Component(2.2196382494308304, 0.7865038509643902, Cloud3, 176.55856311662026, 23.096503192679883, this.ctx, "image")];
    }

    drawInstaElements() {
        for (let i = 0; i < this.instaElements.length; i++) {
            this.instaElements[i].update();
        }
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

    checkIfStartTrainingOrTower(e) {
        if (this.myMapImage.intersecting(this.adventureGuy) && this.myMapImage.clicked(this.clickGX, this.clickGY)) {
            this.checkTowerYesNo = true;
        } else if (this.myTraining.intersecting(this.adventureGuy)) {
            if (this.yesInvisibleBox.clicked(this.gx, this.gy)) {
                this.beginTraining = true;
            } 
            if (this.noInvisibleBox.clicked(this.gx, this.gy)) {
                
            }
        } else {
            this.checkTowerYesNo = false;
        }
            
    }

    checkTower() {
        if (this.yesInvisibleBox.clicked(this.gx, this.gy)) {
            this.beginTower = true;
        } 
    }



    click(e) {
        
        if (e.type === "mouseup") {
            this.clickGX = this.gx;
            this.clickGY = this.gy;
            
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
            if (this.checkTowerYesNo === true) { 
                this.checkTower(); 
            }
            
        }
        
    }

    checkIfMovedToSpot() {
        if (this.myTraining.intersecting(this.adventureGuy)) {
            this.askIfTrainingBox = true;
            this.trainingBoxImage = new Component(121.7680246284894, 82.58208163658705, SimpleYesNoHomeBox, 98.42360770334705, 32.66812245488062, this.ctx, "image")
            this.startTrainingText = new Component("10px", "PixelFont", "Black", 120.42, 70.14, this.ctx, "text");
            this.startTrainingTextShadow = new Component("10px", "PixelFont", "Gray", 120.92, 70.64, this.ctx, "text");
            this.startTrainingTextShadow.text = "Start Training?"
            this.startTrainingText.text = "Start Training?"

            this.yesText = new Component("9px", "PixelFont", "Black", 126.18, 95.04, this.ctx, "text");
            this.yesTextShadow = new Component("9px", "PixelFont", "Gray", 126.68, 95.54, this.ctx, "text");
            this.yesText.text = "Yes"
            this.yesTextShadow.text = "Yes"

            this.noText = new Component("9px", "PixelFont", "Black", 175.18, 95.04, this.ctx, "text");
            this.noTextShadow = new Component("9px", "PixelFont", "Gray", 175.68, 95.54, this.ctx, "text");
            this.noText.text = "No"
            this.noTextShadow.text = "No"

            this.noInvisibleBox = new Component(39.38, 11.36, "invisible", 162.99, 84.69, this.ctx, "other")
            this.yesInvisibleBox = new Component(38.38, 11.36, "invisible", 115.99, 84.69, this.ctx, "other")
            
        } else if (this.myMap.intersecting(this.adventureGuy) && this.myMapImage.clicked(this.clickGX, this.clickGY)) {
            this.askIfTrainingBox = true;
            this.trainingBoxImage = new Component(165.7680246284894, 82.58208163658705, SimpleYesNoHomeBox, 78.42360770334705, 32.66812245488062, this.ctx, "image")
            this.startTrainingText = new Component("10px", "PixelFont", "Black", 105.42, 70.14, this.ctx, "text");
            this.startTrainingTextShadow = new Component("10px", "PixelFont", "Gray", 105.92, 70.64, this.ctx, "text");
            this.startTrainingTextShadow.text = "Challenge the Tower?"
            this.startTrainingText.text = "Challenge the Tower?"

            this.yesText = new Component("9px", "PixelFont", "Black", 120.18, 95.04, this.ctx, "text");
            this.yesTextShadow = new Component("9px", "PixelFont", "Gray", 120.68, 95.54, this.ctx, "text");
            this.yesText.text = "Yes"
            this.yesTextShadow.text = "Yes"

            this.noText = new Component("9px", "PixelFont", "Black", 187.18, 95.04, this.ctx, "text");
            this.noTextShadow = new Component("9px", "PixelFont", "Gray", 187.68, 95.54, this.ctx, "text");
            this.noText.text = "No"
            this.noTextShadow.text = "No"

            this.noInvisibleBox = new Component(39.38, 11.36, "invisible", 162.99, 84.69, this.ctx, "other")
            this.yesInvisibleBox = new Component(38.38, 11.36, "invisible", 115.99, 84.69, this.ctx, "other")
        } else {
            this.askIfTrainingBox = false;
        }
    }

    askIfTraining() {
        this.trainingBoxImage.update();
        this.startTrainingTextShadow.update();
        this.startTrainingText.update();
        this.yesTextShadow.update();
        this.yesText.update();
        this.noTextShadow.update();
        this.noText.update();
        this.noInvisibleBox.update();
        this.yesInvisibleBox.update();
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


    animate(e) {
        this.boundaries();
        this.checkSpeed();
        this.checkIfMovedToSpot();
        this.adventureGuy.checkIfStillMoving(this.clickedSpotx, this.clickedSpoty);
        this.myBackground.update();
        this.myHouse.update();
        this.myMapImage.update();
        this.myTraining.update();
        this.drawInstaElements();
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
         this.checkIfStartTrainingOrTower(e);
    }

}