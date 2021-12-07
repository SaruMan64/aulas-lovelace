const Carros = {
  popular: {
    velocidadeMax: {
      min: 180,
      max: 200,
    },
    velocidadeMin: {
      min: 110,
      max: 130,
    },
    derrapagem: {
      min: 3,
      max: 4,
    },
  },
  sport: {
    velocidadeMax: {
      min: 195,
      max: 215,
    },
    velocidadeMin: {
      min: 125,
      max: 145,
    },
    derrapagem: {
      min: 2,
      max: 3,
    },
  },
  supersport: {
    velocidadeMax: {
      min: 210,
      max: 230,
    },
    velocidadeMin: {
      min: 140,
      max: 160,
    },
    derrapagem: {
      min: 1,
      max: 1.75,
    },
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

function RandomCar(carros = Carros) {
  let RC = Math.random() * 100;
  if (RC <= 60) {
    let car = { raridade: Object.keys(carros)[0] };
    let tmp = carros.popular.velocidadeMax;
    car.velocidadeMax = Number(RandomMinMax(tmp.min, tmp.max).toFixed(2));
    tmp = carros.popular.velocidadeMin;
    car.velocidadeMin = Number(RandomMinMax(tmp.min, tmp.max).toFixed(2));
    tmp = carros.popular.derrapagem;
    car.derrapagem = Number(RandomMinMax(tmp.min, tmp.max).toFixed(2));
    return car;
  } else if ((RC > 60) & (RC <= 95)) {
    let car = { raridade: Object.keys(carros)[1] };
    let tmp = carros.sport.velocidadeMax;
    car.velocidadeMax = Number(RandomMinMax(tmp.min, tmp.max).toFixed(2));
    tmp = carros.sport.velocidadeMin;
    car.velocidadeMin = Number(RandomMinMax(tmp.min, tmp.max).toFixed(2));
    tmp = carros.sport.derrapagem;
    car.derrapagem = Number(RandomMinMax(tmp.min, tmp.max).toFixed(2));
    return car;
  } else if ((RC > 95) & (RC <= 100)) {
    let car = { raridade: Object.keys(carros)[2] };
    let tmp = carros.supersport.velocidadeMax;
    car.velocidadeMax = Number(RandomMinMax(tmp.min, tmp.max).toFixed(2));
    tmp = carros.supersport.velocidadeMin;
    car.velocidadeMin = Number(RandomMinMax(tmp.min, tmp.max).toFixed(2));
    tmp = carros.supersport.derrapagem;
    car.derrapagem = Number(RandomMinMax(tmp.min, tmp.max).toFixed(2));
    return car;
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

function largada() {
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
  corrida(carPedro, carJuca, CarEdna, voltas);
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