class HomeScreen extends HTMLElement {
    constructor() {
        super()
        this._shadowDom = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this._shadowDom.innerHTML = `
            ${style}       
            <div class='home-container'> 
                <home-header></home-header>
                <div class='main'> 
                    <quiz-info-list></quiz-info-list> 
                    <create-plus-btn></create-plus-btn>
                </div> 
            </div>
        `

    }
}

window.customElements.define('home-screen', HomeScreen)

const style = `
<style>
    .main{
        margin-top: 150px;
        margin-bottom: 150px;
    }

    @media only screen and (max-width: 786px){
        .main{
            margin-top: 100px;
            margin-bottom: 100px;
        }
    }
</style>
`