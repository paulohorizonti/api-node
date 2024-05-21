import conexao from '../database/conexao.js'
class SelecaoRepository{
    //CRUD
    create(selecao){
        const sql = "INSERT INTO selecoes SET ?;"
        return new Promise((resolv, reject)=>{
            conexao.query(sql, selecao,  (erro, resultado)=>{
                if(erro) return reject('NÃO FOI POSSIVEL CADASTRAR')
                const row = JSON.parse(JSON.stringify(resultado))
                return resolv(row)
            })
        })
    }

    findAll(){
        const sql = "SELECT * FROM selecoes;"
        return new Promise((resolv, reject)=>{
            conexao.query(sql, (erro, resultado)=>{
                if(erro) return reject('NÃO FOI POSSIVEL LOCALIZAR')
                const row = JSON.parse(JSON.stringify(resultado))
                return resolv(row)
            })
        })
    }
    findById(id){
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        return new Promise((resolv, reject)=>{
            conexao.query(sql, id, (erro, resultado)=>{
                if(erro) return reject('NÃO FOI POSSIVEL LOCALIZAR')
                const row = JSON.parse(JSON.stringify(resultado))
                return resolv(row)
            })
        })
    }
    update(selecao, id){
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return new Promise((resolv, reject)=>{
            conexao.query(sql, [selecao, id], (erro, resultado)=>{
                if(erro) return reject('NÃO FOI POSSIVEL ATUALIZAR')
                const row = JSON.parse(JSON.stringify(resultado))
                return resolv(row)
            })
        })
    }
    delete(id){
        console.log("aqui chegou ",id)
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return new Promise((resolv, reject)=>{
            conexao.query(sql, id, (erro, resultado)=>{
                if(erro) return reject('NÃO FOI POSSIVEL DELETAR')
                const row = JSON.parse(JSON.stringify(resultado))
                return resolv(row)
            })
        })
    }
}

export default new SelecaoRepository()