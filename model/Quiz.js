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

    getCorrectAnswer() {
        return this.answers.find(answer => answer.isCorrect);
    }

    /**
     * 
     * @param {Answer} userAnswer 
     */
    checkAnswer(userAnswer) {
        return userAnswer.isCorrect;
    }
}