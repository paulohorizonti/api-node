//importar  o express
import express from 'express'

const app = express() //instancia

//Indicar para o express ler body com json
app.use(express.json())

//mock
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo:'G' },
    {id: 2, selecao: 'Suiça', grupo:'G' },
    {id: 3, selecao: 'Sérvia', grupo:'G' },
    {id: 4, selecao: 'Camarões', grupo:'G' }
    
]
//TO-DO - CONEXAO COM SERVIDOR

//serve para buscar as selecoes por id
function buscarSelecaoPorId(id){
    
    return selecoes.filter(selecao=>selecao.id == id)
}

//pegar a posição ou index do elemento no array, por id
function buscarIndexSelecao(id){
    return selecoes.findIndex(selecao=> selecao.id == id)
}
//criar rota padrao
app.get('/',(req, res)=>{
    res.send('OLÁ MUNDO')
   
})

app.get('/selecoes/:id', (req, res)=>{
    //pega os parametros e coloca na variavel index
    let parametro = req.params.id
    console.log('PARAMETRO PARASSADO PELA REQUISICAO : ',parametro)
    res.json(buscarSelecaoPorId(req.params.id))
});

//roda selecoes, devolve as selecoes do array
app.get('/selecoes',(req, res)=>{
    res.status(200).send(selecoes)
    
})

//requisições post, para enviar dados para o servidor
app.post('/selecoes', (req, res)=>{
    selecoes.push(req.body)
    res.status(201).send('SELECAO CADASTRADA COM SUCESSO')
});

app.delete('/selecoes/:id', (req,res)=>{
    let index = buscarIndexSelecao(req.params.id)
    selecoes.splice(index,1)
    res.send(`SELEÇÃO COM ID:  ${req.params.id},  EXCLUIDA COM SUCESSO`)
})

app.put('/selecoes/:id', (req,res)=>{
    let index = buscarIndexSelecao(req.params.id)

    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo   = req.body.grupo

    res.json(selecoes)
})

export default app