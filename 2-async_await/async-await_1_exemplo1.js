function rand(min=0, max=3){
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
/*ASYNC AWAIT*/
/*
esperaAi('Fase 1', rand()).then(
    valor => {
        console.log(valor);
        return esperaAi('Fase 2', rand());
    }
).then(
    valor => {
        console.log(valor);
        return esperaAi('Fase 3', rand());
    }
).then(
    valor => {
        console.log(valor);
        return esperaAi('Fase 4', rand());
    }
).then(
    valor => {
        console.log(valor);
        return esperaAi('Fase X', rand());
    }
).then(
    valor => console.log(valor)
).catch(
    e => console.log("ERRO: " + e)
)
*/

async function executa(){
    try {
        const frase1 = await esperaAi('1', rand());
        console.log(frase1);

        const frase2 = await esperaAi('Frase 2', rand());
        console.log(frase2);

        const frase3 = await esperaAi('3', rand());
        console.log(frase3);

        const frase4 = await esperaAi('Frase 4', rand());
        console.log(frase4);

        const frase5 = await esperaAi('5', rand());
        console.log(frase5);
    }catch(e) {
        console.log("ERRO: " + e);
    }
}
executa();