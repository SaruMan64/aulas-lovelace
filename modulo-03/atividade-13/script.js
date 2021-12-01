/* document.addEventListener("input", (e) => {
  let Hidden = document.getElementById("inputVoltas");

  if (
    (e.target.getAttribute("name") == "opcao") &
    (e.target.value == "personalizado")
  ) {
    Hidden.hidden = false;
  } else {
    Hidden.hidden = true;
  }
}); */

var comp = [
  ["Pedro", 150, 230, 3],
  ["Juca", 120, 260, 5],
  ["Edna", 180, 220, 1],
];

function corrida(list) {
  if (document.getElementById("form").checkValidity()) {
    let modo = document.getElementsByName("opcao");
    let voltas;
    for (let i = 0; i < modo.length; i++) {
      if (modo[i].checked & (modo[i].value == "personalizado")) {
        voltas = document.getElementById("voltas").value;
      } else if (modo[i].checked & (modo[i].value != "personalizado")) {
        voltas = modo[i].value;
      }
    }
    let compVoltas = [];
    let compVenc = [0, 0, 0];
    let pedro;
    let juca;
    let edna;
    let p = [];
    let j = [];
    let e = [];
    for (let i = 0; i < voltas; i++) {
      pedro = kmRandon(list[0][1], list[0][2], list[0][3]);
      juca = kmRandon(list[1][1], list[1][2], list[1][3]);
      edna = kmRandon(list[2][1], list[2][2], list[2][3]);
      if ((pedro > juca) & (pedro > edna)) {
        compVenc[0] = compVenc[0] + 1;
      } else if ((juca > pedro) & (juca > edna)) {
        compVenc[1] = compVenc[1] + 1;
      } else if ((edna > pedro) & (edna > juca)) {
        compVenc[2] = compVenc[2] + 1;
      }
      p.push(pedro);
      j.push(juca);
      e.push(edna);
    }
    compVoltas.push(p);
    compVoltas.push(j);
    compVoltas.push(e);

    let vencedor = document.getElementById("vencedor");
    let results = document.getElementById("results");

    if ((compVenc[0] > compVenc[1]) & (compVenc[0] > compVenc[2])) {
      vencedor.innerHTML = "Vencedor: " + "Pedro";
    } else if ((compVenc[1] > compVenc[0]) & (compVenc[1] > compVenc[2])) {
      vencedor.innerHTML = "Vencedor: " + "Juca";
    } else if ((compVenc[2] > compVenc[0]) & (compVenc[2] > compVenc[1])) {
      vencedor.innerHTML = "Vencedor: " + "Edna";
    }

    results.innerHTML = "Pedro: " + compVenc[0] + "<br />";
    results.innerHTML = results.innerHTML + "Juca: " + compVenc[1] + "<br />";
    results.innerHTML = results.innerHTML + "Edna: " + compVenc[2] + "<br />";
  }
}
function kmRandon(min, max, derrapagem) {
  return ((Math.random() * (max - min) + min) * (100 - derrapagem)) / 100;
}

function largada() {
  corrida(comp);
}
