
const board = document.querySelector(".board")
const casas = document.getElementsByClassName("casas")

// function playerTurn() {
//     const player1 = document.createElement("img");
    
    
// }


let jogadas = 0
console.log(casas)
for(var casa of casas){
    casa.addEventListener("click", (evento) => {
        // console.log(evento.target)
        // console.log(jogadas)
        jogadas++
        const elementoSelecionado = evento.target
        // console.log(elementoSelecionado)
        
        const img = document.createElement("img")
        if(jogadas % 2 === 0) { //true = par
            img.setAttribute("src", "./assets/img/o.png")
            img.setAttribute("class", "par")
        } else { //false = impar
            img.setAttribute("src", "./assets/img/cancel.png")
            img.setAttribute("class", "impar")
        }
        elementoSelecionado.appendChild(img)
        console.log(elementoSelecionado.childElementCount)
        // verificarVencedor(evento.target, casa)
        // verificarVencedor(casa)
        
    })
}

function verificarVencedor(e, casa) {
    if (jogadas > 3) {
        console.log(casa)
        console.log(e)
    }
}







  // for(i = 0;i < casas.length; i++ ) {
//     casas[i].addEventListener("click", (evento) => {
//           console.log(evento.target)
//     }, true)
// }
