import app from './src/app.js'


const PORT = 3000 //porta


app.listen(PORT, ()=>{
    console.log(`SERVIDOR RODANDO NO ENDEREÇO http://localhost:${PORT}`)
})
