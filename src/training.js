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
import TrainingButtonsNewMoveGreen from './../images/TrainingButtonsNewMoveGreen.png'
import TrainingButtonsNewMoveRed from './../images/TrainingButtonsNewMoveRed.png'
import Avatar from './avatar'
import TrainingDummy from './trainingDummy'
import HomeButton from './../images/homeButton.png'








export default class Training {
    constructor(ctx, level, word, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.currentImports =['./homeButton.png', './soundImage.png', './talkingBox.png', './TrainingWords.png', './TrainingDialogue.png', './trainingScreen.png', './component.js', './adventure.png', './trainingDummySpriteTransparent.png', './TrainingButtonsNewMove.png']
        this.wordCounter = word;
        this.levelCounter = level;
        this.quizCounter = 0;
        this.goHome = false;
        this.towerTime = false;
        this.quiz1 = false;
        this.quiz2 = false;
        this.quiz3 = false;
        this.complete = false;
        this.playedSound = false;
        this.playedQuizSound = false;
        this.towerTime = false;
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
        this.letsPracticeText = new Component("9px", "PixelFont", "Black", 152.68, 16.54, this.ctx, "text");
        this.letsPracticeText.text = "Let's Practice!"
        this.imReadyText = new Component("9px", "PixelFont", "Black", 152.68, 16.54, this.ctx, "text");
        this.imReadyText.text = "I'm Ready!"
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
        this.questionText = new Component("17px", "Ubuntu", "Black", 125.18, 90.21, this.ctx, "text");
        this.answer1Text = new Component("14px", "Ubuntu", "Black", 53.18, 111.2, this.ctx, "text");
        this.answer2Text = new Component("14px", "Ubuntu", "Black", 207.18, 111.2, this.ctx, "text");
        this.answer3Text = new Component("14px", "Ubuntu", "Black", 53.18, 133.71, this.ctx, "text");
        this.answer4Text = new Component("14px", "Ubuntu", "Black", 207.18, 133.71, this.ctx, "text");
        
    }

    createImages() {
        this.initialComponentArr = []
        this.answer4 = new Component(130.34688990750145, 20.939999999999998, TrainingButtonsNewMove, 150.59149672000663, 117.50781894412596, this.ctx, "image")
        this.answer2 = new Component(130.34688990750145, 20.939999999999998, TrainingButtonsNewMove, 150.59149672000663, 95.32717036022932, this.ctx, "image")
        this.answer1 = new Component(130.34688990750145, 20.939999999999998, TrainingButtonsNewMove, 17.8670996074987, 95.32717036022932, this.ctx, "image")
        this.answer3 = new Component(130.34688990750145, 20.939999999999998, TrainingButtonsNewMove, 17.8670996074987, 117.92282963977067, this.ctx, "image")
        this.question = new Component(211.25367496500422, 20.950000000000003, TrainingWords, 45.40342464249443, 72.74, this.ctx, "image")
        this.background = new Component(300, 150, TrainingScreen, 0, 0, this.ctx, "image")
        this.dialogueBox = new Component(295.52722245267773, 87.06392648914046, TrainingDialogue, 2.431964063489289, 61.252678918476605, this.ctx, "image")
        this.newWordBox = new Component(259.90, 68.04785297828089, TrainingWords, 21.710000000000008, 71.74678918476592, this.ctx, "image")
        this.newMoveTalkingBox = new Component(64.97, 16.374642163046813, TalkingBox, 145.69837303233416, 3.3146421630468135, this.ctx, "image")
        this.letsPracticeTalkingBox = new Component(78.97, 16.374642163046813, TalkingBox, 145.69837303233416, 3.3146421630468135, this.ctx, "image")
        this.imReadyTalkingBox = new Component(59.97, 16.374642163046813, TalkingBox, 145.69837303233416, 3.3146421630468135, this.ctx, "image")
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
        this.dialogueBox.update();
        this.homeButton.update();
    }

    updateNewCardComponents() {
        this.newWordBox.update();
        if (this.level1[this.levelCounter].questions.length - 1 === this.quizCounter) {
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
        } else if (this.level1[this.levelCounter].questions.length - 1 === this.quizCounter) {
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
        if (this.nextWord.clicked(this.gx, this.gy) && this.wordCounter < this.level1[this.levelCounter].words.length - 1 && quizzing === false && this.level1[this.levelCounter].questions.length - 1 !== this.quizCounter) { this.changeToNewCard(1) }
        else if (this.previousWord.clicked(this.gx, this.gy) && this.wordCounter > 0 && quizzing === false) { this.changeToNewCard(-1) }
        else if (this.testAll.clicked(this.gx, this.gy) && quizzing === false && this.level1[this.levelCounter].questions.length - 1 !== this.quizCounter) { this.changeToNewCard(1) }
        else if (this.toTheTower.clicked(this.gx, this.gy) && this.level1[this.levelCounter].questions.length - 1 === this.quizCounter && this.wordCounter === this.level1[this.levelCounter].words.length - 1) { this.towerTime = true; }
        else if (this.nextWord.clicked(this.gx, this.gy) && this.wordCounter < this.level1[this.levelCounter].words.length - 1) { this.changeToNewCard(1) }
    }

    handleMouseUpClicks() {
        let quizzing = true
        if (!this.quiz1 && !this.quiz2 && !this.quiz3) { quizzing = false; }
        if (this.wordSound.clicked(this.gx, this.gy) && !quizzing) { this.soundWord.play() }
        else if (this.sentSound.clicked(this.gx, this.gy) && !quizzing) { this.soundSent.play() }
        else if (this.questionSound.clicked(this.gx, this.gy) && quizzing) { this.soundQuestion.play() }
        else if (this.nextWord.clicked(this.gx, this.gy) && !quizzing || this.previousWord.clicked(this.gx, this.gy) && !quizzing|| this.testAll.clicked(this.gx, this.gy) && !quizzing ) { this.handleNextAndPreviousButtonClicks(); } 
        else if (this.answer1.clicked(this.gx, this.gy) && quizzing || this.answer2.clicked(this.gx, this.gy) && quizzing || this.answer3.clicked(this.gx, this.gy) && quizzing || this.answer4.clicked(this.gx, this.gy) && quizzing) { this.handleAnswerClicks(); }
        else if (this.homeButton.clicked(this.gx, this.gy)) { this.goHome = true; }
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
        } else if (this.answer1.clicked(this.gx, this.gy) && this.answer1Text.text === this.level1[this.levelCounter].questions[this.quizCounter]["answer"] && quizzing) {
            this.handleNextQuizCard("correct", 1);
        } else if (this.answer1.clicked(this.gx, this.gy) && this.answer1Text.text !== this.level1[this.levelCounter].questions[this.quizCounter]["answer"] && quizzing) { 
            this.handleNextQuizCard("incorrect", 1);
        } else if (this.answer2.clicked(this.gx, this.gy) && this.answer2Text.text === this.level1[this.levelCounter].questions[this.quizCounter]["answer"] && quizzing) { 
            this.handleNextQuizCard("correct", 2);
        } else if (this.answer2.clicked(this.gx, this.gy) && this.answer2Text.text !== this.level1[this.levelCounter].questions[this.quizCounter]["answer"] && quizzing) { 
            this.handleNextQuizCard("incorrect", 2);
        } else if (this.answer3.clicked(this.gx, this.gy) && this.answer3Text.text === this.level1[this.levelCounter].questions[this.quizCounter]["answer"] && quizzing) { 
            this.handleNextQuizCard("correct", 3);
        } else if (this.answer3.clicked(this.gx, this.gy) && this.answer3Text.text !== this.level1[this.levelCounter].questions[this.quizCounter]["answer"] && quizzing) { 
            this.handleNextQuizCard("incorrect", 3);
        } else if (this.answer4.clicked(this.gx, this.gy) && this.answer4Text.text === this.level1[this.levelCounter].questions[this.quizCounter]["answer"] && quizzing) { 
            this.handleNextQuizCard("correct", 4);
        } else if (this.answer4.clicked(this.gx, this.gy) && this.answer4Text.text !== this.level1[this.levelCounter].questions[this.quizCounter]["answer"] && quizzing) { 
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

    handleNextQuizCard(question, choice) {
        if (this.level1[this.levelCounter].questions[this.quizCounter]["japanese"] === "true") {
            this.soundQuestion.play();
        }
        choice = this.getChoice(choice)
        this.showAnswer = true;
        let timer = 1000;
        if (question === "correct") {
            this.playAnswerSound(choice);
            this.setCorrectIncorrectAnswerPos(choice, choice);
            timer = 50;
            this.level1[this.levelCounter].questions[this.quizCounter]["correct"] += 1;
            if (this.level1[this.levelCounter].questions[this.quizCounter]["correct"] < 1) {
                // this.level1[this.levelCounter].questions.push(this.level1[this.levelCounter].questions[this.quizCounter])
            }
            let attackArr = ["attack1Right", "attack2Right", "attack3Right", "attack4Right"]
            this.adventureGuy.startNewAnime(attackArr[Math.floor(Math.random() * attackArr.length)], "idleRight", 1) 
            this.trainingDummy.startNewAnime("takeHitLeft", "idleLeft", 2)
            
        } else {
            let answer = this.findCorrectAnswer();
            this.playAnswerSound(answer);
            this.setCorrectIncorrectAnswerPos(answer, choice);
            timer = 2000;
            this.level1[this.levelCounter].questions[this.quizCounter]["correct"] = -1;
            // this.level1[this.levelCounter].questions.push(this.level1[this.levelCounter].questions[this.quizCounter])
            this.adventureGuy.startNewCustomAnime([[7,1],[6,9],[6,2],[6,3],[6,4],[6,9],[9,3],[6,9],[9,4],[6,9],[9,5],[6,9],[9,4],[6,9],[9,5]], "idleRight", 8) 
        }

        this.pauseQuiz(timer);

    }

    pauseQuiz(timer) {

        setTimeout(()=>{
            // if (!this.soundQuestion.sound.paused || !this.soundPlaying.sound.paused) {
            //     this.pauseQuiz(timer);
            // } else {
                this.showAnswer = false;
                console.log(this.level1[this.levelCounter].questions.length)
                console.log(this.quizCounter)
                if (this.level1[this.levelCounter].questions.length - 1 === this.quizCounter) {
                    this.quiz3 = false;
                } else {
                    this.quizCounter += 1;
                }
                
                if (this.quiz1 === true && this.quizCounter > 2) {
                    this.quiz1 = false;
                } else if (this.quiz2 === true && this.quizCounter > 8) {
                    this.quiz2 = false;
                } 

                this.changeQuizCardText();
                this.playedQuizSound = false;
            // }
            
        }, 1)

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
        if (this.answer1Text.text === this.level1[this.levelCounter].questions[this.quizCounter]["answer"]) {
            return this.answer1
        } else if (this.answer2Text.text === this.level1[this.levelCounter].questions[this.quizCounter]["answer"]) {
            return this.answer2
        } else if (this.answer3Text.text === this.level1[this.levelCounter].questions[this.quizCounter]["answer"]) {
            return this.answer3
        } else if (this.answer4Text.text === this.level1[this.levelCounter].questions[this.quizCounter]["answer"]) {
            return this.answer4
        }

    }


    hover(e) {
        
    }

    spriteAnimation() {
        this.trainingDummy.animate();
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
        let returnArr = [this.level1[this.levelCounter].questions[this.quizCounter]["answer"]];
        if (this.level1[this.levelCounter].questions[this.quizCounter]["japanese"] === "true") {
            let arr = this.level1[this.levelCounter].english
            while (returnArr.length < 4) {
                let el = arr[Math.floor(Math.random()*arr.length)]
                if (!returnArr.includes(el)) {
                    returnArr.push(el)
                }
            }
        } else {
            let arr = this.level1[this.levelCounter].japanese
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
        this.questionText.text = this.level1[this.levelCounter].questions[this.quizCounter]["question"]
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
        if (this.level1[this.levelCounter].questions[this.quizCounter]["question"].includes("~")) {
            this.soundQuestion.sound.src = this.pathKeysHash[this.level1[this.levelCounter].questions[this.quizCounter]["question"].split("~").join("_")]
        } else {
            this.soundQuestion.sound.src = this.pathKeysHash[this.level1[this.levelCounter].questions[this.quizCounter]["question"]]
        }
        
    }

    updateQuizCardFontSize() {
        this.questionText.width = Math.round(this.getFontSizeToFit(this.questionText.text, this.question.width - 20))
        if (this.questionText.width > 17) {
            this.questionText.width = "17px"
        } else {
            this.questionText.width = this.questionText.width + "px"
        }

        this.answer1Text.width = Math.round(this.getFontSizeToFit(this.answer1Text.text, this.answer1.width - 20))
        if (this.answer1Text.width > 14) {
            this.answer1Text.width = "14px"
        } else {
            this.answer1Text.width = this.answer1Text.width + "px"
        }
        this.answer2Text.width = Math.round(this.getFontSizeToFit(this.answer2Text.text, this.answer2.width - 20))
        if (this.answer2Text.width > 14) {
            this.answer2Text.width = "14px"
        } else {
            this.answer2Text.width = this.answer2Text.width + "px"
        }
        this.answer3Text.width = Math.round(this.getFontSizeToFit(this.answer3Text.text, this.answer3.width - 20))
        if (this.answer3Text.width > 14) {
            this.answer3Text.width = "14px"
        } else {
            this.answer3Text.width = this.answer3Text.width + "px"
        }
        this.answer4Text.width = Math.round(this.getFontSizeToFit(this.answer4Text.text, this.answer4.width - 20))
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
                textArrRight[i].x = (300/1.4) - (this.ctx.measureText(textArrRight[i].text).width / 3)
            } else if (textArrRight[i].width === "8px") {
                textArrRight[i].x = (300/1.4) - (this.ctx.measureText(textArrRight[i].text).width / 3.3)
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
                textArrLeft[i].x = (300/3.5) - (this.ctx.measureText(textArrLeft[i].text).width / 3)
            } else if (textArrLeft[i].width === "8px") {
                textArrLeft[i].x = (300/3.5) - (this.ctx.measureText(textArrLeft[i].text).width / 3.3)
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

    

    updateQuizCardComponents() {
        if (this.playedQuizSound === false && this.level1[this.levelCounter].questions[this.quizCounter]["japanese"] === "true") {
            this.soundQuestion.play();
            this.playedQuizSound = true;
        }
        this.updateQuizCardFontSize();
        this.updateQuizCardTextX();
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
        if (this.level1[this.levelCounter].questions[this.quizCounter]["japanese"] === "true") {
            this.questionSound.update();
        } else {
            this.answer1Sound.update();
            this.answer2Sound.update();
            this.answer3Sound.update();
            this.answer4Sound.update();
        }
        this.letsPracticeTalkingBox.update();
        this.letsPracticeText.update();
        

    }

    animate(gx, gy) {
        this.gx = gx;
        this.gy = gy;
        this.background.update();
        this.spriteAnimation();
        this.updateInitialComponents();
        if (this.quiz1 === true || this.quiz2 || this.quiz3) { this.updateQuizCardComponents(); }
        else { this.updateNewCardComponents(); }

    }


}






