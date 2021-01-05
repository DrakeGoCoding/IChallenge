import Account from "../../model/Account.js";
import { getItemFromLocalStorage, getAccountDocByUserName } from "../../utils.js";

class QuizInfolist extends HTMLElement {
    constructor() {
        super()
        this._shadowDom = this.attachShadow({ mode: 'open' })
    }

    async connectedCallback() {
        this.filterTitle = this.getAttribute('filter') || '';

        const currentUser = getItemFromLocalStorage('currentUser');
        const accountDoc = await getAccountDocByUserName(currentUser.userName);
        const account = await Account.parseDocument(accountDoc);

        this.quizCollection = account.quizCollection;

        let quizInfoListHtml = '';

        this.quizCollection.forEach(quizSet => {
            if (quizSet.title.includes(this.filterTitle))
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
            <div class="quiz-info-list">${quizInfoListHtml}</div>
        `
    }

    static get observedAttributes() {
        return ['filter'];
    }

    attributeChangedCallback(attribute, oldValue, newValue) {
        if (attribute === 'filter') {
            let quizInfoListHtml = '';

            this.quizCollection.forEach(quizSet => {
                if (quizSet.title.includes(newValue))
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
}

window.customElements.define('quiz-info-list', QuizInfolist)

const style = `
    
`