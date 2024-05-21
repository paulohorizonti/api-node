import mysql from 'mysql'

const conexao = mysql.createConnection({
    //parametros
    host:'192.168.11.145',
    port: '3306',
    user:'admin',
    password:'@Ctrl2024',
    database:'DB-COPA'
})

conexao.connect()
/**
 * Executa o codigo sql com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string=id / [selecao, id]} valores a serem passados ao sql
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns objeto da Promise
 */
export const consulta = (sql, valores='',mensagemReject)=>{
    return new Promise((resolv, reject)=>{
        conexao.query(sql, valores,  (erro, resultado)=>{
            if(erro) return reject(mensagemReject)
            const row = JSON.parse(JSON.stringify(resultado))
            return resolv(row)
        })
    })
}

export default conexao