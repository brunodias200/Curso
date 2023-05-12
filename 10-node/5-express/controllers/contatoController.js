
exports.contato = (req, res)=>{
    queryStrings = req.query.q
    urlParamsStrings = req.params.parametro1
    res.send(`
        contato<br>
        ${queryStrings}<br>
        ${urlParamsStrings}
    `); // envia informação para o html
};
