let valorReais = parseFloat(prompt("Insira o valor em reais: "))

let converteEuro = () => valorReais / 6.10
let converteDolar = () => valorReais / 5.70

console.log(`O valor de R$${valorReais} equivale a €${converteEuro(valorReais)} e $${converteDolar(valorReais)}`)