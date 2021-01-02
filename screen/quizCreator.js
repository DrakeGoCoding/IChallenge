const style = `
<style>
    .main{
        margin-top: 100px;
        position: fixed;
        width: 100%;
    }
</style>
`

class QuizCreator extends HTMLElement {
    constructor() {
        super()
        this._shadowDom = this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        this._shadowDom.innerHTML = `
            ${style}
            <creator-header></creator-header>
            <div class='main'>
                <preview-column></preview-column>
                <quiz-input></quiz-input>
            </div>
        `
    }
}

window.customElements.define('quiz-creator', QuizCreator)