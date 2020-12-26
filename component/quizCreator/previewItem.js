const style = `
.preview-question{
    padding: 10px 15px;
    height: 30vh;
}
.preview-question:hover{
    background-color:#636262;
}
.question-order{      
    font-size: 18px;   
}
.question-row{
    display: flex;
}
.question-window{
    margin-top: 7px;
    width: 220px;
    height: 25vh;
    background-color: #010101;
}
.question-box{
    display: block;
    text-align: center;
    line-height: 40px;
    text-overflow: ellipsis;
    overflow: hidden; 
    white-space: nowrap;
    font-size: 10px;
    padding: 5px;
    box-sizing: border-box;

    margin: 20px auto 10px;
    width: 180px;
    height: 50px;
    background-color: #252525;
}
.ans-row{
    margin: 0 auto 10px;
    width: 180px;
    height: 30px;
    display: flex;
    justify-content: space-between;
}
.ans-box{
    height: 30px;
    width: 85px;
    background-color: #252525;
}
.delete-btn{
    font-size: 22px;
   align-self: flex-end;
   margin-left: 10px
}
.delete-btn:hover{
    cursor: pointer;
    text-shadow: 3px 3px 0 #69C9D0,-3px -3px 0 #EE1D52;
}
.add-question-btn{
    margin: 30px auto;
    width: 200px;
    height: 40px;
    background-color: white;
    border-radius: 30px;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
}
.add-question-btn:hover{
    cursor: pointer;
    box-shadow: 4px 4px 0 #69C9D0,-4px -4px 0 #EE1D52;
}

@media only screen and (max-width: 768px){
    .preview-question{
        height: 100px;
    }   
    .question-order{      
        font-size: 12px;   
    }
    .question-window{
        width: 100px;
        height: 70px;
    }
    .question-box{
        display: block;
        text-align: center;
        line-height: 20px;
        text-overflow: ellipsis;
        overflow: hidden; 
        white-space: nowrap;
        font-size: 10px;
        box-sizing: border-box;
        margin: 8px auto 10px;
        width: 80px;
        height: 20px;
        background-color: #252525;
    }
    .ans-row{
        margin: 0 auto 5px;
        width: 80px;
        height: 10px;
        display: flex;
        justify-content: space-between;
    }
    .ans-box{
        height: 10px;
        width: 35px;
        background-color: #252525;
    }
    .delete-btn{
        font-size: 20px;
       align-self: flex-end;
       margin-left: 10px
    }
}
`

class PreviewItem extends HTMLElement{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowDom.innerHTML=`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <style>
        ${style}
        </style>
        <div class="preview-question">
                <div class="question-order">Question 1:</div>
                <div class="question-row">
                    <div class="question-window">
                        <div class="question-box">choose 1 correct question only </div>
                        <div class="ans-row">
                            <div class="ans-box"></div>
                            <div class="ans-box"></div>
                        </div>
                        <div class="ans-row">
                            <div class="ans-box"></div>
                            <div class="ans-box"></div>
                        </div>
                    </div>
                    <div class="delete-btn"> <i class="fa fa-trash"></i> </div>
                </div>
            </div>
        `
    }
}

window.customElements.define('preview-item', PreviewItem)