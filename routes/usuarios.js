import express from 'express'
const router = express.router()
// Banco de dados Fake (em memória)
const usuarios = [
    {id: 1, nome: 'João', email:"joao@email.com"},
    {id: 2, nome: 'Ana', email:"ana@email.com"}
]

//Rota cria usuário
router.post("/criarUsuario", (req, res) => {
    const { nome, email } = req.body;

    const novoUsuario = {
        id: usuarios[usuarios.length-1].id + 1,
        nome: nome,
        email: email
    }

    usuarios.push(novoUsuario)

    res.status(201).send(usuarios)
})

router.put("/i/:id", (req, res)=>{
    const { id } = req.params
    const {novoNome, novoEmail} = req.body

    const indice = usuarios.findIndex((usuario)=>{
        return usuario.id == id
    })

    //if indice === -1, dê como resposta da requisição 
    // o status 404
    if(indice === -1){
        return res.status(404).json(
            {mensagem: "Usuário não encontrado!"})
    }

    usuarios[indice].nome = novoNome
    usuarios[indice].email = novoEmail

    res.send(usuarios)

})

router.get("/usuarios", (req, res) => {

    // res.json(usuarios)
    res.status(200).json(usuarios)

})



router.delete("/usuarios/:id", (req, res)=>{
    //const id = req.params.id
    const { id } = req.params

    const index = usuarios.findIndex((usuario)=>{
        return usuario.id == parseInt(id)
    })

    if (index === -1) {
        res.status(404).json(
            {mensagem: "Usuário não encontrado!"})
    }else{
        usuarios.splice(index, 1)
        res.send(usuarios)
    }

})
export default router