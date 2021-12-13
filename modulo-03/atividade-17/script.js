const carros = {
  popular: {
    velocidadeMax: { min: 180, max: 200 },
    velocidadeMin: { min: 110, max: 130 },
    derrapagem: { min: 3, max: 4 },
  },
  sport: {
    velocidadeMax: { min: 195, max: 215 },
    velocidadeMin: { min: 125, max: 145 },
    derrapagem: { min: 2, max: 3 },
  },
  supersport: {
    velocidadeMax: { min: 210, max: 230 },
    velocidadeMin: { min: 140, max: 160 },
    derrapagem: { min: 1, max: 1.75 },
  },
};

const corridaPontos = {
  rapida: {
    primeiro: 200,
    segundo: 120,
    terceiro: 50,
  },
  granPrix: {
    primeiro: 220,
    segundo: 130,
    terceiro: 75,
  },
  enduro: {
    primeiro: 250,
    segundo: 150,
    terceiro: 90,
  },
  livre: {
    primeiro: 275,
    segundo: 190,
    terceiro: 135,
  },
};

function HiddenInputVoltas() {
  if (!document.getElementById("personalizado").checked) {
    document.getElementById("inputVoltas").hidden = true;
    document.getElementById("voltas").required = true;
  } else {
    document.getElementById("inputVoltas").hidden = false;
    document.getElementById("voltas").required = false;
  }
}

function validarVoltas() {
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
    return voltas;
  }
}

function tipoCorrida(corridaP = corridaPontos) {
  const voltas = validarVoltas();
  let corrida = {};
  if (voltas < 70) {
    corrida.tipo = "Rápida";
    corrida.voltas = voltas;
    corrida.pontos = Object.assign({}, corridaP.rapida);
    return corrida;
  } else if (voltas < 160) {
    corrida.tipo = "Gran Prix";
    corrida.voltas = voltas;
    corrida.pontos = Object.assign({}, corridaP.granPrix);
    return corrida;
  } else if (voltas < 200) {
    corrida.tipo = "Enduro";
    corrida.voltas = voltas;
    corrida.pontos = Object.assign({}, corridaP.enduro);
    return corrida;
  } else if (voltas >= 200) {
    corrida.tipo = "Livre";
    corrida.voltas = voltas;
    corrida.pontos = Object.assign({}, corridaP.livre);
    return corrida;
  }
}

function RandomMinMax(min, max) {
  return Math.random() * (max - min) + min;
}

function kmRandon(min, max, derrapagem) {
  return Number(
    (((Math.random() * (max - min) + min) * (100 - derrapagem)) / 100).toFixed(
      2
    )
  );
}

function kmLevel(min, max, derrapagem, level) {
  const km = kmRandon(min, max, derrapagem);
  return Number(km + (km * level) / 100);
}

function RandomCar(Carros = carros) {
  let RC = Math.random() * 100;
  if (RC <= 60) {
    let car = { raridade: Object.keys(Carros)[0] };
    let tmp = Carros.popular.velocidadeMax;
    car.velocidadeMax = Number(RandomMinMax(tmp.min, tmp.max).toFixed(2));
    tmp = Carros.popular.velocidadeMin;
    car.velocidadeMin = Number(RandomMinMax(tmp.min, tmp.max).toFixed(2));
    tmp = Carros.popular.derrapagem;
    car.derrapagem = Number(RandomMinMax(tmp.min, tmp.max).toFixed(2));

    return car;
  } else if ((RC > 60) & (RC <= 95)) {
    let car = { raridade: Object.keys(Carros)[1] };
    let tmp = Carros.sport.velocidadeMax;
    car.velocidadeMax = Number(RandomMinMax(tmp.min, tmp.max).toFixed(2));
    tmp = Carros.sport.velocidadeMin;
    car.velocidadeMin = Number(RandomMinMax(tmp.min, tmp.max).toFixed(2));
    tmp = Carros.sport.derrapagem;
    car.derrapagem = Number(RandomMinMax(tmp.min, tmp.max).toFixed(2));

    return car;
  } else if ((RC > 95) & (RC <= 100)) {
    let car = { raridade: Object.keys(Carros)[2] };
    let tmp = Carros.supersport.velocidadeMax;
    car.velocidadeMax = Number(RandomMinMax(tmp.min, tmp.max).toFixed(2));
    tmp = Carros.supersport.velocidadeMin;
    car.velocidadeMin = Number(RandomMinMax(tmp.min, tmp.max).toFixed(2));
    tmp = Carros.supersport.derrapagem;
    car.derrapagem = Number(RandomMinMax(tmp.min, tmp.max).toFixed(2));

    return car;
  }
}

function objJogadores() {
  const jogador = {
    pedro: {
      car: RandomCar(),
      level: 0,
      ponto: 0,
    },
    juca: {
      car: RandomCar(),
      level: 0,
      ponto: 0,
    },
    edna: {
      car: RandomCar(),
      level: 0,
      ponto: 0,
    },
  };
  return jogador;
}

//gerar função que recebe um objeto pessoas e retorna um array multi
//sorting função acima
//velocidade + (velocidade*level/100)

function corridaPorVolda(pedro, juca, edna) {
  let arrayJogadores = [{}, {}, {}];
  arrayJogadores[0].jogador = "pedro";
  arrayJogadores[0].km = kmLevel(
      pedro.car.velocidadeMin,
      pedro.car.velocidadeMax,
      pedro.car.derrapagem,
      pedro.level
  );
  arrayJogadores[1].jogador = "juca";
  arrayJogadores[1].km = kmLevel(
      juca.car.velocidadeMin,
      juca.car.velocidadeMax,
      juca.car.derrapagem,
      juca.level
  );
  arrayJogadores[2].jogador = "edna";
  arrayJogadores[2].km = kmLevel(
      edna.car.velocidadeMin,
      edna.car.velocidadeMax,
      edna.car.derrapagem,
      edna.level
  );

  return arrayJogadores;
}

/* function atribuirLevel(pontosJogador) {
  const level = parseInt(pontosJogador / 450);
  if (level <= 10) {
    levelJogador = level;
  }
}

function atribuirPontos(item, index) {
  switch (item[0]) {
    case "pedro":
      if (index == 0) {
        jogadoresLargada.pedro.ponto =
          jogadoresLargada.pedro.ponto + corridaLargada.ponto.primeiro;
        atribuirLevel(jogadoresLargada.pedro.ponto);
      } else if (index == 1) {
        jogadoresLargada.pedro.ponto =
          jogadoresLargada.pedro.ponto + corridaLargada.ponto.segundo;
        atribuirLevel(jogadoresLargada.pedro.ponto);
      } else if (index == 2) {
        jogadoresLargada.pedro.ponto =
          jogadoresLargada.pedro.ponto + corridaLargada.ponto.terceiro;
        atribuirLevel(jogadoresLargada.pedro.ponto);
      }
      break;
    case "juca":
      if (index == 0) {
        jogadoresLargada.juca.ponto =
          jogadoresLargada.juca.ponto + corridaLargada.ponto.primeiro;
        atribuirLevel(jogadoresLargada.juca.ponto);
      } else if (index == 1) {
        jogadoresLargada.juca.ponto =
          jogadoresLargada.juca.ponto + corridaLargada.ponto.segundo;
        atribuirLevel(jogadoresLargada.juca.ponto);
      } else if (index == 2) {
        jogadoresLargada.juca.ponto =
          jogadoresLargada.juca.ponto + corridaLargada.ponto.terceiro;
        atribuirLevel(jogadoresLargada.juca.ponto);
      }
      break;
    case "edna":
      if (index == 0) {
        jogadoresLargada.edna.ponto =
          jogadoresLargada.edna.ponto + corridaLargada.ponto.primeiro;
        atribuirLevel(jogadoresLargada.edna.ponto);
      } else if (index == 1) {
        jogadoresLargada.edna.ponto =
          jogadoresLargada.edna.ponto + corridaLargada.ponto.segundo;
        atribuirLevel(jogadoresLargada.edna.ponto);
      } else if (index == 2) {
        jogadoresLargada.edna.ponto =
          jogadoresLargada.edna.ponto + corridaLargada.ponto.terceiro;
        atribuirLevel(jogadoresLargada.edna.ponto);
      }
      break;
  }
} */

function compare( a, b ) {
  if ( a.km < b.km ){
    return -1;
  }
  if ( a.km > b.km ){
    return 1;
  }
  return 0;
}

function largada() {
  var jogadoresLargada = objJogadores();
  var corridaLargada = tipoCorrida();
  for (let i = 0; i < corridaLargada.voltas; i++) {
    let arrayJogadores = corridaPorVolda(
      jogadoresLargada.pedro,
      jogadoresLargada.juca,
      jogadoresLargada.edna
    );
    arrayJogadores.sort(compare);
    arrayJogadores.forEach(atribuirPontos);
  }
  console.log(jogadoresLargada)


/* 
  const carPedro = RandomCar();
  const carJuca = RandomCar();
  const CarEdna = RandomCar();
  const nome = ["Pedro", "Juca", "Edna"];
  const carros = [carPedro, carJuca, CarEdna];
  for (let i = 0; i < 3; i++) {
    document.getElementById("rar" + nome[i]).innerHTML = carros[i].raridade;
    document.getElementById("min" + nome[i]).innerHTML =
      carros[i].velocidadeMin;
    document.getElementById("max" + nome[i]).innerHTML =
      carros[i].velocidadeMax;
    document.getElementById("der" + nome[i]).innerHTML = carros[i].derrapagem;
  }
  let voltas = validarVoltas();
  corrida(carPedro, carJuca, CarEdna, voltas); */
}

function corrida(carPedro, carJuca, carEdna, voltas) {
  // [victory, [laps value], tmp]
  let pedro = [0, [], 0];
  let juca = [0, [], 0];
  let edna = [0, [], 0];
  for (let i = 0; i < voltas; i++) {
    pedro[2] = kmRandon(
      carPedro.velocidadeMin,
      carPedro.velocidadeMax,
      carPedro.derrapagem
    );
    juca[2] = kmRandon(
      carJuca.velocidadeMin,
      carJuca.velocidadeMax,
      carJuca.derrapagem
    );
    edna[2] = kmRandon(
      carEdna.velocidadeMin,
      carEdna.velocidadeMax,
      carEdna.derrapagem
    );

    pedro[1].push(pedro[2]);
    juca[1].push(juca[2]);
    edna[1].push(edna[2]);

    if ((pedro[2] > juca[2]) & (pedro[2] > edna[2])) {
      pedro[0]++;
    } else if ((juca[2] > pedro[2]) & (juca[2] > edna[2])) {
      juca[0]++;
    } else if ((edna[2] > pedro[2]) & (edna[2] > juca[2])) {
      edna[0]++;
    }
  }

  /* let lista = [pedro[0], juca[0], edna[0]];
  console.log(lista);
  lista = Ordenar(lista);
  console.log(lista); */

  let vencedor = document.getElementById("vencedor");
  let results = document.getElementById("results");
  /*   document.getElementById("podio").hidden = false;
   */
  if ((pedro[0] > juca[0]) & (pedro[0] > edna[0])) {
    vencedor.innerHTML = "Vencedor: " + "Pedro";
  } else if ((juca[0] > pedro[0]) & (juca[0] > edna[0])) {
    vencedor.innerHTML = "Vencedor: " + "Juca";
  } else if ((edna[0] > pedro[0]) & (edna[0] > juca[0])) {
    vencedor.innerHTML = "Vencedor: " + "Edna";
  }

  results.innerHTML = "Pedro: " + pedro[0] + "<br />";
  results.innerHTML = results.innerHTML + "Juca: " + juca[0] + "<br />";
  results.innerHTML = results.innerHTML + "Edna: " + edna[0] + "<br />";
}

/* function Ordenar(list) {
  let ordenado = false;
  while (!ordenado) {
    ordenado = true;
    for (let i = 1; i < list.length; i++) {
      if (list[i - 1] > list[i]) {
        ordenado = false;
        let tmp = list[i - 1];
        list[i - 1] = list[i];
        list[i] = tmp;
      }
    }
  }
  return list;
}
 */
/* function empate(pedro, juca, edna){

} */
