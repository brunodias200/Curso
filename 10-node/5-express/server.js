const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended:true}));
app.use(routes);
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


// app.get('/teste/:id_usuario?', (req, res)=>{
//     console.log(req.params);// params pega o parametro, nesse caso o id_usuario
//     console.log(req.query);// params pega os query string da url ?nome=bruno&...
//     res.send(`id usuario ${req.params.id_usuario}`);

// })

port = 3000
app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
});