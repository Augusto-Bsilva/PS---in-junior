let frase = prompt("Insira uma frase: ")

frase = frase.split(" ")
let fraseSemEspaços = ""
frase.forEach((palavra) =>{ fraseSemEspaços += palavra})
fraseSemEspaços = fraseSemEspaços.toLocaleLowerCase()

let fraseReversa = ""
for (let i = fraseSemEspaços.length -1 ; i >= 0; i--){
    fraseReversa += fraseSemEspaços[i]
} 

if (fraseSemEspaços === fraseReversa){
    console.log("É palíndromo")
}else{
    console.log("Não é palíndromo")
}