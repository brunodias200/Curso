exports.paginaInicial = (req, res)=>{
    res.render('index'); // envia informação para o html
};

exports.trataPost = (req, res)=>{
    let nome = req.body.nome;
    res.send(`Olá ${nome}`)
}