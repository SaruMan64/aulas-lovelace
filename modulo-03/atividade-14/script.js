var lista = [];

function Armazenar() {
  lista = [];
  for (let i = 0; i < 4; i++) {
    lista.push(Number(document.getElementById("number" + i).value));
    document.getElementById("armazenado" + i).innerHTML = lista[i];
    document.getElementById("revertido" + i).innerHTML = null;
    document.getElementById("ordenado" + i).innerHTML = null;
  }
}

function Reverter() {
  const len = lista.length;
  for (let i = 1; i <= len; i++) {
    lista.push(lista[len - i]);
  }
  for (let i = 0; i < len; i++) {
    lista.shift();
  }
  console.log(lista);
  for (let i = 0; i < lista.length; i++) {
    document.getElementById("revertido" + i).innerHTML = lista[i];
    document.getElementById("number" + i).value = lista[i];
  }
}

function Ordenar() {
  let ordenado = false;
  while (!ordenado) {
    ordenado = true;
    for (let i = 1; i < lista.length; i++) {
      if (lista[i - 1] > lista[i]) {
        ordenado = false;
        let tmp = lista[i - 1];
        lista[i - 1] = lista[i];
        lista[i] = tmp;
      }
    }
  }
  for (let i = 0; i < lista.length; i++) {
    document.getElementById("ordenado" + i).innerHTML = lista[i];
    document.getElementById("number" + i).value = lista[i];
  }
}

function Randon(){
    lista = [];
    for (let i = 0; i < 4; i++) {
        lista.push(parseInt(Math.random() * 10000));
        document.getElementById("number" + i).value = lista[i];
        document.getElementById("armazenado" + i).innerHTML = lista[i];
        document.getElementById("revertido" + i).innerHTML = null;
        document.getElementById("ordenado" + i).innerHTML = null;
    }
}