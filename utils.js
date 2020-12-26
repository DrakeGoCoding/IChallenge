export function getDataFromDoc(doc) {
    const data = doc.data()
    data.id = doc.id
    return data
}

export function getDataFromDocs(data) {
    // const docs = data.docs
    // const listRes = []
    // for (const item of docs) {
    //     listRes.push(getDataFromDoc(item))
    // }    
    // return listRes
    return data.docs.map(getDataFromDoc)
}

export function saveToLocalStorage(name, value){
    localStorage.setItem(name, JSON.stringify(value))
}
export function getItemFromLocalStorage(key){
    return JSON.parse(localStorage.getItem(key))
}
// @param {*} dateStr
// 14/12/2020 21:20
export function convertDate(dateStr) {
    const date = new Date (dateStr)
    const day = validateNiceNumber(date.getDate())
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hour = validateNiceNumber(date.getHours())
    const minutes = validateNiceNumber(date.getMinutes()) 
    return `${day}/${month}/${year} ${hour}:${minutes}`
}
function validateNiceNumber(number){
    return (number < 10 ) ? ('0' + number) : (number)
}
export async function uploadFileToStorage (file){
    const fileName = file.name
    const filePath = `file/${fileName}`
    const ref = firebase.storage().ref().child(filePath)
    await ref.put(files)
    return getFileurl(ref)
}
function getFileurl(fileRef){
    return `https://firebasestorage.googleapis.com/v0/b/${fileRef.bucket}/o/${encodeURIComponent(fileRef.fullPath)}?alt=media`
}