import Component from "./component";



export default class EvilGolem extends Component {

    constructor(width, height, color, x, y, ctx, type, row, column, frameWidth, frameHeight, anime, columnLength) {
        super(width, height, color, x, y, ctx, type, row, column, frameWidth, frameHeight)
        this.anime = anime;
        this.frame = 0;
        this.columnLength = columnLength;
        this.customAnimation = false;
    }






    animate() {
        this.update();
        this.newPos();
        if (this.customAnimation === false) {
            if (this.anime === "attack1Left") { this.spriteAnimation(0, 7, 8, 0, 1); }
            else if (this.anime === "attack2Left") { this.spriteAnimation(8, 15, 8, 0, 1); }
            else if (this.anime === "dieLeft") { this.spriteAnimation(23, 32, 8, 0, 1); }
            else if (this.anime === "hitLeft") { this.spriteAnimation(33, 36, 8, 0, 1); }
            else if (this.anime === "idleLeft") { this.spriteAnimation(37, 42, 8, 0, 1); }
            else if (this.anime === "walkLeft") { this.spriteAnimation(50, 57, 8, 0, 1); }
            
        } else {
            this.customAnime(this.customArr);
        }
        this.frame++
    }



}