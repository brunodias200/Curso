exports.middlewareGlobal = (req, res, next) => {
  if (req.body.cliente) {

    console.log();

    console.log(`Vi que você postou ${req.body.cliente}`);

    console.log();

  }
  next();
};

exports.outroMiddleware = (req, res, next) => {
  res.locals.umaVariavelLocal = 'este é o valor da variavel local'
  next();
};
