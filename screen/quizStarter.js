const style = `
.main{
    margin-top: 150px;
    position: fixed;
    width: 100%;
}
`

class QuizStarter extends HTMLElement{
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
            <starter-container></starter-container>
        </div>
        `
    }

}

window.customElements.define('quiz-starter', QuizStarter)