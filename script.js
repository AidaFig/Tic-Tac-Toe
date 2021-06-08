const casas = Array.from(document.querySelectorAll(".casa"));

let board = ["", "", "", "", "", "", "", "", ""];
const winningCombos = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];
let playerTurn = "X";
let displayPlayer = document.getElementById("displayPlayer");
displayPlayer.innerHTML = playerTurn;

casas.forEach((casa) => {
  // console.log(casa)
  casa.addEventListener("click", handleClicked);
});

function handlePlayerTurn() {
  if (playerTurn === "X") {
    playerTurn = "O";
  } else {
    playerTurn = "X";
  }
}

function handleClicked(e) {
  // e.preventDefault()
//   console.log(playerTurn);
  // console.log(e.target.getAttribute("data-index"))
  board[e.target.getAttribute("data-index")] = playerTurn;

  const img = document.createElement("img");
  e.target.appendChild(img);

  if (playerTurn !== "X") {
    //true = par
    img.setAttribute("src", "./assets/img/o.png");
    
  } else {
    //false = impar
    img.setAttribute("src", "./assets/img/cancel.png");
    
  }

  handlePlayerTurn();
//   console.log(playerTurn);
  displayPlayer.innerHTML = playerTurn;
  // console.log(board[e.target.getAttribute("data-index")])
  console.log(board);

  let winner = winningConditions() 
  console.log(winner)

  e.target.removeEventListener("click", handleClicked)

}

function winningConditions() {
    
    for (combo of winningCombos) {
        const a = board[combo[0]]
        const b = board[combo[1]]
        const c = board[combo[2]]
       

        if(a === b && a === c && a != "") {
            alert("GANHOU!!!")
            return a
        } 

    }

}