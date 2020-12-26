export default class Answer{
    content;
    isCorrect;

    /**
     * 
     * @param {String} content 
     * @param {Boolean} isCorrect 
     */
    constructor(content, isCorrect){
        this.content = content;
        this.isCorrect = isCorrect;
    }

    static parseDocument(answerDocument){
        return new Answer(answerDocument.content, answerDocument.isCorrect);
    }
}