const style = `
.create-btn{
    position: fixed;
    color: #fff;
    font-size: 60px;
    left: 90vw;
    top: 80vh;
}
.create-btn:hover{
    cursor: pointer;
    text-shadow: 4px 4px 0 #69C9D0,-4px -4px 0 #EE1D52;
}
@media only screen and (max-width: 768px){
    .create-btn{
        font-size: 50px;
        left: 92vw;
    }
}
@media only screen and (max-width: 400px){
    .create-btn{
        left: 80vw;
    }
}
`
class CreatePlusBtn extends HTMLElement {
    constructor() {
        super()
        this._shadowDom = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this._shadowDom.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <style>
        ${style}
        </style>
        <div class="create-btn"> <i class="fa fa-plus-circle"></i> </div>
        `
    }
}

window.customElements.define('create-plus-btn', CreatePlusBtn)