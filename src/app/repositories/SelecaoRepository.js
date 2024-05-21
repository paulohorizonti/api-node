import conexao from '../database/conexao.js'
class SelecaoRepository{
    //CRUD
    create(){}

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
    update(){}
    delete(){}
}

export default new SelecaoRepository()