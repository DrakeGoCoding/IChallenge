import Answer from "./Answer.js"

export default class Quiz {
    content;
    answers;

    constructor(content) {
        this.content = content;
        this.answers = [];
    }

    /**
     * 
     * @param {Answer} answer 
     */
    addAnswer(answer) {
        this.answers.push(answer);
    }

    getCorrectAnswers() {
        return this.answers.filter(answer => answer.isCorrect);
    }

    /**
     * 
     * @param {Array} userAnswers
     */
    checkAnswer(userAnswers) {
        return userAnswers.every(answer => answer.isCorrect);
    }
}