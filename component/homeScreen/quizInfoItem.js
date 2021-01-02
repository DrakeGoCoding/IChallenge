
import { convertDate, writeToLocalStorage } from "/utils.js";

const style = `
.quiz-info-item{
    background-color:#252525;
    width: 55vw;
    margin: auto;
    border-radius: 10px;
    display: flex;
    margin-top: 8vh;
}
.quiz-info-left{
    margin: 2vw;
    width: 12vw;
    height: 12vw;
    border-radius: 10px;
    background-color: #000;
    color: #fff;
    font-size: 8vw;
    text-align: center;
    line-height: 12vw;
}
.quiz-info-right{
    margin-top: 2vw;
    width: 37vw;
    color: #fff;
}
.quiz-name{
    font-family: 'Rowdies', cursive;
    font-size: 30px;
}
.quiz-author, .quiz-created-time, .quiz-summary, .quiz-description, .quiz-btn{
    font-family: 'JetBrains Mono', monospace;
    font-size: 16px;
}
.quiz-author{
    margin-bottom: 1vw;
}
.quiz-created-time, .quiz-summary{
    margin-bottom: 1.5vw;
}
.quiz-summary{
    display: flex;
}
.question-no{
    margin-right: 4vw;
}
.quiz-description, .quiz-btn{
    margin-bottom: 2vw;
}
.quiz-btn{
    display: flex;
    justify-content: flex-end;
}
#share-btn, #play-btn, #view-btn{
    margin-left: 1vw;
    border: 2px solid #fff;
    padding: 0.4vw;
    border-radius: 10px;
}

#share-btn:hover, #play-btn:hover, #view-btn:hover{
    cursor: pointer;
    background-color: #010101;
    box-shadow: 4px 4px 0 #69C9D0,-4px -4px 0 #EE1D52;
}

@media only screen and (max-width: 950px){
    .quiz-info-left{
        font-size: 14vw;
        line-height: 20vw;
    }
    .quiz-info-item{
        width: 80vw;
    }
    .quiz-info-left{
        width: 20vw;
        height: 20vw
    }
    .quiz-info-right{
        width: 55vw;
    }
    .quiz-name{
        font-size: 18px;
    }
    .quiz-author, .quiz-created-time, .quiz-summary, .quiz-description, .quiz-btn{
        font-size: 12px;
    }
}
@media only screen and (max-width: 400px){
    .quiz-info-left{
        font-size: 15vw;
        line-height: 22vw;
    }
    #share-btn, #play-btn, #view-btn{
        padding: 5px 12px;
        margin-right: 1vw;
        border: 1.5px solid #fff;
    }
    .quiz-btn span{
        display: none;
    }
}

`

class QuizInfoItem extends HTMLElement{
     constructor(){
         super()
         this._shadowDom = this.attachShadow({mode: 'open'})
     }

     connectedCallback(){
        this.title = this.getAttribute('title')
        this.author = this.getAttribute('author')
        this.timeCreated = this.getAttribute('time')
        this.questionNo = this.getAttribute('question-no')
        this.recordCount = this.getAttribute('record-count')
        this.description = this.getAttribute('description')
        this.id = this.getAttribute('id')

        this.timeCreated = convertDate(this.timeCreated)

        this._shadowDom.innerHTML=`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Rowdies&display=swap" rel="stylesheet">
         <style>
            ${style}
         </style>

    <div class="quiz-info-item">
        <div class="quiz-info-left">
            <div class="quiz-img"> <i class="fa fa-quora" aria-hidden="true"></i> </div>
        </div>
        <div class="quiz-info-right">
            <div class="quiz-name">${this.title}</div>
            <div class="quiz-author">created by ${this.author}</div>
            <div class="quiz-created-time">${this.timeCreated}</div>
            <div class="quiz-summary">
                <div class="question-no"> <i class="fa fa-book"></i> ${this.questionNo} questions</div>
                <div class="played-times"> <i class="fa fa-play"></i> played ${this.recordCount} times</div>
            </div>
            <div class="quiz-description">${this.description}</div>
            <div class="quiz-btn">
                <div id="view-btn"> <i class="fa fa-eye"></i> <span>View Records</span> </div>
                <div id="play-btn"> <i class="fa fa-play"></i> <span>Play Now</span> </div>
                <div id="share-btn"> <i class="fa fa-share-alt"></i> <span>Share</span> </div>
            </div>
        </div>
    </div>
         `

         this._shadowDom.getElementById('play-btn').addEventListener('click', () => {
            writeToLocalStorage('currentQuiz', this.id)
            router.navigate('quiz-starter')
          })
     }
}

window.customElements.define('quiz-info-item', QuizInfoItem)

