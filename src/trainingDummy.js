import Component from "./component";



export default class TrainingDummy extends Component {

    constructor(width, height, color, x, y, ctx, type, row, column, frameWidth, frameHeight, anime, columnLength) {
        super(width, height, color, x, y, ctx, type, row, column, frameWidth, frameHeight)
        this.anime = anime
        this.frame = 0;
        this.columnLength = columnLength;
        this.customAnimation = false;
    }






    animate() {
        this.update();
        if (this.anime === "idleLeft") { this.spriteAnimation(0, 1, 99999999, 0, 1); }
        else if (this.anime === "takeHitLeft") { this.spriteAnimation(1, 2, 11, 0, 1); }this.frame++
    }



}