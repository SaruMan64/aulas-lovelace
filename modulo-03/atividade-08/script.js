let Header = [
  ["titulo", "Gatos", "#"],
  ["saiba", "Saiba Mais", "https://pt.wikipedia.org/wiki/Gato"],
];
let MainImg = [
  ["gato1", "./img/cat1.png"],
  ["gato2", "./img/cat2.png"],
  ["gato3", "./img/cat3.png"],
  ["gato4", "./img/cat4.png"],
  ["gato5", "./img/cat5.png"],
  ["gato6", "./img/cat6.png"],
  ["gato7", "./img/cat1.png"],
];
let MainText = [
  ["especie", "<b>Espécie:</b> Felis catus"],
  ["habitat", "<b>Habitat:</b> Domestico"],
  [
    "text",
    "<b>Descrição:</b> O gato (Felis silvestris catus), também conhecido como gato caseiro, gato urbano ou gato doméstico, é um mamífero carnívoro da família dos felídeos, muito popular como animal de estimação. Ocupando o topo da cadeia alimentar, é predador natural de diversos animais, como roedores, pássaros, lagartixas e alguns insetos. Segundo pesquisas realizadas por instituições norte-americanas, os gatos consistem no segundo animal de estimação mais popular do mundo, estando numericamente atrás apenas dos peixes de aquário.",
  ],
];
let Footer = ["footer", "Developed by Yeté Labarca"];

function fillHeader(lista) {
  for (var i = 0; i < lista.length; i++) {
    var el = document.getElementById(lista[i][0]);
    el.innerHTML = lista[i][1];
    el.href = lista[i][2];
  }
}

function fillMain(lista1, lista2) {
  for (var i = 0; i < lista1.length; i++) {
    document.getElementById(lista1[i][0]).src = lista1[i][1];
  }
  for (var i = 0; i < lista2.length; i++) {
    document.getElementById(lista2[i][0]).innerHTML = lista2[i][1];
  }
}

function fillFooter(lista) {
  document.getElementById(lista[0]).innerHTML = lista[1];
}

fillHeader(Header);
fillMain(MainImg, MainText);
fillFooter(Footer);
