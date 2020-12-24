import Account from "./model/Account.js";
import Answer from "./model/Answer.js";
import Quiz from "./model/Quiz.js";
import QuizCollection from "./model/QuizCollection.js";
import QuizSet from "./model/QuizSet.js";

let acc = new Account("acc", "123456");

console.log(acc);

let quiz1 = new Quiz("1 + 1 = ?");
quiz1.addAnswer(new Answer("0", false));
quiz1.addAnswer(new Answer("1", false));
quiz1.addAnswer(new Answer("2", true));
quiz1.addAnswer(new Answer("3", false));

let quiz2 = new Quiz("2 x 2 = ?");
quiz2.addAnswer(new Answer("2", false));
quiz2.addAnswer(new Answer("4", true));
quiz2.addAnswer(new Answer("6", false));
quiz2.addAnswer(new Answer("8", false));

let quizSet = new QuizSet("New QuizSet");
quizSet.addQuiz(quiz1);
quizSet.addQuiz(quiz2);

let quizCollection = new QuizCollection(acc.userName);
quizCollection.addQuizSet(quizSet);

console.log(quizCollection.getQuizSetList());