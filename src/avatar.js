import Component from "./component";



export default class Avatar extends Component {

    constructor(width, height, color, x, y, ctx, type, row, column, frameWidth, frameHeight, anime, columnLength) {
        super(width, height, color, x, y, ctx, type, row, column, frameWidth, frameHeight)
        this.anime = anime
        this.frame = 0;
        this.columnLength = columnLength;
        this.customAnimation = false;
    }






    animate() {
        this.update();
        if (this.customAnimation === false) {
            if (this.anime === "idleRight") { this.spriteAnimation(3, 6, 8, 5, 1); }
            else if (this.anime === "runLeft") { this.spriteAnimation(5, 0, 8, 1, -1); }
            else if (this.anime === "idleLeft") { this.spriteAnimation(3, 0, 13, 5, -1); }
            else if (this.anime === "runRight") { this.spriteAnimation(1, 6, 8, 1, 1); }
            else if (this.anime === "attack1Right") { this.spriteAnimation(0, 10, 4, 6, 1); }
            else if (this.anime === "attack2Right") { this.spriteAnimation(4, 9, 6, 7, 1); }
            else if (this.anime === "attack3Right") { this.spriteAnimation(5, 7, 8, 13, 1); }
            else if (this.anime === "attack4Right") { this.spriteAnimation(2, 4, 8, 14, 1); }
            else if (this.anime === "takeHitRight") { this.spriteAnimation(3, 12, 10, 8, 1); }
        } else {
            this.customAnime(this.customArr);
        }
        this.frame++
    }



}