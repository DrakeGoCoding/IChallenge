import { getAccountDocByUserName } from './utils.js'

var root = null;
var useHash = true; // Defaults to: false
var hash = '#!'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);
import { getItemFromLocalStorage } from './utils.js'

router
    .on({
        'login-screen': function() {
            redirect('login-screen')
        },
        'signup-screen': function() {
            redirect('signup-screen')
        },
        'home-screen': async function() {
            const check = await checkAuthen()
            console.log(check);
            if (check) {
                redirect('home-screen')
            } else {
                router.navigate('login-screen')
            }
        },
        '*': function() {
            router.navigate('home-screen')
        },
        'homepage-screen': function() {
            redirect('homepage-screen')
        }


    })
    .resolve();

function redirect(screenName) {
    if (screenName === 'home-screen') {
        document.getElementById('container').innerHTML = `
        <home-screen></home-screen>
        `
    } else if (screenName === 'signup-screen') {
        document.getElementById('container').innerHTML = `
        <signUp-screen></signUp-screen>
        `
    } else if (screenName === 'login-screen') {
        document.getElementById('container').innerHTML = `
        <login-screen></login-screen>
        `
    } else if (screenName === 'quiz-creator') {
        document.getElementById('container').innerHTML = `
        <quiz-creator></quiz-creator>
        `
    } else if (screenName == 'quiz-starter') {
        document.getElementById('container').innerHTML = `
        <quiz-starter></quiz-starter>
        `
    } else if (screenName == 'quiz-display') {
        document.getElementById('container').innerHTML = `
        <quiz-display></quiz-display>
        `
    } else if (screenName == 'quiz-record') {
        document.getElementById('container').innerHTML = `
        <quiz-record></quiz-record>
        `
    } else if (screenName == 'homepage-screen') {
        document.getElementById('container').innerHTML = `
        <homepage-screen></homepage-screen>
        `
    }
}
async function checkAuthen() {
    const user = getItemFromLocalStorage('currentUser');

    if (user) {
        const res = await firebase.firestore()
            .collection('Accounts')
            .where('userName', '==', user.userName)
            .where('password', '==', user.password)
            .get()
        if (res.empty) return false;
        return true;
    }
    return false;
}

window.router = router