let numero = parseInt(prompt("Insira um número inteiro: "))
if (numero % 3 === 0 && numero % 5 != 0){
    console.log("fizz")
}
else if (numero % 5 === 0 && numero % 3 != 0){
    console.log("buzz")
}
else if (numero % 3 === 0 && numero % 5 === 0){
    console.log("fizzbuzz")
}