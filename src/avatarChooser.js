import StickmanBlack from './../images/stickman_black.png'
import StickmanBlue from './../images/stickman_blue.png'
import StickmanGreen from './../images/stickman_green.png'
import StickmanRed from './../images/stickman_red.png'
import StickmanYellow from './../images/stickman_yellow.png'
import Component from './component'
import Background from './../images/avatarSelection.png'

export default class AvatarChooser {

    constructor(canvas, ctx, dimensions) {
        this.colorArr = [StickmanBlack, StickmanBlue, StickmanGreen, StickmanRed, StickmanYellow]
        this.canvas = canvas;
        this.ctx = ctx;
        this.dimensions = dimensions;
        this.gx = 0;
        this.gy = 0;
        let row = 0;
        let column = 0;
        let frameWidth = 256;
        let frameHeight = 384;
        this.btn = new Component(20, 20, "yellow", 150, 50, this.ctx, "box");
        this.nextBtn = new Component(50, 20, "red", 175, 110, this.ctx, "box");
        this.myBackground = new Component(300, 150, Background, 0, 0, this.ctx, "image");
        this.stickman = new Component(110, 110, StickmanBlack, 15, 0, this.ctx, "sprite", row, column, frameWidth, frameHeight);
        this.frame = 0;
        this.standing = true;
    }

    stickMove() {
        if (this.standing === true && this.frame === 60) {
            this.stickman.column++
            this.frame = 0;
            if (this.stickman.column === 4) {
                this.stickman.column = 0;
            }
        }
    }

    changeColor() {
        this.stickman.color = this.colorArr[(this.colorArr.indexOf(this.stickman.color) + 1) % this.colorArr.length]
    }

    animate() {
        this.myBackground.newPos();
        this.myBackground.update();
        this.btn.newPos();
        this.btn.update();
        this.nextBtn.newPos();
        this.nextBtn.update();
        this.frame++
        this.stickMove();
        this.stickman.newPos();
        this.stickman.update();
    }



}