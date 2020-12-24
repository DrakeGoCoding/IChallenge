import Quiz from "./Quiz.js"

export default class QuizSet {
    title;
    #quizSet;
    highScoreList;
    createdDate;

    constructor(title) {
        this.title = title;
        this.#quizSet = [];
        this.highScoreList = [];
        this.createdDate = new Date();
    }

    getQuizList(){
        return this.#quizSet;
    }

    /**
     * 
     * @param {Quiz} quiz 
     */
    addQuiz(quiz) {
        this.#quizSet.push(quiz);
    }

    addNewHighScore(userID, score) {
        this.highScoreList.push({
            'userID': userID,
            'score': score
        });
    }
}