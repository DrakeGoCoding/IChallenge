import Account from "/model/Account.js";
import { getAccountDocByUserName } from "/utils.js";



const style = `

`
class QuizInfolist extends HTMLElement{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        getAccountDocByUserName("admin").then(doc => {
            console.log('fix lai func getAccountDocByUserName theo localStorage!!');
            Account.parseDocument(doc).then(account => {
                let quizCollection = account.quizCollection;
                quizCollection.forEach(quizSet => {
                    this._shadowDom.innerHTML = `
                        <quiz-info-item 
                            title="${quizSet.title}"
                            author="${account.userName}"
                            time="${quizSet.createdDate}"
                            question-no="${quizSet.quizList.length}"
                            record-count="${quizSet.recordCount}"
                            description="${quizSet.description}"
                            id=${quizSet.id}>
                        </quiz-info-item>
                        `
                })
            })
        })
    }
}

window.customElements.define('quiz-info-list', QuizInfolist)