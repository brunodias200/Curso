const mod1 = require('./mod1');
const axios = require('axios');
const cachorro = require('./mod3');
const multiplicacao = require('./mod2');


mod1.falaNome()
console.log(mod1.nome)

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json').then(
    pessoas => console.log(pessoas.data[0])

).catch(
    e => console.log(e)
)

/**/

console.log(multiplicacao(2, 4))

c1 = new cachorro('dogo')
c1.latir()