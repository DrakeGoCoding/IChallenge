import './screen/homeScreen.js'
import './component/homeScreen/homeHeader.js'
import './component/homeScreen/createPlusBtn.js'
import './component/homeScreen/quizInfoList.js'
import './component/homeScreen/quizInfoItem.js'

import './screen/quizCreator.js'
import './component/quizCreator/creatorHeader.js'
import './component/quizCreator/previewColumn.js'
import './component/quizCreator/previewItem.js'
import './component/quizCreator/addQuestionBtn.js'
import './component/quizCreator/quizInput.js'

import './screen/quizDisplay.js'
import './component/quizDisplay/quizHeader.js'
import './component/quizDisplay/quizContainer.js'

import './screen/quizRecords.js'
import './component/quizDisplay/recordContainer.js'

import './screen/quizStarter.js'
import './screen/login.js'
import './screen/signUp.js'
import './component/inputWrapper.js'
import './component/quizDisplay/starterContainer.js'
import './screen/homePage.js'
import "./test.js"

export function redirect(screenName) {
    if (screenName === 'home-screen') {
        document.getElementById('container').innerHTML =`
        <home-screen></home-screen>
        `
    } else if (screenName == 'homepage-screen') {
        document.getElementById('container').innerHTML = `
        <homepage-screen></homepage-screen>
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

redirect('homepage-screen')
