function fibonacci(n){
    if (n === 0){return 0}
    else if(n === 1){return 1}
    return fibonacci(n-1) + fibonacci(n-2)
}
let n = parseInt(prompt("Insira um número inteiro: "))
sequencia = []
    
for (let i = 0; i<=n; i++)
    sequencia.push(fibonacci(i))

console.log(`A sequência de fibonacci de ${n} termos é ${sequencia}`)