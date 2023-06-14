const { clientesHomensOrdenado, clientesMulheresOrdenado} = require('./ordena');

// console.log(clientesHomensOrdenado)

function juntaListas(lista1, lista2) {
    let listaFinal = [];
    let i1 = 0;
    let i2 = 0;

    while(i1 < lista1.length && i2 < lista2.length) {
        if (lista1[i1].idade < lista2[i2].idade){
            listaFinal.push(lista1[i1]);
            i1++
        } else {
            listaFinal.push(lista2[i2]);
            i2++
        }
    }

    while(i1 < lista1.length) {
        listaFinal.push(lista1[i1]);
        i1++
    }

    while(i2 < lista2.length) {
        listaFinal.push(lista2[i2]);
        i2++
    }
    
    return listaFinal
}

console.log(juntaListas(clientesHomensOrdenado, clientesMulheresOrdenado))