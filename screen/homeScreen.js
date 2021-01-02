//import '../JQuery/jquery.js'
//import '../JQuery/jquery-ui.min.js'

const style = `
.home-container{
    width: 100vw;
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
#quiz-name{
    background-color: transparent;
}


#overlay{
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
#create-dialog{
    z-index: 2;
    margin: auto;
    width: 60vw;;
    background-color:#010101;
    border-radius: 20px;
    padding: 40px;
    box-sizing: border-box;
    font-family: 'JetBrains Mono', monospace;
    color: #fff;
    font-size: 20px;
}
.name-input, .description-input{
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-bottom: 30px;
}
.name-input textarea, .description-input textarea{   
    color: #fff;
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
    box-sizing: border-box;
    font-size: 20px;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 10px;
    outline: none;
}
.description-input textarea{
    height: 280px;
    line-height: 50px;
}
.btn-row{
    display: flex;
    justify-content: flex-end;
}
#confirm-btn, #cancel-btn{
    width: fit-content;
    padding: 10px;
    background-color: #fff;
    color: #000;
    border-radius: 10px;
    margin-left: 15px;
}
#confirm-btn:hover, #cancel-btn:hover{
    box-shadow: 4px 4px 0 #69C9D0,-4px -4px 0 #EE1D52;
    cursor: pointer;
}  
`

class HomeScreen extends HTMLElement {
    constructor() {
        super()
        this._shadowDom = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        

        this._shadowDom.innerHTML = `
        <style>
            ${style}
        </style>
        
        <div class='home-container'> 
            <home-header></home-header>
            <div class='main'> 
                <quiz-info-list></quiz-info-list> 
                <create-plus-btn id="create-btn"></create-plus-btn>
            </div> 

            
        </div>
        
        `
        
    }

}

window.customElements.define('home-screen', HomeScreen)