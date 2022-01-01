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
import Avatar from './avatar'
import TrainingDummy from './trainingDummy'








export default class Training {
    constructor(ctx, level, word) {
        this.ctx = ctx;
        this.currentImports =['./soundImage.png', './talkingBox.png', './TrainingWords.png', './TrainingDialogue.png', './trainingScreen.png', './component.js', './adventure.png', './trainingDummySpriteTransparent.png', './TrainingButtonsNewMove.png']
        this.wordCounter = word;
        this.levelCounter = level;
        this.quizCounter = 0;
        this.quiz1 = false;
        this.quiz2 = false;
        this.quiz3 = false;
        this.complete = false;
        this.questionsArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
        this.createInitialComponents();
    }

    createInitialComponents() {
        this.level1 = level_info
        this.loadAllSounds();
        this.createSounds();
        this.createSprites();
        this.createImages();
        this.createTexts();
        this.changeNewCardText();
        this.changeQuizCardText();
    }

    createTexts() {
        this.newMoveText = new Component("9px", "PixelFont", "Black", 152.68, 16.54, this.ctx, "text");
        this.newMoveText.text = "New Move!"
        this.newWordJapanese = new Component("9px", "Ubuntu", "Black", 49.18, 90.71, this.ctx, "text");
        this.newWordRomanji = new Component("9px", "Ubuntu", "Black", 49.18, 105.63, this.ctx, "text");
        this.newWordEnglish = new Component("9px", "Ubuntu", "Black", 49.18, 121.60, this.ctx, "text");
        this.newWordJapaneseSent = new Component("9px", "Ubuntu", "Black", 136.32, 90.71, this.ctx, "text");
        this.newWordRomanjiSent = new Component("9px", "Ubuntu", "Black", 136.32, 105.94, this.ctx, "text");
        this.newWordEnglishSent = new Component("9px", "Ubuntu", "Black", 136.32, 121.60, this.ctx, "text");
        this.nextWordText = new Component("11px", "PixelFont", "Black", 246.22, 138.40, this.ctx, "text");
        this.nextWordText.text = "Next"
        this.previousWordText = new Component("11px", "PixelFont", "Black", 26.62, 138.40, this.ctx, "text");
        this.previousWordText.text = "Previous"
        this.questionText = new Component("9px", "Ubuntu", "Black", 98.18, 111.71, this.ctx, "text");
        this.answer1Text = new Component("9px", "Ubuntu", "Black", 38.18, 90.71, this.ctx, "text");
        this.answer2Text = new Component("9px", "Ubuntu", "Black", 190.18, 90.71, this.ctx, "text");
        this.answer3Text = new Component("9px", "Ubuntu", "Black", 38.18, 111.71, this.ctx, "text");
        this.answer4Text = new Component("9px", "Ubuntu", "Black", 190.18, 111.71, this.ctx, "text");
    }

    createImages() {
        this.initialComponentArr = []
        this.quizCardImagesArr = [new Component(109.61755963000573, 22.177861726704904, TrainingButtonsNewMove, 171.59149672000663, 117.50781894412596, this.ctx, "image"),
        new Component(107.50160157000525, 21.767861726704893, TrainingButtonsNewMove, 172.64824115499684, 72.32717036022932, this.ctx, "image"),
        new Component(103.81958060000548, 21.35643621117481, TrainingButtonsNewMove, 19.817099607498704, 72.33073414905449, this.ctx, "image"),
        new Component(104.34688990750145, 20.939999999999998, TrainingButtonsNewMove, 20.8670996074987, 117.92282963977067, this.ctx, "image"),
        new Component(151.25367496500422, 20.950000000000003, TrainingWords, 70.40342464249443, 95.74, this.ctx, "image")]
        this.background = new Component(300, 150, TrainingScreen, 0, 0, this.ctx, "image")
        this.dialogueBox = new Component(295.52722245267773, 87.06392648914046, TrainingDialogue, 2.431964063489289, 61.252678918476605, this.ctx, "image")
        this.newWordBox = new Component(259.90, 68.04785297828089, TrainingWords, 21.710000000000008, 71.74678918476592, this.ctx, "image")
        this.newMoveTalkingBox = new Component(64.97, 16.374642163046813, TalkingBox, 145.69837303233416, 3.3146421630468135, this.ctx, "image")
        this.nextWord = new Component(43.13, 13.54, TrainingButtonsNewMove, 238.59000833680702, 125.15168263494704, this.ctx, "image")
        this.previousWord = new Component(62.91, 13.54, TrainingButtonsNewMove, 18.939999999999998, 125.15168263494704, this.ctx, "image")
        this.wordSound = new Component(11.11, 9.72, SoundImage, 34.50685146588856, 82.23874760475795, this.ctx, "image")
        this.sentSound = new Component(11.11, 9.72, SoundImage, 122.09685146588856, 82.23874760475795, this.ctx, "image")    
    }

    createSounds() {
        this.soundWord = new Sound(this.pathKeysHash[this.level1[this.levelCounter].words[this.wordCounter]["japanese"]], 1)
        this.soundSent = new Sound(this.pathKeysHash[this.level1[this.levelCounter].words[this.wordCounter]["example_japanese"].slice(0,-1)], 1)
    }

    createSprites() {
        this.adventureGuy = new Avatar(115, 70, MainCharacter, 81, 5, this.ctx, "sprite", 5, 3, 50, 37, "idleRight", 6);
        this.trainingDummy = new TrainingDummy(36.15, 47.3, TrainingDummySpriteTransparent, 174.23, 24.01, this.ctx, "sprite", 0, 0, 185, 235, "idleLeft", 2);
    }

    importSounds () {
        const path = require.context("./../voices", false, /\.mp3$/)
        this.pathkeys = path.keys()
        return path.keys().map(path)
    }

    loadAllSounds() {
        let images = this.importSounds();
        this.pathKeysHash = {};
        for (let i = 0; i < images.length; i++) {
            this.pathKeysHash[`${this.pathkeys[i].slice(2, -4)}`] = images[i].default 
        }
    }

    changeNewCardText() {
        this.newWordJapanese.text = this.level1[this.levelCounter].words[this.wordCounter]["japanese"]
        this.newWordRomanji.text = this.level1[this.levelCounter].words[this.wordCounter]["romanji"]
        this.newWordEnglish.text = this.level1[this.levelCounter].words[this.wordCounter]["english"]
        this.newWordJapaneseSent.text = this.level1[this.levelCounter].words[this.wordCounter]["example_japanese"]
        this.newWordRomanjiSent.text = this.level1[this.levelCounter].words[this.wordCounter]["example_romanji"]
        this.newWordEnglishSent.text = this.level1[this.levelCounter].words[this.wordCounter]["example_english"]
    }

    changeQuizCardText() {
        this.questionText.text = "Hello"
        this.answer1Text.text = "Hello"
        this.answer2Text.text = "Hello"
        this.answer3Text.text = "Hello"
        this.answer4Text.text = "Hello"
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
        this.dialogueBox.update();
    }

    updateNewCardComponents() {
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


    click(e) {
        if (e.type === "mouseup") { this.handleMouseUpClicks(); }
    }

    checkQuizStatus() {
        console.log(this.level1[this.levelCounter].words[this.wordCounter]["seen"])
        if (this.wordCounter === 4 && this.level1[this.levelCounter].words[this.wordCounter]["seen"] === "false") {
            console.log("hello")
            this.quiz1 = true;
            this.level1[this.levelCounter].words[this.wordCounter]["seen"] = "true"
        }
    }

    changeToNewCard(dir) {
        if (dir > 0) { 
            let attackArr = ["attack1Right", "attack2Right", "attack3Right", "attack4Right"]
            this.adventureGuy.startNewAnime(attackArr[Math.floor(Math.random() * attackArr.length)], "idleRight", 1) 
            this.trainingDummy.startNewAnime("takeHitLeft", "idleLeft", 2)
        }
        this.wordCounter += dir
        this.checkQuizStatus();
        this.changeNewCardText();
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

    spriteAnimation() {
        this.trainingDummy.animate();
        this.adventureGuy.animate();
    }

    updateQuizCardComponents() {
        for (let i = 0; i < this.quizCardImagesArr.length; i++) {
            this.quizCardImagesArr[i].update();
        }
        this.questionText.update();
        this.answer1Text.update();
        this.answer2Text.update();
        this.answer3Text.update();
        this.answer4Text.update();

    }

    animate(gx, gy) {
        this.gx = gx;
        this.gy = gy;
        this.background.update();
        this.spriteAnimation();
        this.updateInitialComponents();
        if (this.quiz1 === true) { this.updateQuizCardComponents(); }
        else { this.updateNewCardComponents(); }
        

    }


}






