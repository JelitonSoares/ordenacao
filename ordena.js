//                   Ordenando com o InsertionSort

const {  clientesHomens, clientesMulheres  } = require('./clientes');

// let teste = clientesHomens[3];
// console.log(teste.idade);

function ordenar(lista) {
    for(let i = 0; i < lista.length; i++) {
        while(i > 0 && lista[i].idade < lista[i-1].idade){
            let itemAtual = lista[i];
            let itemAnterior = lista[i - 1];
            lista[i - 1] = itemAtual;
            lista[i] = itemAnterior;
            i--
        }
    }
    return lista
}

console.log(ordenar(clientesMulheres))
clientesHomensOrdenado = ordenar(clientesHomens);
clientesMulheresOrdenado = ordenar(clientesMulheres);
module.exports = {  clientesHomensOrdenado, clientesMulheresOrdenado  };