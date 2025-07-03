function adicionarJogador (time,nome,idade,posição,pontuacao){
   let novoJogador = 
     {nome: nome,
      idade: idade,
      posição: posição,
      pontuacao: pontuacao
    }
   time.push(novoJogador)
   return time 
}
function buscarPorPosicao (time,busca){
   jogadoresDaPosicao = []
   for(let i = 0; i < time.lenght; i++){
      if (time.posição === busca){
         jogadoresDaPosicao.push(time.nome)
      }
   }
   return jogadoresDaPosicao        
}
function listarTime (time){
    time.forEach((elemento) => {console.log(elemento)})
}   
function calcularPontuacaoMedia (time){
    let soma = 0
    let contador = 0
    for(let i = 0; i<time.lenght; i++){
       soma += time[i].pontuacao
       contador += 1
    }let media = soma / contador
    return media
}

let time = []
let continuar = true 
while(continuar){
    let menu = parseInt(prompt("Insira 1 para adicionar novo jogador, 2 para buscar por posição, 3 para listar o time, 4 para calcular a pontuação média, 5 para sair"))
    if(menu === 1){
        let nome = prompt("Insira o nome do jogador: ")
        let idade = parseInt(prompt("Insira o idade do jogador: "))
        let posição = prompt("Insira a posição do jogador: ")
        let pontuacao = parseInt(prompt("Insira a pontuação do jogador: "))
        newPlayer = adicionarJogador(time,nome,idade,posição,pontuacao)
    }else if (menu === 2){
        busca = prompt("Qual posição deseja buscar? ")
        jogadores = buscarPorPosicao(time,busca)
        console.log(jogadores)
    }else if (menu === 3){
        console.log(listarTime(time))
    }else if (menu === 4){
        mediaPontos = calcularPontuacaoMedia(time)
        console.log(mediaPontos)
    }else{
        alert("Encerrando sistema")
        continuar = false
    }

}

