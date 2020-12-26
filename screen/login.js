import { redirect } from '../index.js'
import { getDataFromDocs, saveToLocalStorage } from '../utils.js'
class LoginScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow ({mode: 'open'})
    }
    setError(id, message) {
        this._shadowRoot.getElementById(id).setAttribute('error', message)}

    connectedCallback(){
        this._shadowRoot.innerHTML=`
        <div class="login-container">
            <form id="login-form">
                <input-wrapper id="email" type="text" placeholder="Email">Email</input-wrapper>
                <input-wrapper id="password" type="password" placeholder="Password"></input-wrapper>
                <button type="submit">Log in</button>
                <br></br>
                <a id="redirect">Don't have an account ? Register </a>
            </form>
        </div> 
        `
        const loginForm = this._shadowRoot.getElementById('login-form')
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault()
            const email = this._shadowRoot.getElementById('email').value
            const password = this._shadowRoot.getElementById('password').value
            let isValid = true

            if (email.trim === ''){
                isValid = false
                this.setError('email', 'Please input email')
            }
            if (password.trim ===''){
                isValid = false
                this.setError('password', 'Please input password')
            }
            if (!isValid){
                return
            }
            const user = await firebase.firestore()
            .collection('Accounts')
            .where('email', '==', email)
            .where('password', '==', password)
            .get()
            if (user.empty) {
                alert('Email or password is wrong, try again')
            } else {
                saveToLocalStorage('currentUser', getDataFromDocs(user)[0])
                redirect('home-screen')
            }
        })
    }
} 
window.customElements.define('login-screen', LoginScreen)