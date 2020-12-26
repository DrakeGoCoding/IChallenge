const style = `
.record-container{
    margin: auto;
    width: 550px;
    background-color: #252525;
    border-radius: 20px;
    padding: 40px;
    box-sizing: border-box;
    font-family: 'JetBrains Mono', monospace;
    color: #fff;
    font-size: 14px;
}
.quiz-name{
    font-size: 30px;
    text-align: center;
    margin-bottom: 15px;
}
.record-table{
    margin: 0 0 20px;
    height: 300px;
    width: 100%;
    background-color: #333;
    padding: 0 15px;
    box-sizing: border-box;
    border-radius: 10px;
    overflow-y: auto;
}
.record-table table{
    border: none;
    table-layout: fixed;
    min-width: 100%;
    height: 20px;
    border-spacing: 0;
}
.record-table table th{
    background-color: #333;
    position: sticky;
    top: 0;
    height: 40px;
    
}
.record-table table tr th, .record-table table tr td{
    border-bottom: 1px solid #ccc;
    text-align: left;
    padding: 10px 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 85px;
}
.record-table table tr:hover{
    background-color: #434343;
}
.btn-row{
    display: flex;
    justify-content: flex-end;

}
.quiz-btn, .home-btn{
    color: #000;
    width: fit-content;
    background-color: #fff;
    text-align: center;
    line-height: 40px;
    border-radius: 10px;
    padding: 0 10px;
    margin-left: 25px;
}
.quiz-btn:hover, .home-btn:hover{
    box-shadow: 4px 4px 0 #69C9D0,-4px -4px 0 #EE1D52;
    cursor: pointer;
}
@media only screen and (max-width: 768px){
    .record-container{
        width: 400px;
    }
}

@media only screen and (max-width: 400px){
    .record-container{
        width: 90vw;
        font-size: 12px;
        padding: 20px;
    }
    .quiz-name{
        font-size: 18px;
    }
}
`

class RecordContainer extends HTMLElement{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowDom.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <style>
        ${style}
        </style>
        <div class="record-container">
            <div class="quiz-name">Name of the Quiz</div>
            <div class="record-table">
                <table>
                    <tr>
                      <th>Player</th>
                      <th>Score</th>
                      <th>Time achieved</th>
                    </tr>
                    <tr>
                      <td>Moomin</td>
                      <td>5/5</td>
                      <td>10:05 23/11/2020</td>
                    </tr>
                    
                    <tr>
                        <td>Babo</td>
                        <td>3/5</td>
                        <td>9:25 22/11/2020</td>
                    </tr>
                    <tr>
                        <td>Babooooooooooooooooooo</td>
                        <td>3/5</td>
                        <td>9:25 22/11/2020</td>
                    </tr>
                    
                  </table>
            </div>
            <div class="btn-row">
                <div class="quiz-btn"> <i class="fa fa-repeat"></i> Try Again</div>
                <div class="home-btn"> <i class="fa fa-home"></i> Go back Home</div>
            </div>
            

        </div>
        `
    }
}

window.customElements.define('record-container', RecordContainer)