import express from "express"
const app = express()
const port = 3000

const usuarios = [
  {id:1,nome:'joao', email:'joao@hotmail.com'},
  {id:2,nome:'maria', email:'maria@hotmail.com'}
]

app.get('/usuario', (req, res) => {
  res.send(usuarios)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})