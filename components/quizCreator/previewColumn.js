const style = `
.preview-column{
    position: absolute;
    overflow: scroll;
    width: 280px;
    height: 100vh;
    background-color:#252525;
    color: #fff;
    font-family: 'JetBrains Mono', monospace;
    overflow: scroll;
    height: calc(100% - 100px);
}

@media only screen and (max-width: 768px){
    .preview-column{
        width: 100%;
        height: 120px;
        bottom: 0;
        display: flex;
    }
    
}
`

class PreviewColumn extends HTMLElement{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowDom.innerHTML= `
        <style>
        ${style}
        </style>
        <div class="preview-column">
            <preview-item></preview-item>
            <preview-item></preview-item>
            <preview-item></preview-item>
            <preview-item></preview-item>
            <preview-item></preview-item>

            <add-question-btn></add-question-btn>
        </div>
        `
    }
}

window.customElements.define('preview-column', PreviewColumn)