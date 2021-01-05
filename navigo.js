var root = null;
var useHash = true; // Defaults to: false
var hash = '#!'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);

router
  .on({
    'home-screen': function () {
      redirect('home-screen')
    },
    '/quizset/:id': function () {
      redirect('quiz-starter')
    },
    'story': async function () {
      const check = await checkAuthen()
      if (check) {
        redirect('story')
      } else {
        router.navigate('login')
      }
    },
    '*': function () {
      router.navigate('home-screen')
    }
  })
  .resolve();

  function redirect(screenName) {
    if (screenName === 'home-screen') {
        document.getElementById('container').innerHTML = `
        <home-screen></home-screen>
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
    }
}

// async function checkAuthen() {
//   const user = getItemLocalStorage('currentUser')
//   if (user) {
//     const res = await firebase.firestore()
//     .collection('users')
//     .where('email', '==', user.email)
//     .where('password', '==', user.password)
//     .get()
//     if(res.empty) {
//       return false
//     } else {
//       return true
//     }
//   } else {
//     return false
//   }
// }

window.router = router