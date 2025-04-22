import express from "express"
const router = express.router();
const fornecedores = [
    {id: 1, nome: "extraprint"},
    {id: 2, nome: "PMenoslab"},
];
router.get("/", (req,res)=> {
    res.status(200).json(fornecedores);
})
export default router ; 
