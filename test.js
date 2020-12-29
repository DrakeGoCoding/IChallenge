import Account from "./model/Account.js";
import Answer from "./model/Answer.js";
import Quiz from "./model/Quiz.js";
import QuizSet from "./model/QuizSet.js";
import { getAccountDocByUserName } from "./utils.js";

// on registration
const admin = new Account("admin", "admin");

// to upload new account to database
// admin.pushToFireBase()

// on login
getAccountDocByUserName("admin").then(doc => {
    // ...
    // check password here before redirecting

    // on redirecting
    // use this static method "parseDocument()" to parse account document on database back to Account object
    // const currentUser = Account.parseDocument(doc);
})

// // on creating a new Quiz Set
// const quizSet = new QuizSet("Math", "Here is a description");

// // on creating a new Quiz
// const quiz1 = new Quiz("1 + 1 = ?");

// // on adding an answer
// quiz1.addAnswer(new Answer("0", false));
// quiz1.addAnswer(new Answer("1", false));
// quiz1.addAnswer(new Answer("2", true));
// quiz1.addAnswer(new Answer("3", false));
// // similarly
// const quiz2 = new Quiz("2 x 2 = ?");
// quiz2.addAnswer(new Answer("2", false));
// quiz2.addAnswer(new Answer("4", true));
// quiz2.addAnswer(new Answer("6", false));
// quiz2.addAnswer(new Answer("8", false));

// // after finishing quizzes creation, add created quizzes to quizSet
// quizSet.addQuiz(quiz1);
// quizSet.addQuiz(quiz2);

// // after finishing quizSet creation, add created quizSet to account
// // "addQuizSet()" method will also update database automatically
// beebee.addQuizSet(quizSet);


// // ---------------------------------
// // ---------------------------------
// // On user finishing playing quizzes
// // ---------------------------------
// // ---------------------------------


// // in order to add new high score to quizSet
// // similaryly this "addNewRecord" will also update database automatically 
// // const userID = ...?
// // const score = ...?
// quizSet.addNewRecord(userID, score)



