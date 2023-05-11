const express = require('express');
const app = express();

app.use(express.urlencoded({ extended:true}))

app.get('/', (req, res)=> {
    res.send(`
    <form action="/" method="post">
        Nome do cliente <input type="text" name="nome">
        <button>Enviar</button>
    </form>
    `); // envia informação para o html
});

app.post('/', (req, res)=>{
    console.log(req.body.nome);// body pega o post da requisição

    res.send(`form recebido ${req.body.nome}`);
    
    
})

app.get('/teste/:id_usuario?', (req, res)=>{
    console.log(req.params);// params pega o parametro, nesse caso o id_usuario
    console.log(req.query);// params pega os query string da url ?nome=bruno&...
    res.send(`id usuario ${req.params.id_usuario}`);

})

port = 3000
app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
});