import Account from "../../model/Account.js";
import { getItemFromLocalStorage } from "../../utils.js";
import { getAccountDocByUserName } from "/utils.js";

class QuizInfolist extends HTMLElement {
    constructor() {
        super()
        this._shadowDom = this.attachShadow({ mode: 'open' })
    }

    async connectedCallback() {
        const currentUser = getItemFromLocalStorage('currentUser');
        const accountDoc = await getAccountDocByUserName(currentUser.userName);
        const account = await Account.parseDocument(accountDoc);
        const quizCollection = account.quizCollection;

        let quizInfoListHtml = '';

        quizCollection.forEach(quizSet => {
            quizInfoListHtml += `
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

        this._shadowDom.innerHTML = `
            ${style}
            ${quizInfoListHtml}
        `
    }
}

window.customElements.define('quiz-info-list', QuizInfolist)

const style = `
    
`