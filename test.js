import Account from "./model/Account.js";
import Answer from "./model/Answer.js";
import Quiz from "./model/Quiz.js";
import QuizSet from "./model/QuizSet.js";
import { getAccountDocByUserName, getQuizDocByID } from "./utils.js";

const beebee = new Account("beebee", "123456");
// beebee.pushToFireBase().then(id => beebee.id = id);

const quizSet = new QuizSet("Math 1", "Here is a description");

const quiz1 = new Quiz("1 + 1 = ?");
quiz1.addAnswer(new Answer("0", false));
quiz1.addAnswer(new Answer("1", false));
quiz1.addAnswer(new Answer("2", true));
quiz1.addAnswer(new Answer("3", false));

const quiz2 = new Quiz("2 x 2 = ?");
quiz2.addAnswer(new Answer("2", false));
quiz2.addAnswer(new Answer("4", true));
quiz2.addAnswer(new Answer("6", false));
quiz2.addAnswer(new Answer("8", false));

quizSet.addQuiz(quiz1);
quizSet.addQuiz(quiz2);

// beebee.addQuizSet(quizSet);

getAccountDocByUserName('beebee').then(accDoc => {
    Account.parseDocument(accDoc).then(account => {
        console.log(account);
        const quizCollection = account.quizCollection;
        const quizSet = quizCollection[0];
        quizSet.addNewRecord("1234", 13);
    })
});

