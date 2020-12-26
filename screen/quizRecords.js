const style = `
.main{
    margin-top: 100px;
}
`

class QuizRecord extends HTMLElement{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowDom.innerHTML=`
        <style>
            ${style}
        </style>
        <quiz-header></quiz-header>
        <div class='main'>
            <record-container></record-container>
        </div>
        `
    }
}

window.customElements.define('quiz-record', QuizRecord)