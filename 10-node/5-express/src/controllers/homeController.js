const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//   tituto:'jean trouxa',
//   descricao:'descricao teste2'
// }).then(
//   dados => console.log(dados)
// ).catch(
//   e => console.log(e)
// );

// HomeModel.find().then(
//   dados=>console.log(dados)
// ).catch(
//   e=>console.log(e)
// )

exports.paginaInicial = (req, res) => {
  res.render('index', {
    titulo: 'Titulo<span style="color:red;"> da pagina</span>',
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8]
  });
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
