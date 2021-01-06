const style = `
.animation-area {
    background: linear-gradient( #020202, #242424, #020202);
    width: 100%;
    height: 100%;
    z-index: -1;
}
.box-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
}
.box-area li {
    position: absolute;
    display: block;
    list-style: none;
    width: 25px;
    height: 25px;
    border-radius: 10px;;
    background: rgba(87, 250, 215, 0.6);
    box-shadow: 10px 5px 5px rgba(223, 76, 88, 0.6);
    animation: animate 20s linear infinite;
    bottom: -150px;
}
.box-area li:nth-child(1) {
    left: 86%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}
.box-area li:nth-child(2) {
    left: 12%;
    width: 30px;
    height: 30px;
    animation-delay: 1.5s;
    animation-duration: 10s;
}
.box-area li:nth-child(3) {
    left: 70%;
    width: 100px;
    height: 100px;
    animation-delay: 5.5s;
}
.box-area li:nth-child(4) {
    left: 42%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 15s;
}
.box-area li:nth-child(5) {
    left: 65%;
    width: 40px;
    height: 40px;
    animation-delay: 0s;
}
.box-area li:nth-child(6) {
    left: 15%;
    width: 110px;
    height: 110px;
    animation-delay: 3.5s;
}
@keyframes animate {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(-800px) rotate(360deg);
        opacity: 0;
    }
}


`

class AnimationBackground extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML =`
        <style>
            ${style}
        </style>
        <div class="animation-area">
            <ul class="box-area">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        `
    }

}

window.customElements.define('animation-bg', AnimationBackground)