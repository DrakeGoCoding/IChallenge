const style = `
<style>
    .preview-column{
        position: fixed;
        overflow-y: auto;
        width: 280px;
        height: 100vh;
        background-color:#252525;
        color: #fff;
        font-family: 'JetBrains Mono', monospace;
        height: calc(100% - 100px);
        flex-direction: column;
    }

    .preview-item-list{
        display: flex;
        flex-direction: column;
    }

    @media only screen and (max-width: 768px){
        .preview-item-list{
            flex-direction: row;
        }
        .preview-column{
            width: 100%;
            height: 120px;
            bottom: 0;
            overflow-x: auto;
            display: flex;
            flex-direction: row;
        }    
    }
</style>
`

class PreviewColumn extends HTMLElement {
    previewItemCount = 1;

    constructor() {
        super();
        this._shadowDom = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this._shadowDom.innerHTML = `
            ${style}
            <div class="preview-column">
                <div class="preview-item-list">
                    <preview-item count=${this.previewItemCount}></preview-item>
                </div>
                <add-question-btn></add-question-btn>
            </div>
        `

        const newQuestionBtn = this._shadowDom.querySelector('add-question-btn');
        const previewItemList = this._shadowDom.querySelector('.preview-item-list');

        newQuestionBtn.addEventListener('click', (e) => {
            e.preventDefault();

            // TO DO: create a new quiz platform
            previewItemList.innerHTML += `<preview-item count=${++this.previewItemCount}></preview-item>`;
            newQuestionBtn.scrollIntoView({ behavior: "smooth", block: "center" });
        })
    }
}

window.customElements.define('preview-column', PreviewColumn)