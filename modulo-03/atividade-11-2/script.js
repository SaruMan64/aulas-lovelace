var pedido = 1;

function enviar() {
  let form = document.getElementById("lista");
  if (form.checkValidity()) {
    let input = form.querySelectorAll(
      "input[name='pao'], input[name='carne'], input[name='salada'], input[name='queijo']"
    );
    let listOut = [];
    let listIn = [];
    if (input[0].checked) {
      listIn.push(input[0].id);
      listIn.push(input[0].alt);
      listIn.push(input[0].value);
      listOut.push(listIn);
      listIn = [];
    } else if (input[1].checked) {
      listIn.push(input[1].id);
      listIn.push(input[1].alt);
      listIn.push(input[1].value);
      listOut.push(listIn);
      listIn = [];
    } else if (input[2].checked) {
      listIn.push(input[2].id);
      listIn.push(input[2].alt);
      listIn.push(input[2].value);
      listOut.push(listIn);
      listIn = [];
    }
    
    if (input[3].checked) {
      listIn.push(input[3].id);
      listIn.push(input[3].alt);
      listIn.push(input[3].value);
      listOut.push(listIn);
      listIn = [];
    }
    else if (input[4].checked) {
      listIn.push(input[4].id);
      listIn.push(input[4].alt);
      listIn.push(input[4].value);
      listOut.push(listIn);
      listIn = [];
    }
    else if (input[5].checked) {
      listIn.push(input[5].id);
      listIn.push(input[5].alt);
      listIn.push(input[5].value);
      listOut.push(listIn);
      listIn = [];
    }

    if (input[6].checked) {
      listIn.push(input[6].id);
      listIn.push(input[6].alt);
      listIn.push(input[6].value);
      listOut.push(listIn);
      listIn = [];
    }
    else if (input[7].checked) {
      listIn.push(input[7].id);
      listIn.push(input[7].alt);
      listIn.push(input[7].value);
      listOut.push(listIn);
      listIn = [];
    }
    else if (input[8].checked) {
      listIn.push(input[8].id);
      listIn.push(input[8].alt);
      listIn.push(input[8].value);
      listOut.push(listIn);
      listIn = [];
    }

    if (input[9].checked) {
      listIn.push(input[9].id);
      listIn.push(input[9].alt);
      listIn.push(input[9].value);
      listOut.push(listIn);
      listIn = [];
    }
    else if (input[10].checked) {
      listIn.push(input[10].id);
      listIn.push(input[10].alt);
      listIn.push(input[10].value);
      listOut.push(listIn);
      listIn = [];
    }
    else if (input[11].checked) {
      listIn.push(input[11].id);
      listIn.push(input[11].alt);
      listIn.push(input[11].value);
      listOut.push(listIn);
      listIn = [];
    }


    resultado(listOut);
  }
}

function resultado(list) {
  let result = document.getElementById("resultado");

  document.getElementById("menu").hidden = true;
  result.hidden = false;
  document.getElementById("pao").innerHTML = list[0][1];
  document.getElementById("carne").innerHTML = list[1][1];
  document.getElementById("salada").innerHTML = list[2][1];
  document.getElementById("queijo").innerHTML = list[3][1];
  document.getElementById("paoV").innerHTML = real(list[0][2]);
  document.getElementById("carneV").innerHTML = real(list[1][2]);
  document.getElementById("saladaV").innerHTML = real(list[2][2]);
  document.getElementById("queijoV").innerHTML = real(list[3][2]);
  let total =
    Number(list[0][2]) +
    Number(list[1][2]) +
    Number(list[2][2]) +
    Number(list[3][2]);
  document.getElementById("total").innerHTML = real(total);
  document.getElementById("pedido").innerHTML = pedido;
  document.getElementById("pedido2").innerHTML = pedido;
}

function real(numero){
  return numero.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}

function outroPedido() {
  document.getElementById("lista").reset();
  document.getElementById("menu").hidden = false;
  document.getElementById("resultado").hidden = true;
  pedido = pedido + 1;
}
