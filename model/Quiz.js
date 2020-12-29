import { addQuizDocument } from "../utils.js";
import Answer from "./Answer.js"

export default class Quiz {
    id;
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
     * @param {Answer} userAnswer
     */
    checkAnswer(userAnswer) {
        return userAnswer.isCorrect;
    }

    async pushToFireBase(){
        const res = await addQuizDocument(this);
        return res.id;
    }

    static parseDocument(quizDocument){
        const quiz = new Quiz(quizDocument.content);
        quiz.id = quizDocument.id;
        quizDocument.answers.forEach(answer => {
            quiz.addAnswer(Answer.parseDocument(answer));
        })
        return quiz; 
    }
}