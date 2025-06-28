function verificarIdades(x,y){
    let listaVerficada = []
    x.forEach((anoNascimento, indice) =>{
              if ( y - anoNascimento >= 18){
                listaVerficada.push("maior")
              }else{
                listaVerficada.push("menor")
              }
    })
    return listaVerficada
}
let anoAtual = parseInt(prompt("Insira o ano atual: "))
let listaAnos = []
let quantidadePessoas = parseInt(prompt("Insira a quantidade de pessoas para a lista: "))
for (let i = 1; i <= quantidadePessoas; i++ ){
    let nascimento = parseInt(prompt("Insira o ano de nascimento: "))
    listaAnos.push(nascimento)
}

console.log(verificarIdades(listaAnos,anoAtual))

let listaMaioridade = verificarIdades(listaAnos,anoAtual)
listaMaioridade.forEach((maioridade, indice) =>{
              if (maioridade === "maior"){
                console.log(`Pessoa ${indice+1}: Maior de idade`)
              }else{
                console.log(`Pessoa ${indice+1}: Menor de idade`)
              }
})