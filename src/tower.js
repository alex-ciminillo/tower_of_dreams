import TrainingScreen from './../images/trainingScreen.png'
import Component from './component.js'
import MainCharacter from './../images/adventure.png'
import EvilBatSpritesheetReversed from './../images/evilBatSpritesheetReversed.png'
import EvilSlugSpritesheetReversed from './../images/evilSlugSpritesheetReversed.png'
import EvilPlantSpritesheetReversed from './../images/evilPlantSpritesheetReversed.png'
import EvilBeakGuySpritesheetReversed from './../images/evilBeakGuySpritesheetReversed.png'
import EvilSkullSnakeSpritesheetReversed from './../images/evilSkullSnakeSpritesheetReversed.png'
import EvilGolemSpritesheet from './../images/evilGolemSpritesheet.png'
import TreasureChestSpritesheet from './../images/treasure chests.png'
import TrainingDummySpriteTransparent from './../images/trainingDummySpriteTransparent.png'
import TrainingDialogue from './../images/TrainingDialogue.png'
import TrainingWords from './../images/TrainingWords.png'
import { level_info } from './level_info.js'
import TalkingBox from './../images/talkingBox.png'
import Sound from './sound'
import SoundImage from './../images/soundImage.png'
import TrainingButtonsNewMove from './../images/TrainingButtonsNewMove.png'
import TrainingButtonsNewMoveGreen from './../images/TrainingButtonsNewMoveGreen.png'
import TrainingButtonsNewMoveRed from './../images/TrainingButtonsNewMoveRed.png'
import Avatar from './avatar'
import EvilBat from './evilBat'
import EvilSlug from './evilSlug'
import EvilBeakGuy from './evilBeakGuy'
import EvilPlant from './evilPlant'
import EvilSkullSnake from './evilSkullSnake'
import EvilGolem from './evilGolem'
import TrainingDummy from './trainingDummy'
import HomeButton from './../images/homeButton.png'
import TowerLevel1 from './../images/towerLevel1.png'
import TowerLevel1Bottom from './../images/towerLevel1Bottom.png'
import TreasureChest from './treasureChest'
import SimpleYesNoHomeBox from './../images/simpleYesNoHomeBox.png'
import Pixel_heart from './../images/pixel_heart.png'







export default class Tower {
    constructor(ctx, level, word, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.currentImports =['./homeButton.png', './soundImage.png', './talkingBox.png', './TrainingWords.png', './TrainingDialogue.png', './trainingScreen.png', './component.js', './adventure.png', './trainingDummySpriteTransparent.png', './TrainingButtonsNewMove.png']
        this.wordCounter = word;
        this.levelCounter = level;
        this.quizCounter = 0;
        this.goHome = false;
        this.towerTime = false;
        this.bossBattle = false;
        this.quiz1 = true;
        this.quiz2 = false;
        this.quiz3 = false;
        this.complete = false;
        this.playedSound = false;
        this.playedQuizSound = false;
        this.towerTime = false;
        this.shakeScreen = false;
        this.hasGrown = false;
        this.canAttack = true;
        this.check = 0;
        this.questionsArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
        this.attackOrder = [];
        this.hitCounter = 0;
        this.createInitialComponents();
        this.heartArr = [this.pixelHeart1, this.pixelHeart2, this.pixelHeart3]
        // this.startBossBattle();
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
        this.newWordJapanese = new Component("9px", "Ubuntu", "Black", 49.18, 90.71, this.ctx, "text");
        this.newWordRomanji = new Component("9px", "Ubuntu", "Black", 49.18, 105.63, this.ctx, "text");
        this.newWordEnglish = new Component("9px", "Ubuntu", "Black", 49.18, 121.60, this.ctx, "text");
        this.newWordJapaneseSent = new Component("9px", "Ubuntu", "Black", 136.32, 90.71, this.ctx, "text");
        this.newWordRomanjiSent = new Component("9px", "Ubuntu", "Black", 136.32, 105.94, this.ctx, "text");
        this.newWordEnglishSent = new Component("9px", "Ubuntu", "Black", 136.32, 121.60, this.ctx, "text");
        this.nextWordText = new Component("11px", "PixelFont", "Black", 246.22, 138.40, this.ctx, "text");
        this.nextWordText.text = "Next"
        this.testAllText = new Component("11px", "PixelFont", "Black", 228.22, 138.40, this.ctx, "text");
        this.testAllText.text = "Test All"
        this.toTheTowerText = new Component("11px", "PixelFont", "Black", 189.22, 138.40, this.ctx, "text");
        this.toTheTowerText.text = "To the Tower!"
        this.previousWordText = new Component("11px", "PixelFont", "Black", 26.62, 138.40, this.ctx, "text");
        this.previousWordText.text = "Previous"
        this.questionText = new Component("17px", "Ubuntu", "Black", 125.18, 100.21, this.ctx, "text");
        this.answer1Text = new Component("14px", "Ubuntu", "Black", 53.18, 121.2, this.ctx, "text");
        this.answer2Text = new Component("14px", "Ubuntu", "Black", 207.18, 121.2, this.ctx, "text");
        this.answer3Text = new Component("14px", "Ubuntu", "Black", 53.18, 143.71, this.ctx, "text");
        this.answer4Text = new Component("14px", "Ubuntu", "Black", 207.18, 143.71, this.ctx, "text");
        this.answer1TextHeightStatic = this.answer1Text.y;
        this.answer2TextHeightStatic = this.answer2Text.y;
        this.answer3TextHeightStatic = this.answer3Text.y;
        this.answer4TextHeightStatic = this.answer4Text.y;
        
    }

    createImages() {
        this.initialComponentArr = []
        this.background = new Component(1200, 135, TowerLevel1, 0, -25, this.ctx, "background")
        this.background.speedX = -2;
        this.backgroundBottom = new Component(this.background.width, this.background.height, TowerLevel1Bottom, this.background.x, this.background.y + this.background.height, this.ctx, "background")
        this.answer4 = new Component(130.34688990750145, 20.939999999999998, TrainingButtonsNewMove, 150.59149672000663, 127.50781894412596, this.ctx, "image")
        this.answer2 = new Component(130.34688990750145, 20.939999999999998, TrainingButtonsNewMove, 150.59149672000663, 105.32717036022932, this.ctx, "image")
        this.answer1 = new Component(130.34688990750145, 20.939999999999998, TrainingButtonsNewMove, 17.8670996074987, 105.32717036022932, this.ctx, "image")
        this.answer3 = new Component(130.34688990750145, 20.939999999999998, TrainingButtonsNewMove, 17.8670996074987, 127.92282963977067, this.ctx, "image")
        this.question = new Component(211.25367496500422, 20.950000000000003, TrainingWords, 45.40342464249443, 82.74, this.ctx, "image")
        this.nextWord = new Component(43.13, 13.54, TrainingButtonsNewMove, 238.59000833680702, 125.15168263494704, this.ctx, "image")
        this.previousWord = new Component(62.91, 13.54, TrainingButtonsNewMove, 18.939999999999998, 125.15168263494704, this.ctx, "image")
        this.wordSound = new Component(11.11, 9.72, SoundImage, 34.50685146588856, 82.23874760475795, this.ctx, "image")
        this.sentSound = new Component(11.11, 9.72, SoundImage, 122.09685146588856, 82.23874760475795, this.ctx, "image")  
        this.answer1Sound = new Component(11.11, 9.72, SoundImage, 122.09685146588856, 82.23874760475795, this.ctx, "image") 
        this.answer2Sound = new Component(11.11, 9.72, SoundImage, 122.09685146588856, 82.23874760475795, this.ctx, "image") 
        this.answer3Sound = new Component(11.11, 9.72, SoundImage, 122.09685146588856, 82.23874760475795, this.ctx, "image") 
        this.answer4Sound = new Component(11.11, 9.72, SoundImage, 122.09685146588856, 82.23874760475795, this.ctx, "image")
        this.questionSound = new Component(11.11, 9.72, SoundImage, 122.09685146588856, 82.23874760475795, this.ctx, "image")    
        this.testAll = new Component(62.91, 13.54, TrainingButtonsNewMove, 218.59000833680702, 125.15168263494704, this.ctx, "image")
        this.toTheTower = new Component(101.91, 13.54, TrainingButtonsNewMove, 179.59000833680702, 125.15168263494704, this.ctx, "image")
        this.correctAnswer = new Component(130.34688990750145, 20.939999999999998, TrainingButtonsNewMoveGreen, 17.8670996074987, 95.32717036022932, this.ctx, "image")
        this.incorrectAnswer = new Component(130.34688990750145, 20.939999999999998, TrainingButtonsNewMoveRed, 17.8670996074987, 95.32717036022932, this.ctx, "image")
        this.homeButton = new Component(18.03, 14.30, HomeButton, 5.366953700419387, 3.8307801877630308, this.ctx, "image")
        this.pixelHeart1 = new Component(19.87, 16.17, Pixel_heart, 28.07, 3.369393439240767, this.ctx, "image")
        this.pixelHeart2 = new Component(21.14, 17.16, Pixel_heart, 49.205089728063406, 3.36909015886115, this.ctx, "image")
        this.pixelHeart3 = new Component(21.14, 17.16, Pixel_heart, 70.35125068809865, 3.3691912523210235, this.ctx, "image")
    }

    createSounds() {
        this.soundWord = new Sound(this.pathKeysHash[this.level1[this.levelCounter].words[this.wordCounter]["japanese"]], 1)
        this.soundSent = new Sound(this.pathKeysHash[this.level1[this.levelCounter].words[this.wordCounter]["example_japanese"].slice(0,-1)], 1)
        this.soundAnswer1 = new Sound(this.pathKeysHash["わたし"], 1)
        this.soundAnswer2 = new Sound(this.pathKeysHash["わたし"], 1)
        this.soundAnswer3 = new Sound(this.pathKeysHash["わたし"], 1)
        this.soundAnswer4 = new Sound(this.pathKeysHash["わたし"], 1)
        this.soundQuestion = new Sound(this.pathKeysHash["わたし"], 1)
    }

    createSprites() {
        this.adventureGuy = new Avatar(48, 28, MainCharacter, 81, 44, this.ctx, "sprite", 5, 3, 50, 37, "idleRight", 6);
        this.adventureGuy.startNewAnime("runRightFast", "idleRight", -9)
        this.evilSlug = new EvilSlug(30, 30, EvilSlugSpritesheetReversed, 350, this.adventureGuy.y - 3, this.ctx, "sprite", 0, 18, 32, 32, "idleLeft", 29);
        this.evilPlant = new EvilPlant(40, 40, EvilPlantSpritesheetReversed, 350, this.adventureGuy.y - 13, this.ctx, "sprite", 0, 7, 64, 64, "idleLeft", 26);
        this.evilBat = new EvilBat(20, 20, EvilBatSpritesheetReversed, 350, this.adventureGuy.y + 5, this.ctx, "sprite", 0, 9, 32, 32, "flyLeft", 19);
        this.evilBeakGuy = new EvilBeakGuy(40, 40, EvilBeakGuySpritesheetReversed, 350, this.adventureGuy.y - 13, this.ctx, "sprite", 0, 17, 64, 64, "idleLeft", 27);
        this.evilSkullSnake = new EvilSkullSnake(45, 45, EvilSkullSnakeSpritesheetReversed, 350, this.adventureGuy.y -18, this.ctx, "sprite", 0, 14, 64, 64, "idleLeft", 23);
        this.evilGolem = new EvilGolem(45, 85, EvilGolemSpritesheet, 36, -400, this.ctx, "sprite", 0, 37, 160, 160, "idleLeft", 57);
        this.treasureChest = new TreasureChest(24, 15, TreasureChestSpritesheet, 350, this.adventureGuy.y + 14, this.ctx, "sprite",0,1,32,32,"closed",4)
        this.treasureChest.startNewCustomAnime([[4,2],[4,2]], "open", 60, this.treasureChest.pauseAnime.bind(this.treasureChest))
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

    
    

    changeSound() {
        let nextWord = this.level1[this.levelCounter].words[this.wordCounter]["japanese"]
        if (nextWord.includes("~")) {
            nextWord = nextWord.split("~").join("_")
        }
        this.soundWord.sound.src = this.pathKeysHash[nextWord]
        this.soundSent.sound.src = this.pathKeysHash[this.level1[this.levelCounter].words[this.wordCounter]["example_japanese"].slice(0,-1)]
        this.playedSound = false;
    }

    updateInitialComponents() {
        for (let i = 0; i < this.initialComponentArr.length; i++) {
            this.initialComponentArr[i].update();
        }
        this.homeButton.update();
        for (let i = 0; i < this.heartArr.length; i++) {
            if (this.heartArr[i] !== undefined) {
                console.log(this.heartArr[i])
                this.heartArr[i].update();
            }
        }
    }

    reset() {
        this.goHome = false;
        this.quizCounter = 0;
        this.bossBattle = false;
        this.createInitialComponents();
        this.evilGolem.y = -400
        this.askIfTrainingBox = false;
        this.canAttack = true;
        this.gx = -900;
        this.gy = -900;
    }

    updateNewCardComponents() {
        this.newWordBox.update();
        if (this.level1[this.levelCounter].tower.length - 1 === this.quizCounter) {
            this.imReadyTalkingBox.update();
            this.imReadyText.update();
        } else {
            this.newMoveTalkingBox.update();
            this.newMoveText.update();
        }
        
        
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
        } else if (this.level1[this.levelCounter].tower.length - 1 === this.quizCounter) {
            this.toTheTower.update();
            this.toTheTowerText.update();
        } else {
            this.testAll.update();
            this.testAllText.update();
        }
        
        if (this.wordCounter > 0) { 
            this.previousWord.update();
            this.previousWordText.update(); 
        }
        if (this.playedSound === false) {
            this.soundWord.play();
            this.playedSound = true;
        }
    }


    click(e) {
        if (e.type === "mouseup") { this.handleMouseUpClicks(); }
    }

    checkQuizStatus() {
        if (this.wordCounter === 3 && this.level1[this.levelCounter].words[this.wordCounter]["seen"] === "false") {
            this.quiz1 = true;
            this.level1[this.levelCounter].words[this.wordCounter]["seen"] = "true"
        } else if (this.wordCounter === 6 && this.level1[this.levelCounter].words[this.wordCounter]["seen"] === "false") {
            this.quiz2 = true;
            this.level1[this.levelCounter].words[this.wordCounter]["seen"] = "true"
        } else if (this.wordCounter === 10) {
            this.quiz3 = true;
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

    handleNextAndPreviousButtonClicks() {
        let quizzing = false;
        if (this.quiz1 || this.quiz2 || this.quiz3) { quizzing = true; }
        if (this.nextWord.clicked(this.gx, this.gy) && this.wordCounter < this.level1[this.levelCounter].words.length - 1 && quizzing === false && this.level1[this.levelCounter].tower.length - 1 !== this.quizCounter) { this.changeToNewCard(1) }
        else if (this.previousWord.clicked(this.gx, this.gy) && this.wordCounter > 0 && quizzing === false) { this.changeToNewCard(-1) }
        else if (this.testAll.clicked(this.gx, this.gy) && quizzing === false && this.level1[this.levelCounter].tower.length - 1 !== this.quizCounter) { this.changeToNewCard(1) }
        else if (this.toTheTower.clicked(this.gx, this.gy) && this.level1[this.levelCounter].tower.length - 1 === this.quizCounter && this.wordCounter === this.level1[this.levelCounter].words.length - 1) { this.towerTime = true; }
        else if (this.nextWord.clicked(this.gx, this.gy) && this.wordCounter < this.level1[this.levelCounter].words.length - 1) { this.changeToNewCard(1) }
    }

    handleMouseUpClicks() {
        this.skipToBoss(this.gx, this.gy) 
        if (this.askIfTrainingBox === true && this.yesInvisibleBox.clicked(this.gx, this.gy) === false) {
            this.askIfTrainingBox = false;
            this.canAttack = true;
        } else if (this.askIfTrainingBox === true && this.yesInvisibleBox.clicked(this.gx, this.gy) === true) { 
            this.goHome = true; 
        }
        let quizzing = true
        if (!this.quiz1 && !this.quiz2 && !this.quiz3) { quizzing = false; }
        if (this.wordSound.clicked(this.gx, this.gy) && !quizzing) { this.soundWord.play() }
        else if (this.sentSound.clicked(this.gx, this.gy) && !quizzing) { this.soundSent.play() }
        else if (this.questionSound.clicked(this.gx, this.gy) && quizzing) { this.soundQuestion.play() }
        else if (this.nextWord.clicked(this.gx, this.gy) && !quizzing || this.previousWord.clicked(this.gx, this.gy) && !quizzing|| this.testAll.clicked(this.gx, this.gy) && !quizzing ) { this.handleNextAndPreviousButtonClicks(); } 
        else if (this.canAttack === true) {
            if (this.answer1.clicked(this.gx, this.gy) && quizzing || this.answer2.clicked(this.gx, this.gy) && quizzing || this.answer3.clicked(this.gx, this.gy) && quizzing || this.answer4.clicked(this.gx, this.gy) && quizzing) { this.handleAnswerClicks(); }
        }
        if (this.homeButton.clicked(this.gx, this.gy)) { this.warningBeforeLeaving(); }
    }


    skipToBoss(gx, gy) {
        setTimeout(()=>{
            if (gx - this.gx < -250 * 4 && gy - this.gy < -100 * 4) {
                let gx = this.gx;
                let gy = this.gy;
                console.log("true")
                setTimeout(()=>{
                    if (this.gx - gx < -250 * 4 && this.gy - gy < -100 * 4) {
                        this.bossBattle = true;
                        this.quizCounter = 18;
                        this.startBossBattle();
                    }
                }, 5000)
            }
        }, 1000)
    }


    warningBeforeLeaving() {

        this.canAttack = false;
        this.askIfTrainingBox = true;
        this.trainingBoxImage = new Component(121.7680246284894, 82.58208163658705, SimpleYesNoHomeBox, 98.42360770334705, 32.66812245488062, this.ctx, "image")
        this.startTrainingText = new Component("10px", "PixelFont", "Black", 124.42, 70.14, this.ctx, "text");
        this.startTrainingTextShadow = new Component("10px", "PixelFont", "Gray", 124.92, 70.64, this.ctx, "text");
        this.startTrainingTextShadow.text = "Return Home?"
        this.startTrainingText.text = "Return Home?"
        this.warningText = new Component("4px", "PixelFont", "Black", 119.42, 75.14, this.ctx, "text");
        this.warningText.text = "WARNING: All Progress Will Be Lost!"
        this.warningTextShadow = new Component("4px", "PixelFont", "Gray", 119.92, 75.64, this.ctx, "text");
        this.warningTextShadow.text = "WARNING: All Progress Will Be Lost!"
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


    }

    handleAnswerClicks() {
        let quizzing = true
        if (!this.quiz1 && !this.quiz2 && !this.quiz3) {
            quizzing = false;
        }
        if (this.questionSound.clicked(this.gx, this.gy) && quizzing) {
            this.soundQuestion.play();
        } else if (this.answer1Sound.clicked(this.gx, this.gy) && quizzing) {
            this.soundAnswer1.play();
        } else if (this.answer2Sound.clicked(this.gx, this.gy) && quizzing) {
            this.soundAnswer2.play();
        } else if (this.answer3Sound.clicked(this.gx, this.gy) && quizzing) {
            this.soundAnswer3.play();
        } else if (this.answer4Sound.clicked(this.gx, this.gy) && quizzing) {
            this.soundAnswer4.play();
        } else if (this.answer1.clicked(this.gx, this.gy) && this.answer1Text.text === this.level1[this.levelCounter].tower[this.quizCounter]["answer"] && quizzing) {
            this.handleNextQuizCard("correct", 1);
        } else if (this.answer1.clicked(this.gx, this.gy) && this.answer1Text.text !== this.level1[this.levelCounter].tower[this.quizCounter]["answer"] && quizzing) { 
            this.handleNextQuizCard("incorrect", 1);
        } else if (this.answer2.clicked(this.gx, this.gy) && this.answer2Text.text === this.level1[this.levelCounter].tower[this.quizCounter]["answer"] && quizzing) { 
            this.handleNextQuizCard("correct", 2);
        } else if (this.answer2.clicked(this.gx, this.gy) && this.answer2Text.text !== this.level1[this.levelCounter].tower[this.quizCounter]["answer"] && quizzing) { 
            this.handleNextQuizCard("incorrect", 2);
        } else if (this.answer3.clicked(this.gx, this.gy) && this.answer3Text.text === this.level1[this.levelCounter].tower[this.quizCounter]["answer"] && quizzing) { 
            this.handleNextQuizCard("correct", 3);
        } else if (this.answer3.clicked(this.gx, this.gy) && this.answer3Text.text !== this.level1[this.levelCounter].tower[this.quizCounter]["answer"] && quizzing) { 
            this.handleNextQuizCard("incorrect", 3);
        } else if (this.answer4.clicked(this.gx, this.gy) && this.answer4Text.text === this.level1[this.levelCounter].tower[this.quizCounter]["answer"] && quizzing) { 
            this.handleNextQuizCard("correct", 4);
        } else if (this.answer4.clicked(this.gx, this.gy) && this.answer4Text.text !== this.level1[this.levelCounter].tower[this.quizCounter]["answer"] && quizzing) { 
            this.handleNextQuizCard("incorrect", 4);
        }
    }

    getChoice(choice) {
        if (choice === 1) {
            return this.answer1
        } else if (choice === 2) {
            return this.answer2
        } else if (choice === 3) {
            return this.answer3
        } else {
            return this.answer4
        }
    }

    playAnswerSound(answer) {
        if (answer === this.answer1) {
            this.soundPlaying = this.soundAnswer1
            this.soundAnswer1.play();
        } else if (answer === this.answer2) {
            this.soundPlaying = this.soundAnswer2
            this.soundAnswer2.play();
        } else if (answer === this.answer3) {
            this.soundPlaying = this.soundAnswer3
            this.soundAnswer3.play();
        } else if (answer === this.answer4) {
            this.soundPlaying = this.soundAnswer4
            this.soundAnswer4.play();
        }
    }

    sendEnemy() {
        let enemyArr = [this.evilBat, this.evilSlug, this.evilSkullSnake, this.evilBeakGuy, this.evilPlant];
        let enemyChoice = enemyArr[Math.floor(Math.random()*enemyArr.length)];
        while (this.lastEnemy === enemyChoice) {
            enemyChoice = enemyArr[Math.floor(Math.random()*enemyArr.length)];
        }
        this.lastEnemy = enemyChoice;
        enemyChoice.x = 300;
        enemyChoice.speedX = -2
    }

    handleBossBattleAttacks(answer) {
        if (answer === "correct") {
            let x = this.adventureGuy.x;
            this.adventureGuy.x = -this.evilGolem.y - this.evilGolem.width - this.adventureGuy.width;
            let attackArr = this.shuffleArr(["attack1Right", "attack2Right", "attack3Right", "attack4Right"])
            this.attackTheBoss(0, attackArr, x)
        } else {
            let y = this.evilGolem.y;
            this.evilGolem.y = -this.adventureGuy.x - this.adventureGuy.width - this.evilGolem.width
            this.attackTheAdventurer(0, y)
        }
    }

    attackTheAdventurer(counter, y) {
        setTimeout(()=>{
            if (this.evilGolem.anime === "idleLeft") {
                if (counter < 1) {
                    this.startFlash("red")
                    this.evilGolem.startNewAnime("attack1Left", "idleLeft", 1);
                    setTimeout(()=>{
                        this.adventureGuy.startNewCustomAnime([[6,9],[9,3],[6,9],[9,4],[6,9],[9,5],[6,9],[9,4],[6,9],[9,5],[9,4],[6,9],[9,5]], "idleRight", 8)
                        this.startFlash("red")
                    }, 500)
                     counter += 1
                    this.attackTheAdventurer(counter, y)
                } else if (counter === 1) {
                    this.startFlash("red")
                    this.evilGolem.y = y;
                } else {
                    this.attackTheAdventurer(counter, y)
                }
                
            } else {
                this.attackTheAdventurer(counter, y)
            }
        }, 10)
    }

    attackTheBoss(counter, attackArr, x) {
        setTimeout(()=>{
            if (this.adventureGuy.anime === "idleRight") {
                if (counter <= 3) {
                    this.startFlash("white")
                    this.adventureGuy.startNewAnime(attackArr[counter], "idleRight",1)
                    this.evilGolem.startNewAnime("hitLeft", "idleLeft", 1)
                    counter += 1;
                    this.attackTheBoss(counter, attackArr, x)
                } else if (counter > 3 && this.adventureGuy.anime === "idleRight") {
                    this.startFlash("white")
                    this.adventureGuy.x = x;
                    console.log(this.quizCounter)
                    console.log(this.level1[this.levelCounter].tower.length)
                    if (this.quizCounter > this.level1[this.levelCounter].tower.length - 5 && this.hasGrown === false) {
                        console.log("hi")
                        this.growTheBoss();
                    } else if (this.level1[this.levelCounter].tower.length - 1 === this.quizCounter) {
                        this.defeatTheBoss();
                    }
                } else {
                    this.attackTheBoss(counter, attackArr, x)
                }
            } else {
                this.attackTheBoss(counter, attackArr, x)
            }
        }, 10)
    }

    defeatTheBoss() {
        this.canAttack = false;
        this.evilGolem.startNewAnime("dieLeft", "dieLeft", 1, this.evilGolem.pauseAnime.bind(this.evilGolem));
        this.checkForAnimeOver();
    }

    checkForAnimeOver() {
        setTimeout(() => {
            if (this.evilGolem.stop === true) {
                this.walkToChest();
            } else {
                this.checkForAnimeOver();
            }
        }, 100);
    }

    walkToChest() {
        this.background.speedX = -1;
        this.evilGolem.speedY = 1;
        this.adventureGuy.startNewAnime("runRight", "runRight", 1)
        this.treasureChest.speedX = -1;
        this.checkForAtChest();
    }

    checkForAtChest(){
        setTimeout(()=>{
            if (this.adventureGuy.x + this.adventureGuy.width > this.treasureChest.x) {
                this.adventureGuy.startNewAnime("idleRight", "idleRight", 1)
                this.background.speedX = 0;
                this.treasureChest.speedX = 0;
                this.evilGolem.speedY = 0;
                this.treasureChest.startNewCustomAnime([[4,2],[5,2]], "open", 60, this.treasureChest.pauseAnime.bind(this.treasureChest))
            } else {
                this.checkForAtChest();
            }
        }, 100)
    }

    handleNextQuizCard(question, choice) {
        if (this.bossBattle === false) {
            this.sendEnemy();
        }
        
        if (this.level1[this.levelCounter].tower[this.quizCounter]["japanese"] === "true") {
            this.soundQuestion.play();
        }
        choice = this.getChoice(choice)
        this.showAnswer = true;
        let timer = 1000;
        if (question === "correct") {
            this.playAnswerSound(choice);
            this.setCorrectIncorrectAnswerPos(choice, choice);
            timer = 50;
            this.level1[this.levelCounter].tower[this.quizCounter]["correct"] += 1;
            if (this.level1[this.levelCounter].tower[this.quizCounter]["correct"] < 1) {
            }
            if (this.bossBattle === true) {
                this.handleBossBattleAttacks("correct")
            } else {
                this.attackOrder.push("correct");
            }
           } else {
            let answer = this.findCorrectAnswer();
            this.playAnswerSound(answer);
            this.setCorrectIncorrectAnswerPos(answer, choice);
            timer = 2000;
            this.level1[this.levelCounter].tower[this.quizCounter]["correct"] = -1;
            if (this.bossBattle === true) {
                this.level1[this.levelCounter].tower.push(this.level1[this.levelCounter].tower[this.quizCounter])
                this.handleBossBattleAttacks("incorrect")
            } else {
                this.attackOrder.push("incorrect");
            }
            
        }

        

        this.pauseQuiz(timer);

    }

    pauseQuiz(timer) {

        setTimeout(()=>{
            if (!this.soundQuestion.sound.paused || !this.soundPlaying.sound.paused) {
                this.pauseQuiz(timer);
            } else {
                this.showAnswer = false;
                if (this.level1[this.levelCounter].tower.length - 1 === this.quizCounter) {
                    this.quiz3 = false;
                } else {
                    this.quizCounter += 1;
                }
                
                if (this.quiz1 === true && this.quizCounter > 9 && this.bossBattle === false) {
                    setTimeout(()=>{
                        this.startBossBattle();
                    }, 3000)
                } else {
                    this.changeQuizCardText();
                }
                this.playedQuizSound = false;
            }
            
        }, timer)

    }

    startBossBattle() {
        this.canAttack = false;
        this.bossBattle = true;
        this.adventureGuy.startNewAnime("idleRight", "idleRight", 1);
        this.background.speedX = 0;
        this.bossSteps = 0;
        this.bossEntering();

    }

    bossEntering() {
        this.bossSteps += 1
        this.shakeList = [this.adventureGuy, this.background, this.backgroundBottom]
        this.shakeScreen = true;
        setTimeout(()=>{
            this.shakeScreen = false;
            this.dx = undefined;
            this.dy = undefined;
            setTimeout(()=>{
                if (this.bossSteps < 3) {
                    this.bossEntering();
                } else {
                    this.evilGolem.startNewAnime("walkLeft", "walkLeft", 1)
                    this.enterTheBoss();
                }
                
            },500)
        }, 500)
    }

    enterTheBoss() {

        this.evilGolem.y += 0.5;
        setTimeout(()=>{
            if (this.evilGolem.y < -250) {
                this.enterTheBoss();
            } else {
                this.evilGolem.startNewAnime("idleLeft", "idleLeft", 1)
                this.canAttack = true;
                this.changeQuizCardText();
            }
        }, 10)

    }


    growTheBoss() {
        this.hasGrown = true;
        this.evilGolem.height += 0.5;
        this.evilGolem.width += 0.5;
        this.evilGolem.x += -0.4
        this.evilGolem.y -= 0.35
        setTimeout(()=>{
            if (this.evilGolem.width < 100) {
                this.growTheBoss();
                this.shakeScreen = true;
                this.shakeList = [this.adventureGuy, this.background, this.backgroundBottom]
                if (this.evilGolem.anime === "idleLeft") {
                    this.evilGolem.startNewAnime("hitLeft","idleLeft", 1)
                }
            } else {
                this.shakeScreen = false;
            }
        }, 10)
    }



    setCorrectIncorrectAnswerPos(answer, choice) {
        this.correctAnswer.x = answer.x;
        this.correctAnswer.y = answer.y;
        this.correctAnswer.width = answer.width;
        this.correctAnswer.height = answer.height;
        this.incorrectAnswer.x = choice.x;
        this.incorrectAnswer.y = choice.y;
        this.incorrectAnswer.width = choice.width;
        this.incorrectAnswer.height = choice.height;
    }

    findCorrectAnswer() {
        if (this.answer1Text.text === this.level1[this.levelCounter].tower[this.quizCounter]["answer"]) {
            return this.answer1
        } else if (this.answer2Text.text === this.level1[this.levelCounter].tower[this.quizCounter]["answer"]) {
            return this.answer2
        } else if (this.answer3Text.text === this.level1[this.levelCounter].tower[this.quizCounter]["answer"]) {
            return this.answer3
        } else if (this.answer4Text.text === this.level1[this.levelCounter].tower[this.quizCounter]["answer"]) {
            return this.answer4
        }

    }


    hover(e) {
        
    }

    rotateGolem() {
        this.ctx.rotate(90 * Math.PI / 180);
        this.evilGolem.animate();
        this.ctx.rotate(-90 * Math.PI / 180);
    }

    spriteAnimation() {
        this.rotateGolem();
        this.evilPlant.animate();
        this.evilSlug.animate();
        this.evilBat.animate();
        this.evilBeakGuy.animate();
        this.evilSkullSnake.animate();
        this.treasureChest.animate();
        this.adventureGuy.animate();
        
        
        
    }

    shuffleArr(array) {
        let currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    getAnswerArr() {
        let returnArr = [this.level1[this.levelCounter].tower[this.quizCounter]["answer"]];
        if (this.level1[this.levelCounter].tower[this.quizCounter]["japanese"] === "true") {
            let arr = this.level1[this.levelCounter].english
            while (returnArr.length < 4) {
                let el = arr[Math.floor(Math.random()*arr.length)]
                if (!returnArr.includes(el)) {
                    returnArr.push(el)
                }
            }
        } else {
            let arr = []
            if (this.quizCounter > 9) {
                arr = this.level1[this.levelCounter].japanese_sent
            } else {
                arr = this.level1[this.levelCounter].japanese
            }
            
            while (returnArr.length < 4) {
                let el = arr[Math.floor(Math.random()*arr.length)]
                if (!returnArr.includes(el)) {
                    returnArr.push(el)
                }
            }
            
        }
        return this.shuffleArr(returnArr)
       
    }

    changeQuizCardText() {
        this.questionText.text = this.level1[this.levelCounter].tower[this.quizCounter]["question"]
        let arr = this.getAnswerArr();
        this.answer1Text.text = arr[0]
        this.answer2Text.text = arr[1]
        this.answer3Text.text = arr[2]
        this.answer4Text.text = arr[3]
        for(let i = 0; i < arr.length; i++) {
            if (arr[i].includes("~")) {
                arr[i] = arr[i].split("~").join("_")
            }
        }
        this.soundAnswer1.sound.src = this.pathKeysHash[arr[0]]
        this.soundAnswer2.sound.src = this.pathKeysHash[arr[1]]
        this.soundAnswer3.sound.src = this.pathKeysHash[arr[2]]
        this.soundAnswer4.sound.src = this.pathKeysHash[arr[3]]
        if (this.level1[this.levelCounter].tower[this.quizCounter]["question"].includes("~")) {
            this.soundQuestion.sound.src = this.pathKeysHash[this.level1[this.levelCounter].tower[this.quizCounter]["question"].split("~").join("_")]
        } else {
            this.soundQuestion.sound.src = this.pathKeysHash[this.level1[this.levelCounter].tower[this.quizCounter]["question"]]
        }
        
    }

    updateQuizCardFontSize() {
        this.questionText.width = Math.round(this.getFontSizeToFit(this.questionText.text, this.question.width - 20))
        if (this.questionText.width > 17) {
            this.questionText.width = "17px"
        } else {
            this.questionText.width = this.questionText.width + "px"
        }

        this.answer1Text.width = Math.round(this.getFontSizeToFit(this.answer1Text.text, this.answer1.width - 40))
        if (this.answer1Text.width > 14) {
            this.answer1Text.width = "14px"
        } else {
            this.answer1Text.width = this.answer1Text.width + "px"
        }
        this.answer2Text.width = Math.round(this.getFontSizeToFit(this.answer2Text.text, this.answer2.width - 40))
        if (this.answer2Text.width > 14) {
            this.answer2Text.width = "14px"
        } else {
            this.answer2Text.width = this.answer2Text.width + "px"
        }
        this.answer3Text.width = Math.round(this.getFontSizeToFit(this.answer3Text.text, this.answer3.width - 40))
        if (this.answer3Text.width > 14) {
            this.answer3Text.width = "14px"
        } else {
            this.answer3Text.width = this.answer3Text.width + "px"
        }
        this.answer4Text.width = Math.round(this.getFontSizeToFit(this.answer4Text.text, this.answer4.width - 40))
        if (this.answer4Text.width > 14) {
            this.answer4Text.width = "14px"
        } else {
            this.answer4Text.width = this.answer4Text.width + "px"
        }
        this.ctx.font = "14px Ubuntu"
    }

    updateQuizCardTextX() {
        let textArrLeft = [this.answer1Text, this.answer3Text]
        let textArrRight = [this.answer2Text, this.answer4Text]
        if (Number(this.questionText.width.split('').slice(0,2).join('')) < 17.5 && Number(this.questionText.width.split('').slice(0,2).join('')) > 16.5) {
            this.questionText.x = (300/2) - (this.ctx.measureText(this.questionText.text).width / 1.65)
        } else if (Number(this.questionText.width.split('').slice(0,2).join('')) < 16.5 && Number(this.questionText.width.split('').slice(0,2).join('')) > 15.5) {
            this.questionText.x = (300/2) - (this.ctx.measureText(this.questionText.text).width / 1.85)
        } else if (Number(this.questionText.width.split('').slice(0,2).join('')) < 15.5 && Number(this.questionText.width.split('').slice(0,2).join('')) > 14.5) {
            this.questionText.x = (300/2) - (this.ctx.measureText(this.questionText.text).width / 2)
        } else if (Number(this.questionText.width.split('').slice(0,2).join('')) < 14.5 && Number(this.questionText.width.split('').slice(0,2).join('')) > 13.5) {
            this.questionText.x = (300/2) - (this.ctx.measureText(this.questionText.text).width / 2)
        } else if (Number(this.questionText.width.split('').slice(0,2).join('')) < 13.5 && Number(this.questionText.width.split('').slice(0,2).join('')) > 12.5) {
            this.questionText.x = (300/2) - (this.ctx.measureText(this.questionText.text).width / 2.1)
        } else if (Number(this.questionText.width.split('').slice(0,2).join('')) < 12.5 && Number(this.questionText.width.split('').slice(0,2).join('')) > 11.5) {
            this.questionText.x = (300/2) - (this.ctx.measureText(this.questionText.text).width / 2.3)
        } else if (Number(this.questionText.width.split('').slice(0,2).join('')) < 11.5 && Number(this.questionText.width.split('').slice(0,2).join('')) > 10.5) {
            this.questionText.x = (300/2) - (this.ctx.measureText(this.questionText.text).width / 2.5)
        } else if (Number(this.questionText.width.split('').slice(0,2).join('')) < 10.5 && Number(this.questionText.width.split('').slice(0,2).join('')) > 9.5) {
            this.questionText.x = (300/2) - (this.ctx.measureText(this.questionText.text).width / 2.8)
        } else if (Number(this.questionText.width.split('').slice(0,2).join('')) < 9.5 && Number(this.questionText.width.split('').slice(0,2).join('')) > 8.5) {
            this.questionText.x = (300/2) - (this.ctx.measureText(this.questionText.text).width / 3)
        } else if (Number(this.questionText.width.split('').slice(0,2).join('')) < 8.5 && Number(this.questionText.width.split('').slice(0,2).join('')) > 7.5) {
            this.questionText.x = (300/2) - (this.ctx.measureText(this.questionText.text).width / 3.3)
        } 


        for (let i = 0; i < textArrRight.length; i++) {
            if (textArrRight[i].width === "14px") {
                textArrRight[i].x = (300/1.4) - (this.ctx.measureText(textArrRight[i].text).width / 2)
            } else if (textArrRight[i].width === "13px") {
                textArrRight[i].x = (300/1.4) - (this.ctx.measureText(textArrRight[i].text).width / 2.1)
            } else if (textArrRight[i].width === "12px") {
                textArrRight[i].x = (300/1.4) - (this.ctx.measureText(textArrRight[i].text).width / 2.3)
            } else if (textArrRight[i].width === "11px") {
                textArrRight[i].x = (300/1.4) - (this.ctx.measureText(textArrRight[i].text).width / 2.5)
            } else if (textArrRight[i].width === "10px") {
                textArrRight[i].x = (300/1.4) - (this.ctx.measureText(textArrRight[i].text).width / 2.8)
            } else if (textArrRight[i].width === "9px") {
                textArrRight[i].x = (300/1.4) - (this.ctx.measureText(textArrRight[i].text).width / 3.4)
            } else if (textArrRight[i].width === "8px") {
                textArrRight[i].x = (300/1.4) - (this.ctx.measureText(textArrRight[i].text).width / 3.8)
            } else if (textArrRight[i].width === "7px") {
                textArrRight[i].x = (300/1.4) - (this.ctx.measureText(textArrRight[i].text).width / 4.4)
            } else if (textArrRight[i].width === "6px") {
                textArrRight[i].x = (300/1.4) - (this.ctx.measureText(textArrRight[i].text).width / 4.6)
            }
        }

        for (let i = 0; i < textArrLeft.length; i++) {
            if (textArrLeft[i].width === "14px") {
                textArrLeft[i].x = (300/3.5) - (this.ctx.measureText(textArrLeft[i].text).width / 2)
            } else if (textArrLeft[i].width === "13px") {
                textArrLeft[i].x = (300/3.5) - (this.ctx.measureText(textArrLeft[i].text).width / 2.1)
            } else if (textArrLeft[i].width === "12px") {
                textArrLeft[i].x = (300/3.5) - (this.ctx.measureText(textArrLeft[i].text).width / 2.3)
            } else if (textArrLeft[i].width === "11px") {
                textArrLeft[i].x = (300/3.5) - (this.ctx.measureText(textArrLeft[i].text).width / 2.5)
            } else if (textArrLeft[i].width === "10px") {
                textArrLeft[i].x = (300/3.5) - (this.ctx.measureText(textArrLeft[i].text).width / 2.8)
            } else if (textArrLeft[i].width === "9px") {
                textArrLeft[i].x = (300/3.5) - (this.ctx.measureText(textArrLeft[i].text).width / 3.4)
            } else if (textArrLeft[i].width === "8px") {
                textArrLeft[i].x = (300/3.5) - (this.ctx.measureText(textArrLeft[i].text).width / 3.8)
            } else if (textArrLeft[i].width === "7px") {
                textArrLeft[i].x = (300/3.5) - (this.ctx.measureText(textArrLeft[i].text).width / 4.4)
            } else if (textArrLeft[i].width === "6px") {
                textArrLeft[i].x = (300/3.5) - (this.ctx.measureText(textArrLeft[i].text).width / 4.6)
            }
        }

    }

    getFontSizeToFit(text, maxWidth) {
        this.ctx.font = "1px Ubuntu"
        return maxWidth / this.questionText.ctx.measureText(text).width;
    }

    updateSoundIconsX() {
        this.questionSound.x = this.question.x + 8;
        this.questionSound.y = this.question.y + 6;
        this.answer1Sound.x = this.answer1.x + 5;
        this.answer1Sound.y = this.answer1.y + 6;
        this.answer2Sound.x = this.answer2.x + 5;
        this.answer2Sound.y = this.answer2.y + 6;
        this.answer3Sound.x = this.answer3.x + 5;
        this.answer3Sound.y = this.answer3.y + 6;
        this.answer4Sound.x = this.answer4.x + 5;
        this.answer4Sound.y = this.answer4.y + 6;
    }

    updateQuizCardTextHeight() {
        let arr = [this.answer1Text, this.answer2Text, this.answer3Text, this.answer4Text]
        let arrStatic = [this.answer1TextHeightStatic, this.answer2TextHeightStatic, this.answer3TextHeightStatic, this.answer4TextHeightStatic]

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].width === "14px") {

            } else if (arr[i].width === "13px") {
                
            } else if (arr[i].width === "12px") {
                arr[i].y = arrStatic[i] - 1
            } else if (arr[i].width === "11px") {
                arr[i].y = arrStatic[i] - 1
            } else if (arr[i].width === "10px") {
                arr[i].y = arrStatic[i] - 1
            } else if (arr[i].width === "9px") {
                arr[i].y = arrStatic[i] - 1
            } else if (arr[i].width === "8px") {
                arr[i].y = arrStatic[i] - 2
            } else if (arr[i].width === "7px") {
                arr[i].y = arrStatic[i] - 2.5
            } else if (arr[i].width === "6px") {
                arr[i].y = arrStatic[i] - 8
            }
        }

    }

    

    updateQuizCardComponents() {
        if (this.playedQuizSound === false && this.level1[this.levelCounter].tower[this.quizCounter]["japanese"] === "true") {
            this.soundQuestion.play();
            this.playedQuizSound = true;
        }
        this.updateQuizCardFontSize();
        this.updateQuizCardTextX();
        this.updateQuizCardTextHeight();
        this.updateSoundIconsX();
        this.question.update();
        this.answer1.update();
        this.answer2.update();
        this.answer3.update();
        this.answer4.update();
        if (this.showAnswer === true) {
            this.incorrectAnswer.update();
            this.correctAnswer.update();
        }
        this.questionText.update();
        this.answer1Text.update();
        this.answer2Text.update();
        this.answer3Text.update();
        this.answer4Text.update();
        if (this.level1[this.levelCounter].tower[this.quizCounter]["japanese"] === "true") {
            this.questionSound.update();
        } else {
            this.answer1Sound.update();
            this.answer2Sound.update();
            this.answer3Sound.update();
            this.answer4Sound.update();
        }
    
    }

    screenFlashEffect() {
        if (this.alphaClone >= 0.2) { this.alphaDir = -0.15; }
        this.alphaClone += this.alphaDir;
        this.ctx.globalAlpha =  this.alphaClone;
        if (this.alphaClone <= 0) { 
            this.screenFlash = false; 
        } else {
            this.flashBox.update();
        }
        this.ctx.globalAlpha = 1;
    }

    startFlash(color) {
        this.flashBox = new Component(300, 150, color, 0, 0, this.ctx, "other")
        this.screenFlash = true;
        this.alphaDir = 0.1
        this.alphaClone = 0;
    }


    resetEnemy(enemy) {
        setTimeout(()=>{
            if (enemy.x <= 50) {
                enemy.speedX = 0;
                enemy.x = 350;
                this.shakeScreen = false;
                this.dx = undefined;
                this.dy = undefined;
            } else {
                this.resetEnemy(enemy)
                
            }
        }, 100)
    }

    loseAHeart(heart) {
        this.heartArr.slice(0, -1)
        setTimeout(()=>{
            this.heartArr.push(heart)
            setTimeout(()=>{
                this.heartArr.slice(0, -1)
                setTimeout(()=>{
                    this.heartArr.push(heart)
                    setTimeout(()=>{
                        this.heartArr.slice(0, -1)
                        setTimeout(()=>{
                            this.heartArr.push(heart)
                            setTimeout(()=>{
                                this.heartArr.slice(0, -1)
                            }, 100)
                        }, 100)
                    }, 250)
                }, 250)
            }, 500)
        }, 500)
    }


    checkIfAttacking() {
        let enemyArr = [this.evilBat, this.evilSlug, this.evilSkullSnake, this.evilBeakGuy, this.evilPlant];
        let attackArr = ["attack1Right", "attack2Right", "attack3Right", "attack4Right"]
        for (let i = 0; i < enemyArr.length; i++) {
            if (this.adventureGuy.intersecting(enemyArr[i]) && this.shakeScreen === false) {
                
                if (this.check > 200) {
                    this.check = 0;
                    if (this.attackOrder[0] === "correct") {
                        this.startFlash("white");
                        this.attackOrder = this.attackOrder.slice(1)
                        this.adventureGuy.startNewAnime(attackArr[Math.floor(Math.random() * attackArr.length)], "runRightFast", 1)
                        this.shakeList = [enemyArr[i]];
                        this.shakeScreen = true;
                        enemyArr[i].startNewAnime("hitLeft", "idleLeft", 10)
                        this.resetEnemy(enemyArr[i]);
                    } else {
                        // this.startFlash("red");
                        this.loseAHeart(this.heartArr.slice(-1))
                        this.attackOrder = this.attackOrder.slice(1)
                        this.adventureGuy.startNewCustomAnime([[6,9],[9,3],[6,9],[9,4],[6,9],[9,5],[6,9],[9,4],[6,9],[9,5],[9,4],[6,9],[9,5]], "runRightFast", 8)
                        enemyArr[i].startNewAnime("attackLeft", "idleLeft", 1)
                    }
                }
            } else {
                this.check += 1;
            }
        }
    }


    preShake() {
        this.dx = Math.random()*5;
        this.dy = Math.random()*5;
        for (let i = 0; i < this.shakeList.length; i++) {
            this.shakeList[i].x += this.dx;
            this.shakeList[i].y += this.dy;
        }
      }

    postShake() {
        if (this.dx !== undefined || this.dy !== undefined) {
            for (let i = 0; i < this.shakeList.length; i++) {
                this.shakeList[i].x -= this.dx;
                this.shakeList[i].y -= this.dy;
            }
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
        this.warningText.update();
        
    }


    animate(gx, gy) {
        this.gx = gx;
        this.gy = gy;
        if (this.shakeScreen === true) { this.preShake(); }
        this.background.newPos(); 
        this.background.update();
        this.backgroundBottom.speedX = this.background.speedX;
        this.backgroundBottom.newPos();
        this.backgroundBottom.update();
        this.spriteAnimation();
        if (this.screenFlash === true) { this.screenFlashEffect(); }
        this.updateInitialComponents();
        if (this.quiz1 === true || this.quiz2 || this.quiz3) { 
            if (this.canAttack === true) {
                this.updateQuizCardComponents();
            }
        }
        else { 
            if (this.canAttack === true) {
                this.updateNewCardComponents(); 
            }
        }
        this.checkIfAttacking();
        if (this.shakeScreen === true) { this.postShake(); }
        if (this.askIfTrainingBox === true) { this.askIfTraining(); }
    }


}






