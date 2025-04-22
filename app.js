import express from "express";
import usuariosRoutes from "./routes/usuarios.js";
import fornecedoresRoutes from "./routes/fornecedores.js";

const app = express();

//  ==== Permitir ler JSON no corpo da requisição ====
app.use(express.json());

// ==== Adiciona roteadores ====
app.use("/usuarios", usuariosRoutes);
app.use("/fornecedores", fornecedoresRoutes);

const port = 3000;

// ==== Rota início ====
app.get("/", (req, res) => {
  res.send("Bem vindo a minha API!");
});

// ==== Iniciar servidor ====
app.listen(port, () => {
  console.log(`App escutando na porta ${port}`);
});