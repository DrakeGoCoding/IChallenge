import QuizSet from "./QuizSet.js"

export default class QuizCollection {
    userID;
    #quizCollection;

    constructor(userID) {
        this.userID = userID;
        this.#quizCollection = [];
    }

    getQuizSetList(){
        return this.#quizCollection;
    }

    /**
     * 
     * @param {QuizSet} quizSet 
     */
    addQuizSet(quizSet) {
        this.#quizCollection.push(quizSet);
    }

}