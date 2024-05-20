import app from './src/app.js'
import conexao from './infra/conexao.js'

const PORT = 3000 //porta
//Fazer a conexão
conexao.connect((erro)=>{
if(erro){
    console.log('CONEXÃO FALHOU: ',erro)
}else{
    console.log('CONEXÃO ESTABELECIDADA')
    //Escultar a porta
    app.listen(PORT, ()=>{
    console.log(`SERVIDOR RODANDO NO ENDEREÇO http://localhost:${PORT}`)
})
}

})


