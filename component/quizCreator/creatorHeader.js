export default class CreatorHeader extends HTMLElement {
    constructor() {
        super()
        this._shadowDom = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this._shadowDom.innerHTML = `
            ${style} 
            <div class="main-header">
                <div class="logo">Queazy</div>
                <div class="header-right-bar">
                    <div class="user-icon"><i class="fa fa-user"></i></div>
                    <div class="theme-toggle"></div>
                </div>
            </div>
        `
        const logo = this._shadowDom.querySelector('.logo');
        const userBtn = this._shadowDom.querySelector('.user-icon');

        logo.addEventListener('click', e => {
            router.navigate('home-screen');
        })
        userBtn.addEventListener('click', e => {
            // TO UPDATE
        })
    }
}

window.customElements.define('creator-header', CreatorHeader)

const style = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="https://fonts.googleapis.com/css2?family=Rowdies&display=swap" rel="stylesheet">
<style>
    .main-header{
        position: fixed;
        top: 0;
        width: 100%;
        height: 100px;
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
    .user-icon{
        margin-right: 4vw;
        color: #fff;
        font-size: 40px;
    }
    .user-icon:hover{
        cursor: pointer;
        text-shadow: 4px 4px 0 #69C9D0,-4px -4px 0 #EE1D52;
    }
    @media only screen and (max-width: 786px){
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
    @media only screen and (max-width: 425px){
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
</style>
`