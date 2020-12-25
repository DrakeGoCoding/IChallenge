import './screens/home.js'
import './components/homepage/homeHeader.js'
import './components/homepage/createPlusBtn.js'
import './components/homepage/quizInfoList.js'
import './components/homepage/quizInfoItem.js'

import './screens/quizCreator.js'
import './components/quizCreator/creatorHeader.js'
import './components/quizCreator/previewColumn.js'
import './components/quizCreator/previewItem.js'
import './components/quizCreator/addQuestionBtn.js'
import './components/quizCreator/quizInput.js'

import './screens/quizDisplay.js'
import './components/quizDisplay/quizHeader.js'
import './components/quizDisplay/quizContainer.js'

import './screens/quizRecords.js'
import './components/quizRecord/recordContainer.js'

//enable/ disable the comments for displaying the screens



// document.getElementById('container').innerHTML=`
//     <home-screen></home-screen>
// `

document.getElementById('container').innerHTML=`
    <quiz-creator></quiz-creator>
`

// document.getElementById('container').innerHTML=`
//     <quiz-display></quiz-display>
// `

// document.getElementById('container').innerHTML=`
//     <quiz-record></quiz-record>
// `