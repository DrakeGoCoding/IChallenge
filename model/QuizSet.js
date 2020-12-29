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
    // create a new quiz set from title and description
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
    // add a new quiz to this quiz set
    addQuiz(quiz) {
        this.quizList.push(quiz);
    }

    /**
     * 
     * @param {String} userID 
     * @param {Number} score 
     */
    // add new record to this quiz set object and update database simultaneously
    // this method also sorts out a maximum of 5 highest score and update database
    addNewRecord(userID, score) {
        const quizSetDoc = firebase.firestore().collection('QuizSets').doc(this.id);
        const newRecord = {
            'userID': userID,
            'score': score
        }
        // If highscoreList has not reached maximum, just push newHighScore normally
        if (this.highScoreList.length < MAX_HIGHSCORE_LIST) {
            this.highScoreList.push(newRecord);
            quizSetDoc.update({
                recordCount: ++this.recordCount,
                highScoreList: firebase.firestore.FieldValue.arrayUnion(newRecord)
            })
        }
        else {
            // else if highScoreList is full, check if newRecord beats any lowest highscore and replace it if possible
            let minHighScore = this.highScoreList.reduce((prev, cur) => prev.score < cur.score ? prev : cur);
            if (score > minHighScore.score) {
                quizSetDoc.update({
                    highScoreList: firebase.firestore.FieldValue.arrayRemove(minHighScore)
                })
                quizSetDoc.update({
                    recordCount: ++this.recordCount,
                    highScoreList: firebase.firestore.FieldValue.arrayUnion(newRecord)
                })
                minHighScore = newRecord;
            }
            // else just update the number of records
            else quizSetDoc.update({
                recordCount: ++this.recordCount
            })
        }
    }

    // push a quiz set to database 
    async pushToFireBase() {
        const res = await addQuizSetDocument(this);
        return res.id;
    }

    // parse a quiz set document and all of its attributes back to object
    static async parseDocument(quizSetDocument) {
        const quizSet = new QuizSet(quizSetDocument.title, quizSetDocument.description);
        quizSet.id = quizSetDocument.id;
        quizSet.recordCount = quizSetDocument.recordCount;
        quizSet.createdDate = new Date(quizSetDocument.createdDate);

        const highScoreList = quizSetDocument.highScoreList;
        for (const highScore of highScoreList) {
            quizSet.highScoreList.push({
                'userID': highScore.userID, 
                'score':highScore.score
            });
        }

        const quizRefList = quizSetDocument.quizList;
        for (const quizRef of quizRefList) {
            const quizDoc = await quizRef.get();
            const data = getDataFromDoc(quizDoc);
            quizSet.quizList.push(Quiz.parseDocument(data));
        }
        return quizSet;
    }
}

const MAX_HIGHSCORE_LIST = 5;