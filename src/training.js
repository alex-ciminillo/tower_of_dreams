import TrainingScreen from './../images/trainingScreen.png'
import Component from './component.js'
import MainCharacter from './../images/adventure.png'
import TrainingDummySpriteTransparent from './../images/trainingDummySpriteTransparent.png'
import TrainingDialogue from './../images/TrainingDialogue.png'
import TrainingWords from './../images/TrainingWords.png'
import { level_info } from './level_info.js'
import TalkingBox from './../images/talkingBox.png'
import Sound from './sound'
import SoundImage from './../images/soundImage.png'
import TrainingButtonsNewMove from './../images/TrainingButtonsNewMove.png'









export default class Training {
    constructor(ctx) {
        this.ctx = ctx;
        this.currentImports =['./soundImage.png', './talkingBox.png', './TrainingWords.png', './TrainingDialogue.png', './trainingScreen.png', './component.js', './adventure.png', './trainingDummySpriteTransparent.png']
        this.wordCounter = 0;
        this.levelCounter = 0;
        this.createInitialComponents();
        this.anime = "idleRight";
        this.frame = 0;
        this.playCounter = 0;
    }

    createInitialComponents() {
        this.level1 = level_info
        
        this.wordSound = new Component(11.11, 9.72, SoundImage, 34.50685146588856, 82.23874760475795, this.ctx, "image")
        this.sentSound = new Component(11.11, 9.72, SoundImage, 122.09685146588856, 82.23874760475795, this.ctx, "image")
        this.adventureGuy = new Component(115, 70, MainCharacter, 65, 5, this.ctx, "sprite", 5, 3, 50, 37);
        this.trainingDummy = new Component(38.15, 53.3, TrainingDummySpriteTransparent, 177.23, 20.01, this.ctx, "sprite", 0, 0, 185, 235);
        this.initialComponentArr = [new Component(300, 150, TrainingScreen, 0, 0, this.ctx, "image")]
        this.dialogueBox = new Component(295.52722245267773, 87.06392648914046, TrainingDialogue, 2.431964063489289, 61.252678918476605, this.ctx, "image")
        this.newWordBox = new Component(259.90, 68.04785297828089, TrainingWords, 21.710000000000008, 71.74678918476592, this.ctx, "image")
        this.newMoveTalkingBox = new Component(64.97, 16.374642163046813, TalkingBox, 130.69837303233416, 3.3146421630468135, this.ctx, "image")
        this.newMoveText = new Component("9px", "PixelFont", "Black", 137.68, 16.54, this.ctx, "text");
        this.newMoveText.text = "New Move!"
        this.newWordJapanese = new Component("9px", "Ubuntu", "Black", 49.18, 90.71, this.ctx, "text");
        this.newWordRomanji = new Component("9px", "Ubuntu", "Black", 49.18, 105.63, this.ctx, "text");
        this.newWordEnglish = new Component("9px", "Ubuntu", "Black", 49.18, 121.60, this.ctx, "text");
        this.newWordJapaneseSent = new Component("9px", "Ubuntu", "Black", 136.32, 90.71, this.ctx, "text");
        this.newWordRomanjiSent = new Component("9px", "Ubuntu", "Black", 136.32, 105.94, this.ctx, "text");
        this.newWordEnglishSent = new Component("9px", "Ubuntu", "Black", 136.32, 121.60, this.ctx, "text");
        this.nextWord = new Component(43.13, 13.54, TrainingButtonsNewMove, 238.59000833680702, 125.15168263494704, this.ctx, "image")
        this.nextWordText = new Component("11px", "PixelFont", "Black", 246.22, 138.40, this.ctx, "text");
        this.nextWordText.text = "Next"
        this.previousWord = new Component(62.91, 13.54, TrainingButtonsNewMove, 18.939999999999998, 125.15168263494704, this.ctx, "image")
        this.previousWordText = new Component("11px", "PixelFont", "Black", 26.62, 138.40, this.ctx, "text");
        this.previousWordText.text = "Previous"
        this.changeText();
        this.loadAllSounds();
        this.soundWord = new Sound(this.pathKeysHash[this.level1[this.levelCounter].words[this.wordCounter]["japanese"]], 1)
        this.soundSent = new Sound(this.pathKeysHash[this.level1[this.levelCounter].words[this.wordCounter]["example_japanese"].slice(0,-1)], 1)
    }


    sounds () {
        const path = require.context("./../voices", false, /\.mp3$/)
        this.pathkeys = path.keys()
        return path.keys().map(path)
    }

    loadAllSounds() {
        let images = this.sounds();
        this.pathKeysHash = {};
        for (let i = 0; i < images.length; i++) {
            this.pathKeysHash[`${this.pathkeys[i].slice(2, -4)}`] = images[i].default 
        }
    }



    changeText() {
        this.newWordJapanese.text = this.level1[this.levelCounter].words[this.wordCounter]["japanese"]
        this.newWordRomanji.text = this.level1[this.levelCounter].words[this.wordCounter]["romanji"]
        this.newWordEnglish.text = this.level1[this.levelCounter].words[this.wordCounter]["english"]
        this.newWordJapaneseSent.text = this.level1[this.levelCounter].words[this.wordCounter]["example_japanese"]
        this.newWordRomanjiSent.text = this.level1[this.levelCounter].words[this.wordCounter]["example_romanji"]
        this.newWordEnglishSent.text = this.level1[this.levelCounter].words[this.wordCounter]["example_english"]
    }

    changeSound() {
        let nextWord = this.level1[this.levelCounter].words[this.wordCounter]["japanese"]
        if (nextWord.includes("~")) {
            nextWord = nextWord.split("~").join("_")
        }
        this.soundWord.sound.src = this.pathKeysHash[nextWord]
        this.soundSent.sound.src = this.pathKeysHash[this.level1[this.levelCounter].words[this.wordCounter]["example_japanese"].slice(0,-1)]
    }

    updateInitialComponents() {
        for (let i = 0; i < this.initialComponentArr.length; i++) {
            this.initialComponentArr[i].update();
        }
        
        this.adventureGuy.update();
        this.trainingDummy.update();
        this.dialogueBox.update();
        this.newWordBox.update();
        this.newMoveTalkingBox.update();
        this.newMoveText.update();
        this.newWordEnglish.update();
        this.newWordJapanese.update();
        this.newWordRomanji.update();
        this.newWordEnglishSent.update();
        this.newWordJapaneseSent.update();
        this.newWordRomanjiSent.update();
        this.wordSound.update();
        this.sentSound.update();
        if (this.wordCounter < this.level1[this.levelCounter].words.length - 1) {
            this.nextWord.update();
            this.nextWordText.update();
        }
        
        if (this.wordCounter > 0) { 
            this.previousWord.update();
            this.previousWordText.update(); 
        }
    }

    spriteAnimation(start, stop, speed, row, colDir) {
        if (this.firstAnimation === true) { 
            this.adventureGuy.column = start;
            this.adventureGuy.row = row;
            this.firstAnimation = false;
        }
        if (this.frame >= speed) {
            this.adventureGuy.column += colDir;
            this.frame = 0;
            if (this.adventureGuy.column === stop + colDir && this.adventureGuy.row === row) {
                this.adventureGuy.column = start;
                this.adventureGuy.row = row;
                this.playNum -= 1;
                if (this.playNum === 0) {
                    this.playNum -= 1;
                    this.anime = this.nextAnime;
                    this.firstAnimation = true;
                    this.frame = 0;
                }
            } else if (this.adventureGuy.row > row) {
                if (this.adventureGuy.column === stop - 6) {
                    this.adventureGuy.column = start;
                    this.adventureGuy.row = row;
                    this.playNum -= 1;
                    if (this.playNum === 0) {
                        this.playNum -= 1;
                        this.anime = this.nextAnime;
                        this.firstAnimation = true;
                        this.frame = 0;
                    }
                }
            } else if (this.adventureGuy.column === 7) {
                this.adventureGuy.row += 1;
                this.adventureGuy.column = 0;
            }
        }
    }



    click(e) {
        if (e.type === "mouseup") { this.handleMouseUpClicks(); }
    }

    changeToNewCard(dir) {
        if (dir > 0) { this.startNewAnime("attack1Right", "idleRight", 1); }
        this.wordCounter += dir
        this.changeText();
        this.changeSound();
    }

    handleMouseUpClicks() {
        if (this.wordSound.clicked(this.gx, this.gy)) { this.soundWord.play() }
        else if (this.sentSound.clicked(this.gx, this.gy)) { this.soundSent.play() }
        else if (this.nextWord.clicked(this.gx, this.gy) && this.wordCounter < this.level1[this.levelCounter].words.length - 1) { this.changeToNewCard(1); } 
        else if (this.previousWord.clicked(this.gx, this.gy) && this.wordCounter > 0) { this.changeToNewCard(-1); }
    }


    hover(e) {
        
    }

    startNewAnime(newAnime, nextAnime, playNum) {
        this.frame = 0;
        this.firstAnimation = true;
        this.anime = newAnime;
        this.nextAnime = nextAnime;
        this.playNum = playNum;
    }


    handleMainCharacterFrames() {
        this.frame++
        if (this.anime === "idleRight") { this.spriteAnimation(3, 6, 8, 5, 1); }
        else if (this.anime === "runLeft") { this.spriteAnimation(5, 0, 8, 1, -1); }
        else if (this.anime === "idleLeft") { this.spriteAnimation(3, 0, 13, 5, -1); }
        else if (this.anime === "runRight") { this.spriteAnimation(1, 6, 8, 1, 1); }
        else if (this.anime === "attack1Right") { this.spriteAnimation(0, 10, 4, 6, 1); }
    
    }

    animate(gx, gy) {
        this.gx = gx;
        this.gy = gy;
        this.updateInitialComponents();
        this.handleMainCharacterFrames();

    }


}






