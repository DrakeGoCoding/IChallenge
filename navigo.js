var root = null;
var useHash = true; // Defaults to: false
var hash = '#!'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);
router
  .on({
    'login': function () {
      redirect('/login-screen')
    },
    'signup': function () {
      redirect('/signup-screen')
    },
    '*': function () {
      redirect('login-screen')
    },
    
  })
  .resolve();
function redirect(screenName) {
    if (screenName === 'home-screen') {
        document.getElementById('container').innerHTML =`
        <home-screen></home-screen>
        `
    } else if (screenName === 'signup-screen'){
        document.getElementById('container').innerHTML =`
        <signUp-screen></signUp-screen>
        `
    }
     else if (screenName === 'login-screen'){
        document.getElementById('container').innerHTML =`
        <login-screen></login-screen>
        `
    }
     else if (screenName === 'quiz-creator') {
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
    }
}
window.router = router