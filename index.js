(async () => {
	
  const express = require('express')
  const app = express()
  const port = 3000
  const db = require("./db");

  app.use(express.static('public'));
  app.use('/static', express.static(__dirname + '/public'));
  
  // cria as rotas
  app.get('/', (req, res) => {
    //res.send('Hello World!')
    produtos = db.selectprodutos()
    
    produtos.then( (dadosProduto)=>{
      console.log(dadosProduto)
    })
    
    
    
    



    res.sendFile(__dirname + '/index.html'); 
  })     

  app.get('/ola', (req, res) => {
    res.send('estou na rota ola')
  })

  app.get('/cadastro', (req, res) => {
    res.send('estou na rota cadastro')
  })

  // abre o servidor
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`http://localhost:${port}/`)
  })
    
  // outra configurações
  })()
  














