let continuar = true 
let fila = []
while(continuar){
    let menu = parseInt(prompt("Insira 1 para novo cliente,  2 para atender cliente,  3 para sair"))
     if (fila.length === 0) {
        alert("Nenhum cliente na fila");
    }else{
        let filaExibida = []
        for (let i = 0; i < fila.length; i++) {
            filaExibida.push((i + 1) + "º " + fila[i]);
        }
    alert("Fila de clientes: " + filaExibida)
    }
    if(menu === 1){
        let nomeCliente = prompt("Insira o nome do cliente: ")
        fila.push(nomeCliente)
    }else if (menu === 2){
        if (fila.length === 0) {
            alert("Nenhum cliente para atender.")
        }else{
            let clienteAtendido = fila.shift()
            alert(`Atendendo ${clienteAtendido}`)
        }

    }else{
        alert("Encerrando sistema")
        continuar = false
    }
}

  










