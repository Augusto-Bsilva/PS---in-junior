let a = parseInt(prompt("Insira a variável a: "))
let b = parseInt(prompt("Insira a variável b: "))
let c = parseInt(prompt("Insira a variável c: "))

let delta = (b**2) - 4*a*c
if(delta > 0){
   x1 = (-b + Math.sqrt(delta)) / 2*a
   x2 = (-b - Math.sqrt(delta)) / 2*a
   console.log(`As raízes da equação são ${x1} e ${x2}`)
}else if(delta === 0){
       x1 = (-b + Math.sqrt(delta)) / 2*a
       console.log(`A raíz da equação é ${x1}`)
}else{
    console.log(`A equação não possui raízes reais`)
}
