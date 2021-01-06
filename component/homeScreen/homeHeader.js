const style = `
.main-header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
    padding: 5px 0;
    border-bottom: 1px groove white;
    background-color: #010101;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo{
    margin-left: 4vw;
    font-family: 'Rowdies', cursive;
    font-size: 65px;
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
#user-icon{
    margin-right: 4vw;
    color: #fff;
    font-size: 40px;
}
#user-icon:hover{
    cursor: pointer;
    text-shadow: 4px 4px 0 #69C9D0,-4px -4px 0 #EE1D52;
}
.search-box{
    margin-right: 2vw;
    display: flex;
    color: white;
    align-items: center;
    font-size: 25px;
    border-radius: 50px;
    padding: 0 1vw;
    background-color: #252525;
}
.search-box:hover{
    box-shadow: 3px 3px 0 #69C9D0,-3px -3px 0 #EE1D52;
}
.search-box input{
    height: 2.5vw;
    border: none;
    background-color: transparent;
    font-size: 15px;
    margin-left: 1vw;
    outline: none;
    color: #fff;
}
@media only screen and (max-width: 786px){
    .main-header{
        height: 70px;
    }
    .logo{
        font-size: 50px;
    }
    #user-icon{
        font-size: 35px;
    }
    .search-box{
        font-size: 20px;
    }
    .search-box input{
        font-size: 12px;
    }
}
@media only screen and (max-width: 425px){
    .main-header{
        height: 80px
    }
    .logo{
        font-size: 40px;
    }
    #user-icon{
        font-size: 28px;
    }
    .search-box{
        display: none;
    }
}
`

class HomeHeader extends HTMLElement {
    constructor() {
        super()
        this._shadowDom = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this._shadowDom.innerHTML = `
       
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Rowdies&display=swap" rel="stylesheet">

        <style>
            ${style} 
         </style>
        <div class="main-header">
            <div class="logo">Queazy</div>
            <div class="header-right-bar">
                <div id="user-icon"><i class="fa fa-user"></i></div>
                <div class="search-box">
                    <div class="search-icon"><i class="fa fa-search"></i></div>
                    <input id="input-title" type="text" placeholder="Enter quiz title">
                </div>
                <div class="theme-toggle"></div>
            </div>
        </div>
        `

        const inputTitle = this._shadowDom.querySelector('#input-title');
        const quizInfoList = this.parentNode.getRootNode()
            .querySelector('.main')
            .querySelector('quiz-info-list');

        inputTitle.addEventListener('keyup', e => {
            const title = inputTitle.value.trim();
            quizInfoList.setAttribute('filter', title);
        })
    }
}

window.customElements.define('home-header', HomeHeader)