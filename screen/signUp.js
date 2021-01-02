import { redirect } from "../index.js"

const style =`
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
    background-color: #171718;
    font-family: JetBrains Mono, monospace;
}
.register-container{
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
#submit:active {
    box-shadow: none;
    transform: translateY(5px);
    transition: .2s;
}
#signup-form:focus ~ label{
    top: -110px;
    left: 0;
    color: var(--clr-dark-red);
    font-size: 25px;
    font-weight: bold;

}
#signup-form:focus{
    border-bottom: 2px solid var(--clr-dark-red);
}
a{
    color: #fefdff;
}

`
class SignUp extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow ({mode: 'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML=`
        <style>${style}</style>
        <div class="register-container">
        <form id="signup-form">
        <img src="Logo.png" class="logo">
            <input-wrapper id="first-name" type="text" placeholder="First name"></input-wrapper>
            <input-wrapper id="last-name" type="text" placeholder="Last name"></input-wrapper>
            <input-wrapper id="email" type="text" placeholder="Email">Email</input-wrapper>
            <input-wrapper id="password" type="password" placeholder="Password"></input-wrapper>
            <input-wrapper id="confirm-password" type="password" placeholder="Confirm password"></input-wrapper>
            <button type="submit" id="submit">Register</button>
            <br></br>
            <a id="redirect">Already have an account ? Log in </a>

        </form>
     </div>
        `
        const signUpForm = this._shadowRoot.getElementById('signup-form')
        signUpForm.addEventListener('submit', async (e) => {
            e.preventDefault()

            const firstName = this._shadowRoot.getElementById('first-name').value
            const lastName = this._shadowRoot.getElementById('last-name').value
            const email = this._shadowRoot.getElementById('email').value
            const password = this._shadowRoot.getElementById('password').value
            const confirmPassword = this._shadowRoot.getElementById('confirm-password').value
            let isValid = true
            if (
                firstName.trim() === ''
            ) {
                isValid = false
                this.setError('first-name', 'Please input first name')
            }
            if (
                lastName.trim() === ''
            ) {
                isValid = false
                this.setError('last-name', 'Please input last name')
            }
            if (
                email.trim() === ''
            ) {
                isValid = false
                this.setError('email', 'Please input email')
            }
            if (
                password.trim() === ''
            ) {
                isValid = false
                this.setError('password', 'Please input Password')
            }
            if (password !== confirmPassword) {
                this.setError('confirm-password', "Password didn't match")
            }
            if (!isValid) {
                return
            }
            const user = {
                fullName: `${firstName} ${lastName}`,
                email: `${email}`,
                password: `${password}`
            }

            const check = await this.checkEmailExist(email)
            if (check) {
                alert('Email exist, try another')
            } else {
                firebase.firestore().collection('users').add(user)
                alert ("Register successfully")
                redirect('login')
            }
            
        })
        this._shadowRoot.getElementById('redirect').addEventListener('click', () => {
            redirect('login-screen')
        })
    }
    setError(id, message) {
        this._shadowRoot.getElementById(id).setAttribute('error', message)
    }
    async checkEmailExist(email) {
        const res = await firebase.firestore().collection('Accounts').where('email', '==', email).get()
        return !res.empty
    }
}
window.customElements.define('signup-screen', SignUp)