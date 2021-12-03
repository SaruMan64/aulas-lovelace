var counter;
var counterBase;
var jogador = "X";
var matriz = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function Iniciar() {
  counter = 0;
  counterBase = 0;
}

function Proximo() {
  let inputAll = document.querySelectorAll("#form input");
  if (counter > counterBase) {
    counterBase = counter;
    Array.from(inputAll).forEach((input) => {
      if (input.checked) {
        input.disabled = true;
      } else {
        input.disabled = false;
      }
    });
    if (jogador == "X") {
      jogador = "O";
    } else {
      jogador = "X";
    }
    validar = ValidarMatriz()
    if (validar != 0){

    }
  }
}

function Counter(ID) {
  let input = document.getElementById(ID);
  let inputAll = document.querySelectorAll("#form input");
  if (input.checked) {
    Inserir(ID, jogador);
    counter = counter + 1;
    Array.from(inputAll).forEach(
      (formElement) => (formElement.disabled = true)
    );
    input.disabled = false;
    input.setAttribute("class", jogador);
  } 
  else {
    Inserir(ID, "");
    counter = counter - 1;
    Array.from(inputAll).forEach(
      (formElement) => (formElement.disabled = false)
    );
    input.setAttribute("class", "");
  }
}

function Inserir(ID, valor) {
  switch (ID) {
    case "0":
      matriz[0][0] = valor;
      break;
    case "1":
      matriz[0][1] = valor;
      break;
    case "2":
      matriz[0][2] = valor;
      break;
    case "3":
      matriz[1][0] = valor;
      break;
    case "4":
      matriz[1][1] = valor;
      break;
    case "5":
      matriz[1][2] = valor;
      break;
    case "6":
      matriz[2][0] = valor;
      break;
    case "7":
      matriz[2][1] = valor;
      break;
    case "8":
      matriz[2][02] = valor;
      break;
  }
}

function ValidarMatriz() {
  let b = [];
  let c = [];
  let d = [];
  let e = [matriz[0][0], matriz[1][1], matriz[2][2]];
  let f = [matriz[0][2], matriz[1][1], matriz[2][0]];
  Array.from(matriz).forEach((Matriz) => {
    b.push(Matriz[0]);
    c.push(Matriz[1]);
    d.push(Matriz[2]);
  });

  const X = ["X", "X", "X"];
  const O = ["O", "O", "O"];

  let Jogo = [
    [1, matriz[0]],
    [2, matriz[1]],
    [3, matriz[2]],
    [4, b],
    [5, c],
    [6, d],
    [7, e],
    [8, f],
  ];

  let i = 0;

  Array.from(Jogo).forEach((j) => {
    if (j[1].toString() == O.toString() || j[1].toString() == X.toString()) {
      i = j[0];
    }
  });
  return i;
}
