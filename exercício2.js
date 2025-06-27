let continuar = true
while (continuar){
    let x = parseInt(prompt("Insira um número para calcular fatorial: "))
    let fatorial = 1
    if (x >= 0){
        for(let i = 2; i <= x; i++){
            fatorial *= i
        }console.log(`O fatorial do número ${x} é ${fatorial}`)
    }else if (x < 0){
        alert("Número inválido entre com outro ")
        continue
    }
    let proximo = prompt("Deseja calcular fatorial de outro número? ")
    if (proximo === "S" || proximo === "s"){
        continuar = true

    }else if (proximo === "N" || proximo === "n"){
        continuar = false
    } 
}