import {consulta} from '../database/conexao.js'
class SelecaoRepository{
    //CRUD
    create(selecao){
        const sql = "INSERT INTO selecoes SET ?;"
        return consulta(sql, selecao, 'NÃO FOI POSSIVEL CADASTRAR')
    }

    findAll(){
        const sql = "SELECT * FROM selecoes;"
        return consulta(sql, 'NÃO FOI POSSIVEL ENCONTRAR')
    }
    findById(id){
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        return consulta(sql,id, 'NÃO FOI POSSIVEL ENCONTRAR')
    }
    update(selecao, id){
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return consulta(sql,[selecao, id], 'NÃO FOI POSSIVEL ATUALIZAR')
    }
    delete(id){
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return consulta(sql,id, 'NÃO FOI POSSIVEL APAGAR')
    }
}

export default new SelecaoRepository()