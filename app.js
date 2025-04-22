import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

const usuarios = [
  { id: 1, nome: "João", email: "joao@email.com" },
  { id: 2, nome: "Ana", email: "ana@email.com" },
];

// Rota inicio
app.get("/", (req, res) => {
  res.send("Bem vindo a minha API");
});

// Rota cria usuario
app.post("/criarUsuario", (req, res) => {
  const { nome, email } = req.body;

  // Adicionar o usuario no banco de dados fake(lista)
  const novoUsuario = {
    id: usuarios[usuarios.length - 1].id + 1,
    nome: nome,
    email: email,
  };
  usuarios.push(novoUsuario);

  res.status(201).send(usuarios)
});

app.put("/usuario/:id", (req, res) => {
  const { id } = req.params;
  const { novoNome, novoEmail } = req.body;

  const indice = usuarios.findIndex((usuario) => {
    return usuario.id == id;
  });
  usuarios[indice].nome = novoNome;
  usuarios[indice].email = novoEmail;

  res.send(usuarios);
});

// Deletar usuario
app.delete("/usuario/:id", (req, res) => {
  const { id } = req.params;

  const index = usuarios.findIndex((usuario) => {
    return usuario.id === id;
  });

  if (index === -1) {
    res.send("Usuario nao encontrado!");
  } else {
    usuarios.splice(index, 1);
    res.send(usuarios);
  }

  usuarios.splice(index, 1);

  res.json()

});
app.get("/usuarios",(req, res)=>{
  res.json(usuarios);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});