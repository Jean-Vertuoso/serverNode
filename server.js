const express = require("express");
const cors = require("cors");
const app = express();

const porta = 3000;

app.use(function(req, resp, next){
    resp.header("Access-Control-Allow-Origin", "*")

    app.use(cors())
    next()
})

app.listen(porta, function () {
    console.log(`Servidor rodando na porta ${porta}`);
})

app.get("/users", async function (req, resp) {
    
    resp.json(await getUsers())

})

app.get("/user/:userId", async function (req, resp) {

    let userId = req.params.userId;
    var user = await getUsers(userId);

    if ((userId !== 'XPTO-02') && (userId !== 'XPTO-07') && (userId !== 'XPTO-09') && (userId !== 'XPTO-12')){
        user = {erro: 'usuário inválido'}
    } else {
        user;
    }
    
    resp.json(user)

})

async function getUsers(user){

    const usuarios = [{userId: 'XPTO-07', password: 'Trocar@007', tipo: 'admin'}, 
                      {userId: 'XPTO-09', password: 'Trocar@009', tipo: 'dev'},
                      {userId: 'XPTO-12', password: 'Trocar@012', tipo: 'dba'}, 
                      {userId: 'XPTO-02', password: 'Trocar@002', tipo: 'dev'}]; 

    if (user === usuarios[0].userId){
        return usuarios[0];
        
        } else if (user === usuarios[1].userId){
            return usuarios[1];

            } else if (user === usuarios[2].userId){
                return usuarios[2];

                } else if (user === usuarios[3].userId){
                    return usuarios[3];

                    } else {
                        return usuarios;
                    }
}
