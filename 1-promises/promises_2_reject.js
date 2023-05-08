function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min)+min);
}
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
            reject('BAD VALUE');
        }
        setTimeout(()=>{
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase1', rand(1, 3))
    .then(resposta => {
        console.log(resposta + ' segue ao prox. then');

        return esperaAi(1, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta + ' segue ao prox. then');

        return esperaAi('Frase3', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta + ' cabou');
    })
    .then(() => {
        console.log('cabou memo agora');
    })
    .catch(e => {
        console.log('Error msg: ' + e)
    });

console.log('teste');