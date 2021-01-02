import { addAccountDocument, getDataFromDoc } from "../utils.js";
import QuizSet from "./QuizSet.js"

export default class Account {
    id;
    userName;
    password;
    quizCollection;

    // create a new account object using userName and password
    // just leave the password plaintext form here, after pushing this account to database,
    // password will be encoded later
    /**
     * 
     * @param {String} userName 
     * @param {String} password 
     */
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
        this.quizCollection = [];
    }

    getReference() {
        return firebase.firestore().collection('Accounts').doc(this.id);
    }

    /**
     * 
     * @param {QuizSet} quizSet 
     */
    // add a new quizset to this account object and update database simultaneously
    addQuizSet(quizSet) {
        this.quizCollection.push(quizSet);
        const db = firebase.firestore();
        quizSet.pushToFireBase().then(quizId => {
            db.collection('Accounts').doc(this.id).update({
                quizCollection: firebase.firestore.FieldValue.arrayUnion(db.doc('QuizSets/' + quizId))
            })
        });
    }

    /**
     * 
     * @param {String} quizSetId 
     */
    // delete a quizset and all of its quizzes inside then update database simultaneously
    deleteQuizSet(quizSetId) {
        const index = this.quizCollection.findIndex(quizSet => quizSet.id === quizSetId);

        if (index !== -1) {
            this.quizCollection[index].deleteAllQuizzes();
            this.quizCollection.splice(index, 1);

            const db = firebase.firestore();
            db.collection('QuizSets').doc(quizSetId).delete();
            db.collection('Accounts').doc(this.id).update({
                quizCollection: firebase.firestore.FieldValue.arrayRemove(db.doc('QuizSets/' + quizSetId))
            })

            console.log(`QuizSet with id ${quizSetId} is deleted`);
        }
        else console.log(`QuizSet with id ${quizSetId} is unavailable`);
    }

    // push a new account to database
    async pushToFireBase() {
        const res = await addAccountDocument(this);
        return res.id;
    }

    // parse an account document and all of its attributes back to object
    static async parseDocument(accountDocument) {
        const account = new Account(accountDocument.userName, accountDocument.password);
        account.id = accountDocument.id;

        const quizRefCollection = accountDocument.quizCollection;
        for (const quizSetRef of quizRefCollection) {
            const quizSetDoc = await quizSetRef.get();
            const data = getDataFromDoc(quizSetDoc);
            account.quizCollection.push(await QuizSet.parseDocument(data));
        }
        return account;
    }
}