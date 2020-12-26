export function getDataFromDoc(doc) {
    const data = doc.data();
    data.id = doc.id;
    return data;
}

export function getDataFromDocs(docs) {
    return docs.map(getDataFromDoc);
}

export async function getAccountDocByUserName(userName){
    const res = await firebase.firestore().collection('Accounts').where('userName', '==', userName).get();
    const accounts = getDataFromDocs(res.docs);
    return accounts[0];
}

import Account from "./model/Account.js"

/**
 * 
 * @param {Account} account 
 */
export function addAccountDocument(account){
    const accountDoc = {
        userName: account.userName,
        password: CryptoJS.MD5(account.password).toString(CryptoJS.enc.Hex),
        quizCollection: []
    }
    const res = firebase.firestore().collection('Accounts').add(accountDoc);
    return res;
}

import QuizSet from "./model/QuizSet.js"

/**
 * 
 * @param {QuizSet} quizSet 
 */
export function addQuizSetDocument(quizSet){
    const quizSetDoc = {
        title: quizSet.title,
        description: quizSet.description,
        createdDate: quizSet.createdDate.toISOString(),
        highScoreList: [],
        quizList: []
    }
    const res = firebase.firestore().collection('QuizSets').add(quizSetDoc);
    return res;
}

import Quiz from "./model/Quiz.js"

/**
 * 
 * @param {Quiz} quiz 
 */
export function addQuizDocument(quiz){
    const quizAnswers = [];
    quiz.answers.forEach(answer => {
        quizAnswers.push({
            content: answer.content,
            isCorrect: answer.isCorrent
        })
    })
    const quizDoc = {
        content: quiz.content,
        answers: quizAnswers
    }
    const res = firebase.firestore().collection('Quizs').add(quizDoc);
    return res;
}