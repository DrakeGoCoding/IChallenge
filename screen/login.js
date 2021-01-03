// import { redirect } from '../index.js'
import Account from '../model/Account.js'
import { getAccountDocByUserName, getDataFromDocs, writeToLocalStorage } from '../utils.js'
const style = `
:root {
    --clr-dark-background: #171718;
    --clr-darker-background: #0d0d0e;
    --clr-dark-red: #c20440;
    --clr-dark-blue: #1fceab;
    --clr-dark-white: #fefdff;
    --clr-dark-grey: #575557;
}
* {
    margin: 0;
    padding: 0;
    background: #171718;
    font-family: JetBrains Mono, monospace;
}
.login-container{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: relative;
    padding: 5px;
}
#submit{
    width: 85%;
    padding: 10px 30px;
    cursor: pointer;
    display: block;
    margin: auto;
    background-color: #c20440;
    color: #1fceab;
    font-weight: bolder;
}
a{
    color: #fefdff;
}

    





`
class LoginScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow ({mode: 'open'})
    }
    setError(id, message) {
        this._shadowRoot.getElementById(id).setAttribute('error', message)
    }
    connectedCallback(){
        this._shadowRoot.innerHTML=`
        <style>${style}</style>
        <div class="login-container">
            <form id="login-form">
            <img src="Logo.png" class="logo">
                <input-wrapper id="userName" type="text" placeholder="User name">User name</input-wrapper>
                <input-wrapper id="password" type="password" placeholder="Password"></input-wrapper>
                <button type="submit" id="submit">Log in</button>
                <br></br>
                <a id="redirect">Don't have an account ? Register </a>
            </form>
        </div> 
        `
        const loginForm = this._shadowRoot.getElementById('login-form')
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault()
            const userName = this._shadowRoot.getElementById('userName').value
            const password = this._shadowRoot.getElementById('password').value
            let isValid = true

            if (userName.trim() === ''){
                isValid = false
                this.setError('userName', 'Please input your own user name')
            }
            if (password.trim() ===''){
                isValid = false
                this.setError('password', 'Please input password')
            }
            if (!isValid){
                return
            }
            // const user = await firebase.firestore()
            // .collection('Accounts')
            // .where('userName', '==', userName)
            // .where('password', '==', CryptoJS.MD5(password).toString())
            // .get()
            // if (user.empty) {
            //     alert('User name or password is wrong, try again')
            // } else {
            //     writeToLocalStorage('currentUser', getDataFromDocs(user)[0])
            //     redirect('home-screen')
            // }
            const accountDoc = await getAccountDocByUserName(userName)
            if(accountDoc){
                if(CryptoJS.MD5(password).toString(CryptoJS.enc.Hex) === accountDoc.password){
                    const account = await Account.parseDocument(accountDoc);
                    writeToLocalStorage('currentUser', account);
                    router.navigate('/home-screen')
                } else {
                    this.setError('password', `Oops, you've just entered a password from another dimension.`)
                }
                
            }
        
        })
        this._shadowRoot.getElementById('redirect').addEventListener('click', () => {
            router.navigate('/signup-screen')
        })
    }
} 
window.customElements.define('login-screen', LoginScreen)