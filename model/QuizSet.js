import { addQuizSetDocument, getDataFromDoc } from "../utils.js";
import Quiz from "./Quiz.js"

export default class QuizSet {
    id;
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

        // TO DO: update this quizset's highScoreList attribute on firestore

        this.recordCount++;
    }

    async pushToFireBase(){
        const res = await addQuizSetDocument(this);
        return res.id;
    }

    static parseDocument(quizSetDocument){
        const quizSet = new QuizSet(quizSetDocument.title, quizSetDocument.description);
        quizSet.id = quizSetDocument.id;
        quizSet.recordCount = quizSetDocument.recordCount;
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