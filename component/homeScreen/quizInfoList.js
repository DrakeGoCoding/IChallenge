import Account from "../../model/Account.js";
import { getAccountDocByUserName } from "/utils.js";

class QuizInfolist extends HTMLElement {
    constructor() {
        super()
        this._shadowDom = this.attachShadow({ mode: 'open' })
    }

    async connectedCallback() {
        const accountDoc = await getAccountDocByUserName('admin');
        console.log('fix lai func getAccountDocByUserName theo localStorage!!');
        const account = await Account.parseDocument(accountDoc);

        let quizCollection = account.quizCollection;
        quizCollection.forEach(quizSet => {
            this._shadowDom.innerHTML = `
                <quiz-info-item 
                    title="${quizSet.title}"
                    time="${quizSet.createdDate}"
                    question-no="${quizSet.quizList.length}"
                    record-count="${quizSet.recordCount}"
                    description="${quizSet.description}"
                    id=${quizSet.id}>
                </quiz-info-item>
                `
        })
    }
}

window.customElements.define('quiz-info-list', QuizInfolist)

const style = `
    
`