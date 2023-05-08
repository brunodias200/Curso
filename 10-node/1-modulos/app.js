const mod1 = require('./A/mod1');
const axios = require('axios');
const cachorro = require('./B/Ba/mod3');
const multiplicacao = require('./A/Ab/mod2');
const path = require('path')
console.log(path.resolve(
    __dirname, '..', '..'
))


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

console.log(__dirname)
console.log(__filename)