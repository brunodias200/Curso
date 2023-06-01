const { async } = require('regenerator-runtime');
const Login = require('../models/LoginModel');
const { render } = require('ejs');

exports.index = (req, res) => {
  console.log(req.session.user)
  res.render('login')
  return;
};

exports.register = async (req, res) => {
  try {
    const login = new Login(req.body);

    await login.register()
  
    if(login.errors.length >0){
      req.flash('errors', login.errors)
      req.session.save(function(){
        return res.redirect('back')
      })
      return
    }
    return res.send(login.user)
  
  }catch(e){
    console.log(e)
    return res.render('404')
  }
  
};

exports.login = async (req, res) => {
  try {
    const login = new Login(req.body);

    await login.login()
  
    if(login.errors.length >0){
      req.flash('errors', login.errors)
      req.session.save(function(){
        return res.redirect('back')
      })
      return
    }

    if(!login.user){
      req.flash('errors', login.errors)
      req.session.save(function(){
        return res.redirect('back')
      })
      return
    }

    req.flash('success', 'logado com sucesso')
    req.session.user = login.user
    req.session.save(function(){
      return res.redirect('back')
    })

  }catch(e){
    console.log(e)
    return res.render('404')
  }
  
};
