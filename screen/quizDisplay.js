const style = `
.main{
    margin-top: 100px;
    position: fixed;
    width: 100%;
}
`

class QuizDisplay extends HTMLElement {
    constructor() {
        super()
        this._shadowDom = this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        this.id = this.getAttribute('id');
        this.player = this.getAttribute('player');
        this._shadowDom.innerHTML = `
        <style>
            ${style}
        </style>
        <quiz-header></quiz-header>
        <div class='main'>
            <quiz-container id=${this.id} player=${this.player}></quiz-container>
        </div>
        
        `
    }
}

window.customElements.define('quiz-display', QuizDisplay)