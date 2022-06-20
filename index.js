const express = require("express"); //primeiro importar bibliotecas
const router = require("./router"); //importar arquivos internos da aplicação
const app = express(); //começar a colocar parte lógica

app.use(express.json());
app.use("/api", router);

app.listen(8080, ()=>{
    console.log("app listen on http://localhost:8080")
});