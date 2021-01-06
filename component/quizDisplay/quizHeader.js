const style = `
.main-header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    background-color: #010101;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 6;
}
.logo{
    margin-left: 4vw;
    font-family: 'Rowdies', cursive;
    font-size: 60px;
    color: #fff;
    text-shadow: 4px 4px 0 #69C9D0,-4px -4px 0 #EE1D52;
}
.logo:hover{
    cursor:pointer;
}
.header-right-bar{
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
}

@media only screen and (max-width: 1000px){
    .main-header{
        height: 70px;
    }
    .logo{
        font-size: 50px;
    }
    .user-icon{
        font-size: 35px;
    }
}
@media only screen and (max-width: 400px){
    .main-header{
        height: 80px
    }
    .logo{
        font-size: 40px;
    }
    .user-icon{
        font-size: 28px;
    }
}
`

class QuizHeader extends HTMLElement{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this._shadowDom.innerHTML = `
       
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Rowdies&display=swap" rel="stylesheet">

        <style>
            ${style} 
         </style>
         
        <div class="main-header">
            <div class="logo">Queazy</div>
            <div class="header-right-bar">
                <div class="theme-toggle"></div>
            </div>
        </div>
        `
    }
}

window.customElements.define('quiz-header', QuizHeader)