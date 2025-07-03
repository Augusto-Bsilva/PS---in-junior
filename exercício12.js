function encontrarElementoUnico (lista){
    elementoÚnico = 0
    for (i = 0; i < lista.length; i++){
        let comparador = lista[i]
        if(lista.indexOf(comparador) === lista.lastIndexOf(comparador)){
           elementoÚnico = comparador
        }
    }
    return elementoÚnico
}
let quantidade = parseInt(prompt("Insira a quantidade de números para a lista: "))
let lista = []
for (let i = 1; i <= quantidade; i++ ){
    let numero = parseInt(prompt("Insira um numero para a lista: "))
    lista.push(numero)
}
unicoElemento = encontrarElementoUnico(lista)
console.log(`O elemento que aparece apenas uma vez é ${unicoElemento}`)