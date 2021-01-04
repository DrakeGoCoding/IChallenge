const style = `
.home-container{

}
.main{
    margin-top: 8vw;
    margin-bottom: 8vw;
}

@media only screen and (max-width: 786px){
    .main{
        margin-top: 100px;
    }
}
`

class HomeScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this._shadowDom.innerHTML= `
        <style>
            ${style}
        </style>
        
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