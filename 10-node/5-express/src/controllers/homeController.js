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
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};

class Home {

}
module.exports = Home;