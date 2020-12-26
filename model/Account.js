import { addAccountDocument, getDataFromDoc } from "../utils.js";
import QuizSet from "./QuizSet.js"

export default class Account {
    userName;
    password;
    quizCollection;

    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
        this.quizCollection = [];
    }

    /**
     * 
     * @param {QuizSet} quizSet 
     */
    addQuizSet(quizSet) {
        this.quizCollection.push(quizSet);
        // quizSet.pushToFireBase();
    }

    pushToFireBase() {
        addAccountDocument(this);
    }

    static parseDocument(accountDocument) {
        const account = new Account(accountDocument.userName, accountDocument.password);
        accountDocument.quizCollection.forEach(quizSetRef => {
            quizSetRef.get().then(doc => {
                account.quizCollection.push(QuizSet.parseDocument(getDataFromDoc(doc)));
            })
        })
        return account;
    }
}