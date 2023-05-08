function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min)+min);
}
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
            reject('BAD VALUE');
            return;
        }
        setTimeout(()=>{
            resolve(msg.toUpperCase() + ' - Passou');
            return;

        }, tempo);
    });
}


//---------------------------------------------------------------------------------------------------------------------------------------------------------
// METODOS ÚTEIS

let min = 1
let max = 3
const promises = [
    'V1', 
    esperaAi('Promise 1', rand(min, max)),
    esperaAi('Promise 2', rand(min, max)),
    esperaAi('Promise 3', rand(min, max)),
    // esperaAi(1000, rand(min, max)),
    'V2'
];

//---------------------------------------------------------------------------------------------------------------------------------------------------------
/*Promisse.all*/

/*
Promise.all(promises).then(
    function(valor){
        console.log(valor)
    }
).catch(
    function(erro){
        console.log(erro)
    }
)
*/

//---------------------------------------------------------------------------------------------------------------------------------------------------------
/*Promisse.race*/

/*
Promise.race(promises).then(
    function(valor){
        console.log(valor)
    }
).catch(
    function(erro){
        console.log(erro)
    }
)
*/

//---------------------------------------------------------------------------------------------------------------------------------------------------------
/*Promisse.resolve*/
/*
function baixaPagina_resolve(){
    const emCache = false;

    if(emCache){
        return Promise.resolve('Página em cache')
    }else{
        return esperaAi('Baixei a pagina', 3000)
    }
}

baixaPagina_resolve().then(
    dadosPagina => {
        console.log('Dados Pagina: ' + dadosPagina)
    }

).catch(
    e => console.log('ERRO: ' + e)
)
*/

//---------------------------------------------------------------------------------------------------------------------------------------------------------
/*Promisse.reject*/

function baixaPagina_reject(){
    const emCache = true;

    if(emCache){
        return Promise.reject('Página em cache')
    }else{
        return esperaAi('Baixei a pagina', 3000)
    }
}
baixaPagina_reject().then(
    dadosPagina => {
        console.log('Dados Pagina: ' + dadosPagina)
    }

).catch(
    e => console.log('ERRO: ' + e)
)

//---------------------------------------------------------------------------------------------------------------------------------------------------------
