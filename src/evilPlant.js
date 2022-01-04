import Component from "./component";



export default class EvilPlant extends Component {

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
            if (this.anime === "attackLeft") { this.spriteAnimation(25, 19, 6, 0, -1); }
            else if (this.anime === "attackRight") { this.spriteAnimation(18, 11, 8, 0, -1); }
            else if (this.anime === "hitLeft") { this.spriteAnimation(10, 8, 8, 0, -1); }
            else if (this.anime === "idleLeft") { this.spriteAnimation(7, 0, 10, 0, -1); }
            
            
        } else {
            this.customAnime(this.customArr);
        }
        this.frame++
    }



}