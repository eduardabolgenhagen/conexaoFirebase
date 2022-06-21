const crud = require("./crud");

// async function salvarDado(){
//     const savedData = await crud.salvar("pessoas", undefined, { nome: "Eduarda", sobrenome: "Bolgenhagen", idade: 18 })
//     console.log(savedData);
// }

// salvarDado();

async function buscardados(){
    const dados = await crud.get("pessoas");
    console.log(dados);
}

async function buscarDadosByID(){
    const dados = await crud.getById("pessoas", "")
}

buscardados();
