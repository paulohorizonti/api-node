import mysql from 'mysql'

const conexao = mysql.createConnection({
    //parametros
    host:'192.168.11.145',
    port: '3306',
    user:'admin',
    password:'@Ctrl2024',
    database:'DB-COPA'
})


export default conexao