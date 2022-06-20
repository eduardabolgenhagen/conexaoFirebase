const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

initializeApp({
    credential: applicationDefault()
});

const db = getFirestore();

async function salvar(nomeTabela, id, dado) {
    if (id) {
        const referenceEntity = await db.collection(nomeTabela).doc(id).set(dado);
        const savedData = {
            ...dado,
            id: id
        }
        return savedData

    } else {
        const referenceEntity = await db.collection(nomeTabela).add(dado);
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