const style = `
<style>
    #question-create-box{
        width: calc(100% - 400px);
        margin-left: 350px;
        font-family: 'JetBrains Mono', monospace;
    }
    #question-input textarea{     
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
    .correct-check{
        height: 35px;
        width: 35px;
        margin-right: 15px;
        background: #666666;
        color: #ffffff;
    }
    .redirect-btns{
        display: flex;
        float: right; 
        margin-top: 30vh;
    }
    #summit-btn, #cancel-btn{
        font-family: 'JetBrains Mono', monospace;
        font-size: 1rem;
        width: 150px;
        height: 40px;
        background-color:#fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px;
        margin-left: 50px;
        right: 5vw;
    }
    #summit-btn:hover, #cancel-btn:hover{
        cursor: pointer;
        box-shadow: 4px 4px 0 #69C9D0,-4px -4px 0 #EE1D52;
    }

    @media only screen and (max-width: 768px){
        #question-create-box{
            margin:auto;
            width: 80vw;   
        }
        #question-input textarea{     
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
        #summit-btn, #cancel-btn{
            top: 75vh;
            font-size: 15px;
            width: 120px;
            height: 40px;
        }
    }
</style>
`

class QuizInput extends HTMLElement{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this._shadowDom.innerHTML=`
            ${style}
            <div id="question-create-box"> 
                <div id="question-input">
                    <textarea placeholder='Type your question'></textarea>
                </div>
                <div class="answer-input">        
                    <div class="answer"> <div class='ans-decor color-red'></div> <input type="checkbox" class="correct-check"> A. <textarea id='ans1' placeholder='Add Answer'></textarea></div>
                    <div class="answer" id='ans2'> <div class='ans-decor color-blue'></div> <input type="checkbox" class="correct-check" > B. <textarea placeholder='Add Answer'></textarea></div>
                    <div class="answer" id='ans3'> <div class='ans-decor color-red'></div> <input type="checkbox" class="correct-check" > C. <textarea placeholder='Add Answer'></textarea></div>
                    <div class="answer" id='ans4'> <div class='ans-decor color-blue'></div> <input type="checkbox" class="correct-check" > D. <textarea placeholder='Add Answer'></textarea></div>
                </div>
                <div class="redirect-btns">
                    <button id='summit-btn' disabled>Done</button>
                    <button id='cancel-btn'>Cancel</button>
                </div>
            </div>
        `

        const summitBtn = this._shadowDom.getElementById('summit-btn')
        const cancelBtn = this._shadowDom.getElementById('cancel-btn')

        summitBtn.addEventListener('click', async (e) => {
            e.preventDefault()

            // TO DO: update firebase and redirect to home screen
            console.log("submit");
        })

        cancelBtn.addEventListener('click', async(e) => {
            e.preventDefault();

            // TO DO: Redirect to home screen
            console.log("redirect to home screen");
        })
    }
    
}

window.customElements.define('quiz-input', QuizInput)