import Component from "./component";



export default class EvilBat extends Component {

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
            if (this.anime === "attackLeft") { this.spriteAnimation(16, 10, 8, 0, -1); }
            else if (this.anime === "flyLeft") { this.spriteAnimation(9, 3, 6, 0, -1); }
            else if (this.anime === "hitLeft") { this.spriteAnimation(2, 0, 8, 0, -1); }
            
        } else {
            this.customAnime(this.customArr);
        }
        this.frame++
    }



}