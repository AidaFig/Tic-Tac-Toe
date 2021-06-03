
const board = document.querySelector(".board")
const casas = document.getElementsByClassName("casas")

const player1 = "X"
const player2 = "O"
var playerTime = player2
var gameOver = false;

playersTurn()

function playersTurn() {
    if (gameOver) {
        return
    }
    if (playerTime === player2) {
        
    var player = document.querySelectorAll("div.turn img")[0]
    player.setAttribute("src", "./assets/img/cancel.png");
    }else {
        var player = document.querySelectorAll("div.turn img")[0]
        player.setAttribute("src", "./assets/img/o.png")
    }
}


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
        if (gameOver) {
            return
        }
        if(jogadas % 2 === 0) { //true = par
            img.setAttribute("src", "./assets/img/o.png")
            img.setAttribute("class", "par")
            playersTurn(playerTime = player2)
            
        } else { //false = impar
            img.setAttribute("src", "./assets/img/cancel.png")
            img.setAttribute("class", "impar")
            playersTurn(playerTime = player1)
        }
        elementoSelecionado.appendChild(img)
        console.log(elementoSelecionado.childElementCount)
        // verificarVencedor(evento.target, casa)
        // verificarVencedor(casa)
        
    })
}

function verificarVencedor(casa) {
    if (jogadas === 9) {
        
        console.log(e)
    }
}







  // for(i = 0;i < casas.length; i++ ) {
//     casas[i].addEventListener("click", (evento) => {
//           console.log(evento.target)
//     }, true)
// }
