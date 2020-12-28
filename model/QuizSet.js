import { addQuizSetDocument, getDataFromDoc } from "../utils.js";
import Quiz from "./Quiz.js"

export default class QuizSet {
    title;
    description;
    recordCount;
    quizList;
    highScoreList;
    createdDate;
    
    /**
     * 
     * @param {String} title 
     * @param {String} description 
     */
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.recordCount = 0;
        this.quizList = [];
        this.highScoreList = [];
        this.createdDate = new Date();
    }

    /**
     * 
     * @param {Quiz} quiz 
     */
    addQuiz(quiz) {
        this.quizList.push(quiz);
    }

    /**
     * 
     * @param {String} userID 
     * @param {Number} score 
     */
    addNewRecord(userID, score) {
        if (this.highScoreList.length < MAX_HIGHSCORE_LIST){
            this.highScoreList.push({
                'userID': userID,
                'score': score
            });
        }
        else {
            this.highScoreList.forEach(highScore => {
                if (score > highScore.score){
                    highScore.userID = userID;
                    highScore.score = score;
                }
            })
        }

        // TO DO: update QuizSets on firestore

        this.recordCount++;
    }

    pushToFireBase(){
        addQuizSetDocument(this);
    }

    static parseDocument(quizSetDocument){
        const quizSet = new QuizSet(quizSetDocument.title, quizSetDocument.description);
        quizSet.createdDate = new Date(quizSetDocument.createdDate);
        quizSetDocument.quizList.forEach(quizRef => {
            quizRef.get().then(doc => {
                quizSet.quizList.push(Quiz.parseDocument(getDataFromDoc(doc)));
            })
        })
        quizSetDocument.highScoreList.forEach(highScore => {
            quizSet.addNewHighScore(highScore.userID, hightScore.score);
        })
        return quizSet;
    }
}

const MAX_HIGHSCORE_LIST = 5;