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
        for (const quizSetRef of quizRefCollection){
            const quizSetDoc = await quizSetRef.get();
            const data = getDataFromDoc(quizSetDoc);
            account.quizCollection.push(await QuizSet.parseDocument(data));
        }
        return account;
    }
}