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
    background-image: url(./img/quiz-img-default-dark.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
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
.share-btn, .play-btn, .view-btn{
    margin-left: 1vw;
    border: 2px solid #fff;
    padding: 0.4vw;
    border-radius: 10px;
}

.share-btn:hover, .play-btn:hover, .view-btn:hover{
    cursor: pointer;
    background-color: #010101;
    box-shadow: 4px 4px 0 #69C9D0,-4px -4px 0 #EE1D52;
}

@media only screen and (max-width: 768px){
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
    .share-btn, .play-btn, .view-btn{
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
         this._shadowDom.innerHTML=`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Rowdies&display=swap" rel="stylesheet">
         <style>
            ${style}
         </style>

    <div class="quiz-info-item">
        <div class="quiz-info-left">
            <div class="quiz-img"></div>
        </div>
        <div class="quiz-info-right">
            <div class="quiz-name">Name of the Quiz</div>
            <div class="quiz-author">created by AuthorName</div>
            <div class="quiz-created-time">22:05 22/12/2020</div>
            <div class="quiz-summary">
                <div class="question-no"> <i class="fa fa-book"></i> 9 questions</div>
                <div class="played-times"> <i class="fa fa-play"></i> played 3 times</div>
            </div>
            <div class="quiz-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sapien ante, gravida nec augue fermentum, eleifend ultrices erat. Nunc elit ligula, tristique eu euismod vel, condimentum non ipsum. Ut pharetra ex quis enim iaculis tincidunt. Proin odio arcu, lobortis sed faucibus sed, luctus id sapien. </div>
            <div class="quiz-btn">
                <div class="view-btn"> <i class="fa fa-eye"></i> <span>View Records</span> </div>
                <div class="play-btn"> <i class="fa fa-play"></i> <span>Play Now</span> </div>
                <div class="share-btn"> <i class="fa fa-share-alt"></i> <span>Share</span> </div>
            </div>
        </div>
    </div>
         `
     }
}

window.customElements.define('quiz-info-item', QuizInfoItem)

