let matriz = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

function matrizRecursive(_matriz, _lenRow = 0, _lenColumn = 0) {
  const matriz = _matriz;
  const lenRow = _lenRow;
  let lenColumn = _lenColumn

  if (lenRow === matriz.length){
    return true;
  }
  else if(lenColumn === matriz[lenRow].length){
    matrizRecursive(matriz, lenRow + 1, lenColumn = 0);
  }
  else{
    //console.log(matriz[lenRow][lenColumn]);
    document.querySelector("p").innerHTML = document.querySelector("p").innerHTML + matriz[lenRow][lenColumn] + "<br />";
    matrizRecursive(matriz, lenRow, lenColumn + 1);
  }
}

function consultar(){
  document.querySelector("p").innerHTML = "";
  matrizRecursive(matriz);
}

function resetar(){
  document.querySelector("p").innerHTML = "";
  matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ];
}