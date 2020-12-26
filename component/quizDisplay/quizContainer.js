const style = `
.quiz-container{
    margin: auto;
    width: 600px;
    background-color: #252525;
    border-radius: 30px;
    padding: 30px;
    box-sizing: border-box;
    font-family: 'JetBrains Mono', monospace;
    color: #fff;
}
.question-no{
    font-size: 15px;
}
.quiz-content{
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    margin-top: 15px;
}
.question{
    margin: 15px 0 30px;
    font-size: 20px;
}
.answer-option{
    height: 200px;
    width: 100%;
    
}
.answer{
    padding: 0 20px;
    box-sizing: border-box;
    height: 50px;
    margin: 10px 0;
    background-color: #333;
    border-radius: 10px;
    line-height: 50px;
}
.answer:hover{
    background-color: #434343;
    cursor: pointer;
}
.next-btn{
    margin: 50px 0 20px;
    width: 80px;
    padding: 10px;
    background-color: #fff;
    color: #000;
    border-radius: 10px;
    text-align: center;
    
}
.next-btn:hover{
    cursor: pointer;
    box-shadow: 4px 4px 0 #69C9D0,-4px -4px 0 #EE1D52;
}
.status-bar{
    display: flex;
    align-items: center;
    margin: 15px 0 0;
}
.status-circle{
    margin-right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 100px;
    background-color: yellowgreen;
    text-align: center;
    background-color: #333;
    line-height: 40px;
    font-size: 20px;
}
.right-ans{
    background-color: #69C9D0;
}
.wrong-ans{
    background-color: #EE1D52;
}

@media only screen and (max-width: 768px){
    .quiz-container{
        width: 400px;
    }
}

@media only screen and (max-width: 400px){
    .quiz-container{
        width: 90vw;
        font-size: 15px;
    }
    .question{
        font-size: 18px;
    }
}
`

class QuizContainer extends HTMLElement{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowDom.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet">
        <style>
            ${style}
        </style>
        <div class="quiz-container">
            <div class="question-no">Question 4 of 5</div>
            <div class="quiz-content">
                <div class="question">Which month comes right before June?</div>
                <div class="answer-option">
                    <div class="answer ans1">A. May </div>
                    <div class="answer ans2">B. September </div>
                    <div class="answer ans3">C. July </div>
                    <div class="answer ans4">D. August </div>
                </div>
            
                <div class="next-btn">Next</div>
            </div>
            <div class="status-bar">
                <div class="status-circle right-ans"> <i class="fa fa-check"></i> </div>
                <div class="status-circle right-ans"> <i class="fa fa-check"></i> </div>
                <div class="status-circle wrong-ans"> <i class="fa fa-times"></i> </div>
                <div class="status-circle "></div>
                <div class="status-circle "></div>
            </div>
        </div>
        `
    }
}

window.customElements.define('quiz-container', QuizContainer)