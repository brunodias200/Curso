function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min)+min);
}
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase1', rand(1, 3))
    .then(resposta => {
        console.log(resposta + ' segue ao prox. then')

        return esperaAi('Frase2', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta + ' segue ao prox. then')

        return esperaAi('Frase3', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta + ' cabou')
    })
    .then(() => {
        console.log('cabou memo agora')
    })
    .catch();

esperaAi('Frase3', rand(1, 3))
console.log('teste')