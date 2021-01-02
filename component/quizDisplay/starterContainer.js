import { getItemFromLocalStorage, getQuizSetDocByID} from "/utils.js";

const style = `
.starter-container{
    margin: auto;
    width: 550px;
    background-color:#010101;
    border-radius: 20px;
    padding: 40px;
    box-sizing: border-box;
    font-family: 'JetBrains Mono', monospace;
    color: #fff;
    font-size: 14px;
}
.quiz-name{
    font-size: 40px;
    text-align: center;
    margin-bottom: 15px;
}
.greeting{
    font-size: 20px;
    text-align: center;
    margin-bottom: 60px;
    
}
.name-input{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.name-input textarea{   
    color: #fff;
    width: 300px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    padding: 0 15px;
    box-sizing: border-box;
    font-size: 25px;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 10px;
    outline: none;
}
.start-btn{
    color: #000;
    padding: 0 15px;
    box-sizing: border-box;
    text-align: center;
    line-height: 50px;
    width: fit-content;
    height: 50px;
    background-color: #fff;
    font-size: 18px;
    border-radius: 10px;
    margin: 30px auto 0;
}
.start-btn:hover{
    box-shadow: 4px 4px 0 #69C9D0,-4px -4px 0 #EE1D52;
    cursor: pointer;
}
`

class StarterContainer extends HTMLElement{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        let quizSetId = getItemFromLocalStorage("currentQuiz")
        getQuizSetDocByID(quizSetId).then(quizSet => {
            console.log(quizSet);

            this._shadowDom.innerHTML=`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <style>
            ${style}
        </style>
        
        <div class="starter-container">
            <div class="quiz-name">${quizSet.title}</div>
            <div class="greeting">Are you ready?</div>
            <div class="name-input">
                <textarea placeholder="Enter your name"></textarea>
            </div>
            
            <div class="start-btn"> <i class="fa fa-play"></i> Start the Quiz</div>
        </div>
        `
        })

        
        
    }
}

window.customElements.define('starter-container', StarterContainer)