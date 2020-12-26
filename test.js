import Account from "./model/Account.js";
import Answer from "./model/Answer.js";
import Quiz from "./model/Quiz.js";
import QuizSet from "./model/QuizSet.js";
import { getAccountDocByUserName } from "./utils.js";

const beebee = new Account("beebee", "123456");
// beebee.pushToFireBase();

const quizSet = new QuizSet("Math 1", "Here is a description");

const quiz1 = new Quiz("1 + 1 = ?");
quiz1.addAnswer(new Answer("0", false));
quiz1.addAnswer(new Answer("1", false));
quiz1.addAnswer(new Answer("2", true));
quiz1.addAnswer(new Answer("3", false));

const quiz2 = new Quiz("2 x 2 = ?");
quiz2.addAnswer(new Answer("2"));
quiz2.addAnswer(new Answer("4"));
quiz2.addAnswer(new Answer("6"));
quiz2.addAnswer(new Answer("8"));

quizSet.addQuiz(quiz1);


quizSet.addQuiz(quiz2);


beebee.addQuizSet(quizSet);


getAccountDocByUserName("admin").then(accountDocument => {
    console.log(Account.parseDocument(accountDocument));
})
