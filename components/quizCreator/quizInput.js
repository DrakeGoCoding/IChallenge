const style = `
.question-create-box{
    width: calc(100% - 400px);
    margin-left: 350px;
    font-family: 'JetBrains Mono', monospace;
}
.question-input textarea{     
    height: 150px;
    width: 100%;
    background-color: #252525;
    border: none;
    outline: none;
    color: #fff;
    padding: 60px;
    box-sizing: border-box;
    font-size: 30px;
    text-align: center;

}
.answer-input-row{
    height: 120px;
    background-color: wheat;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}
.answer{
    background-color:#252525;
    color: #fff;
    font-size: 25px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    justify-content: space-between;
    margin-top: 10px;
}
.answer textarea{  
    background-color: #252525;
    height: 70px;
    width: 97%;
    right: 0;
    border: none;
    outline: none;
    color: #fff;
    padding: 20px 10px;
    box-sizing: border-box;
    font-size: 25px;
}
.ans-decor{
    width: 15px;
    height: 40px;
    border-radius: 30px;
    margin-right: 20px;
}
.color-red{
    background-color: #EE1D52;
}
.color-blue{
    background-color: #69C9D0;
}
.summit-btn{
    position: fixed;
    font-family: 'JetBrains Mono', monospace;
    width: 120px;
    height: 40px;
    background-color:#fff;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    top: 90vh;
    right: 5vw;
}
.summit-btn:hover{
    cursor: pointer;
    box-shadow: 4px 4px 0 #69C9D0,-4px -4px 0 #EE1D52;
}

@media only screen and (max-width: 768px){
    .question-create-box{
        margin:auto;
        width: 80vw;   
    }
    .question-input textarea{     
        height: 100px;
        width: 100%;
        font-size: 20px;
        padding: 50px 20px;
    }
    .answer{
        font-size: 18px;
    }
    .answer textarea{  
        font-size: 18px;
        padding: 15px;
        height: 50px;
    }
    .summit-btn{
        top: 75vh;
        font-size: 15px;
        width: 80px;
        height: 30px;
    }
}

`

class QuizInput extends HTMLElement{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowDom.innerHTML=`
        <style>
        ${style}
        </style>
        <div class="question-create-box"> 
            <div class="question-input"><textarea placeholder='Type your question'></textarea></div>
            <div class="answer-input">        
                <div class="answer ans1"> <div class='ans-decor color-red'></div> A. <textarea placeholder='Add Answer'></textarea></div>
                <div class="answer ans2"> <div class='ans-decor color-blue'></div> B. <textarea placeholder='Add Answer'></textarea></div>
                <div class="answer ans3"> <div class='ans-decor color-red'></div> C. <textarea placeholder='Add Answer'></textarea></div>
                <div class="answer ans4"> <div class='ans-decor color-blue'></div> D. <textarea placeholder='Add Answer'></textarea></div>
            </div>
        </div>

        <div class='summit-btn'>Done</div>
        `
    }
}

window.customElements.define('quiz-input', QuizInput)