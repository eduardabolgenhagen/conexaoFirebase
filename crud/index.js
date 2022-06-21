const { initializeApp } = require('firebase/app');
const {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    query,
    where,
    getDocs,
    getDoc,
    deleteDoc
} = require('firebase/firestore/lite');

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

async function get(nomeTabela) {
    const tabelaRef = collection(db, nomeTabela);

    const q = query(tabelaRef);

    const querySnapshot = await getDocs(q);

    const lista = [];


    querySnapshot.forEach((doc) => {
        const data = {
            ...doc.data(),
            id: doc.id
        }
        lista.push(data);
    })
    return lista;
}

async function getById(nomeTabela, id){
    const docRef = doc(db, nomeTabela, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        return docSnap.data();
      } else {
        return new Erros("Not foud!");
      }
}

async function remove(){
    const dado = await deleteDoc(doc(db, nomeTabela, id));
    return {
        message
    }
}

module.exports = {
    salvar,
    get,
    getById
}

