import Component from "./component";



export default class TreasureChest extends Component {

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
        if (this.stop !== true) {
            if (this.customAnimation === false) {
                if (this.anime === "closed") { this.spriteAnimation(1, 2, 8, 0, 1); }
            } else {
                this.customAnime(this.customArr);
            }
            this.frame++
        }   
    }



}