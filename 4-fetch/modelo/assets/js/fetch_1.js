document.addEventListener('click', e=>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    
    if(tag === 'a'){
        e.preventDefault()
        carregaPagina(el)
    }
})

function carregaPagina(el){
    const href = el.getAttribute('href');
    console.log(href)
    fetch(href).then(
        resposta => {
            if(resposta.status!==200){
                return resposta.status + " - " + resposta.statusText
            }
                return resposta.text();
        }
    ).then(
        html => carregaResultado(html)
    ).catch(
        e=> carregaResultado(e)
    );
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}