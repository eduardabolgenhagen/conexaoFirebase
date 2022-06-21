const { initializeApp } = require('firebase/app');
const { getFirestore, collection, doc, setDoc, addDoc } = require('firebase/firestore/lite');

const firebaseConfig = {
    apiKey: "AIzaSyDFkiQJcGI2omdv7LEbAE9fPLe4-XhOdwo",
    authDomain: "first-database-access-firebase.firebaseapp.com",
    projectId: "first-database-access-firebase",
    storageBucket: "first-database-access-firebase.appspot.com",
    messagingSenderId: "451994052578",
    appId: "1:451994052578:web:fa4fb702ac7fbdc0233bbb",
    measurementId: "G-PY39H8YX90"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

async function salvar(nomeTabela, id, dado) {
    if (id) {
        const referenceEntity = await setDoc(doc(db, nomeTabela, id), dado);
        const savedData = {
            ...dado,
            id: id
        }
        return savedData

    } else {
        const referenceEntity = await addDoc(collection(db, nomeTabela), dado);
        const savedData = {
            ...dado,
            id: referenceEntity.id
        }
        return savedData;
    }
}

module.exports = {
    salvar
}