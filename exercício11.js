let vetor = parseInt(prompt("Insira a quantidade de números para a lista: "))
let lista = []
for (let i = 1; i <= vetor; i++ ){
    let numero = parseInt(prompt("Insira um numero para alista: "))
    lista.push(numero)
}
numerosNaOrdemCerta = 0
for (i = 0; i <= lista.length; i++){
    if (lista[i] < lista[i+1]){
        numerosNaOrdemCerta += 1
    }
}
console.log(`A quantidade de números na ordem crescente em relação ao próximo são ${numerosNaOrdemCerta}`)