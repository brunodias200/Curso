exports.paginaInicial = (req, res)=>{
    res.send(`
    <form action="/" method="post">
        Nome do cliente <input type="text" name="nome">
        <button>Enviar</button>
    </form>
    `); // envia informação para o html
};

exports.trataPost = (req, res)=>{
    let nome = req.body.nome;
    res.send(`Olá ${nome}`)
}