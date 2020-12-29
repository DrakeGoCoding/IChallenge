import { addAccountDocument, getDataFromDoc } from "../utils.js";
import QuizSet from "./QuizSet.js"

export default class Account {
    id;
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
        const db = firebase.firestore();
        quizSet.pushToFireBase().then(quizId => {
            db.collection('Accounts').doc(this.id).update({
                quizCollection: firebase.firestore.FieldValue.arrayUnion(db.doc('QuizSets/' + quizId))
            })
        });
    }

    async pushToFireBase() {
        const res = await addAccountDocument(this);
        return res.id;
    }

    static parseDocument(accountDocument) {
        const account = new Account(accountDocument.userName, accountDocument.password);
        account.id = accountDocument.id;
        accountDocument.quizCollection.forEach(quizSetRef => {
            quizSetRef.get().then(doc => {
                account.quizCollection.push(QuizSet.parseDocument(getDataFromDoc(doc)));
            })
        })
        return account;
    }
}