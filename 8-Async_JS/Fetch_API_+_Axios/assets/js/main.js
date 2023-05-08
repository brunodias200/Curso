/* Solução utilizando fetch

fetch('pessoas.json').then(
  resposta => resposta.json()).then(
    json => carregaElementosPagina(json));
//*/


/*
Solução utilizando axios
*/
axios('pessoas.json').then(
  resposta => carregaElementosPagina(resposta.data)
)
//*/
function carregaElementosPagina(json){
  resultado = document.querySelector('.resultado');
  const table = document.createElement('table');

  for (let pessoa of json){
    const tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td)

    td = document.createElement('td');
    td.innerHTML = pessoa.idade;
    tr.appendChild(td)

    td = document.createElement('td');
    td.innerHTML = pessoa.salario;
    tr.appendChild(td)

    table.appendChild(tr)
    resultado.appendChild(table)
  }
}