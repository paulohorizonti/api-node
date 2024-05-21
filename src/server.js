import app from './app.js'


const PORT = process.env.PORT || 3000 //porta


app.listen(PORT, ()=>{
    console.log(`SERVIDOR RODANDO NO ENDEREÇO http://localhost:${PORT}`)
})
