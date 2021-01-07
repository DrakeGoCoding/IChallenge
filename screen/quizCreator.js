export default class QuizCreator extends HTMLElement {
    constructor() {
        super()
        this._shadowDom = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this._shadowDom.innerHTML = `
            ${style}
            <creator-header></creator-header>
            <div class='main'>
                <animation-bg></animation-bg>
                <preview-column></preview-column>
                <quiz-input count=1></quiz-input>
            </div>
                <div class="container">
                    <div class="record-container">       
                        <div class="name-input">
                            <div>Enter your Quiz's name</div>
                            <br>
                            <textarea placeholder="Sample Quiz"></textarea>
                        </div>
                        
                        <div class="description-input">
                            <div>Enter your Quiz's description</div>
                            <br>
                            <textarea placeholder="This quiz is about..."></textarea>
                        </div>
                        <div class="btn-row">
                            <button id='confirm-btn'>Confirm</button>
                            <button id='cancel-btn'>Back</button>
                        </div>     
                    </div>
                </div>
        `
        const cancelButton = this._shadowDom.getElementById('cancel-btn')
        cancelButton.addEventListener('click', () => {
            const container = this._shadowDom.querySelector('.container');
            container.style.display = "none";

        })
    }
        
}

window.customElements.define('quiz-creator', QuizCreator);

const style = `
<style>
    .main{
        margin-top: 100px;
        position: fixed;
        width: 100%;
    }
    *{
        margin: 0;
        padding: 0;
    }
    button {
        font-family: 'JetBrains Mono', monospace;
    }
    .container{
        background-color: rgba(0, 0, 0, 0.6);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        transition: 1s;
    }
    .record-container{
        margin-top: 50px;
        transform: translate(50%);
        width: 50%;
        background-color:#252525;
        border-radius: 20px;
        padding: 40px;
        box-sizing: border-box;
        font-family: 'JetBrains Mono', monospace;
        color: #fff;
        font-size: 20px;
        transition: all 1s;
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
        height: 300px;
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
</style>
`