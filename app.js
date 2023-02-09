// Variables globales
let board = ["", "", "", "", "", "", "", "", ""];
//let turn = "X";
let turn = "X";
let computer = "O";
//let computer = "O";

document.querySelector('.alert').style.setProperty('display','none');
document.querySelector('.module').style.setProperty('display','none');

// Asignar evento click a cada celda
for (let i = 0; i < 9; i++) {
  document.getElementById(i).addEventListener("click", function(event) {
    let id = event.target.id;
    // event.target.id.style.backgroundColor ='blue'
    // console.log(event.target.id)
    if (board[id] === "") {
      board[id] = turn;
      event.target.textContent = turn;
      checkForWin();
      switchTurn();
      if (turn === computer) {
        computerMove();
      }
    }
  });
}

// Función para alternar turnos
function switchTurn() {
  if (turn === "X") {
    turn = computer;

  } else {
    turn = "X";
  }
}

// Función para verificar si hay ganador
function checkForWin() {
  let combinations = [    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < combinations.length; i++) {
    if (board[combinations[i][0]] === turn &&
        board[combinations[i][1]] === turn &&
        board[combinations[i][2]] === turn) {
          document.querySelector('.alert').style.removeProperty('display','none');
          document.querySelector('.module').style.removeProperty('display','none');
          document.querySelector('h4').textContent = `El jugador ${turn} ha ganado eljuego`
          
          //alert("El jugador " + turn + " ha ganado!");
      reset();
    }
  }
}

// Función para hacer el movimient
// Función para hacer el movimiento de la computadora
function computerMove() {
    let id = Math.floor(Math.random() * 9);
    while (board[id] !== "") {
      id = Math.floor(Math.random() * 9);
    }
    board[id] = computer;
    document.getElementById(id).textContent = computer;
    checkForWin();
    switchTurn();
  }
  
  // Función para reiniciar el juego
  function reset() {
    board = ["", "", "", "", "", "", "", "", ""];
    for (let i = 0; i < 9; i++) {
      document.getElementById(i).textContent = "";
      

    }
    
   
    
   // turn = "X";
  }
  
