import conexao from '../database/conexao.js'
import SelecaoRepository from '../repositories/SelecaoRepository.js'
class SelecaoController{
    async index(req, res){
        const row = await SelecaoRepository.findAll()
        res.json(row)
       
    }
    show(req, res){
        const id = req.params.id
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        conexao.query(sql, id, (erro, retorno)=>{
            const linha = retorno[0]
            if(erro){
                console.log(erro)
                res.status(404).json({'erro':erro})
            }else{
                if(linha){
                    res.status(200).json(linha)
                }else{
                    res.status(404).json({'vazio':'Sem dados para o Id informado'})
                }
               
            }
        })
    }
    store(req, res){
        const selecao = req.body
        const sql = "INSERT INTO selecoes SET ?;"
        conexao.query(sql,selecao,(erro, resultado)=>{
             if(erro){
                 res.status(404).json({'erro':erro})
             }else{
                 res.status(201).json(resultado)
             }
        })
     }
    update(req,res){
        const id = req.params.id
        const selecao = req.body
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        conexao.query(sql,[selecao, id],(erro, resultado)=>{
            if(erro){
                res.status(400).json({'erro':erro})
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    delete(req,res){
        const id = req.params.id
        const sql = "DELETE FROM selecoes WHERE id=?;"
        conexao.query(sql, id, (erro, retorno)=>{
         
            if(erro){
                console.log(erro)
                res.status(404).json({'erro':erro})
            }else{
                res.status(200).json(retorno)
               
            }
        })
    
    }
}

//padrao singleton
export default new SelecaoController()