const style = `
    
`
class QuizInfolist extends HTMLElement {
    constructor() {
        super()
        this._shadowDom = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this._shadowDom.innerHTML = `
            <quiz-info-item></quiz-info-item>
            <quiz-info-item></quiz-info-item>
            <quiz-info-item></quiz-info-item>
            <quiz-info-item></quiz-info-item>
            <quiz-info-item></quiz-info-item>
        `
    }
}

window.customElements.define('quiz-info-list', QuizInfolist)