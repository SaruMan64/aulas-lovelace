const formInput = () => ({
  nome: document.getElementById("inputName").value.trim(),
  data: document.getElementById("inputDate").value.replace(/-/g, "/"),
  valor: document.getElementById("inputValue").value,
});
let rowTable = [];

function reverseData(str) {
  return str.split("/").reverse().join("/");
}

function addTableForm(el, id) {
  if (id == rowTable.length - 1) {
    const tmp = "</td><td>";
    let tbody = document.getElementById("tBody");
    tbody.innerHTML =
      tbody.innerHTML +
      "<tr><td>" +
      el.nome +
      tmp +
      reverseData(el.data) +
      tmp +
      real(Number(el.valor)) +
      tmp +
      "" +
      tmp +
      "" +
      tmp +
      "" +
      "</td></tr>";
  }
}

function addTableJuros(el, id) {
  const tmp = "</td><td>";
  let tbody = document.getElementById("tBody");
  tbody.innerHTML =
    tbody.innerHTML +
    "<tr><td>" +
    el.nome +
    tmp +
    reverseData(el.data) +
    tmp +
    real(Number(el.valor)) +
    tmp +
    diasDeAtraso(el.data) +
    tmp +
    (jurosPorCento(el.data) * 100).toFixed(1) +
    "%" +
    tmp +
    real(valorTotal(el.data, el.valor)) +
    "</td></tr>";
}

function diasDeAtraso(data) {
  const dataAtual = new Date(
    new Date(Date()).getFullYear(),
    new Date(Date()).getMonth(),
    new Date(Date()).getDate()
  );
  const dataCompra = new Date(data);
  let diasDeAtraso =
    (dataAtual.getTime() - dataCompra.getTime()) / (1000 * 3600 * 24);

  if (diasDeAtraso >= 0) {
    return Number(diasDeAtraso.toFixed(0));
  } else {
    return "Dentro do Prazo";
  }
}

function jurosPorCento(diasAt) {
  if (diasDeAtraso(diasAt) == "Dentro do Prazo") {
    return 0;
  }
  let juros = 0.02 + 0.001 * diasDeAtraso(diasAt);
  return juros;
}

function valorTotal(diasAt, valor) {
  let valorTotal =
    jurosPorCento(diasAt) * parseFloat(valor) + parseFloat(valor);
  return valorTotal;
}

function real(valor) {
  return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

function adicionar() {
  if (!document.getElementById("form").checkValidity()) {
    return false;
  }
  rowTable.push(formInput());
  document.getElementById("form").reset();
  rowTable.map(addTableForm);
  return rowTable;
}

function limpar() {
  rowTable = [];
  document.getElementById("tBody").innerHTML = " ";
  return rowTable;
}
function calcularJuros() {
  document.getElementById("tBody").innerHTML = " ";
  rowTable.map(addTableJuros);
}

function ordNome() {
  rowTable.sort(dynamicSort("nome"));
  let grupo = grupoPor(rowTable, "nome");
  let array = tableGrupo(rowTable, "nome", grupo);
  document.getElementById("tBody").innerHTML = " ";
  array.map(addTableNome);
  //rowTable.map(addTableJuros);
}

function ordData() {
    rowTable.sort(dynamicSort("data"));
    let grupo = grupoPor(rowTable, "data");
    let array = tableGrupo(rowTable, "data", grupo);
    document.getElementById("tBody").innerHTML = " ";
    array.map(addTableData);
}

function dynamicSort(property) {
  let sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    let result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}
function grupoPor(rowtable, obj) {
  return rowtable.reduce(function (arr, item) {
    if (!arr[item[obj]]) {
      arr[item[obj]] = [];
    }
    arr[item[obj]].push(item);
    return arr;
  }, {});
}

function tableGrupo(rowtable, obj) {
  let grupo = grupoPor(rowtable, obj);
  let chave = Object.keys(grupo);
  let vetor = chave.map((key, index) => {
    return grupo[chave[index]];
  });
  let valores = vetor.map((q, w, e) => {
    return q.map((tipo) => parseFloat(tipo.valor));
  });
  valores = valores.map((q) =>
    q.reduce((acumulador, elemento) => (acumulador += elemento), 0)
  );
  let array = [];
  array = chave.map((a) => []);
  array = array.map((el, id) => {
    let tmp = [];
    tmp.push(chave[id]);
    tmp.push(valores[id]);
    return tmp;
  });
  return array;
}

function addTableNome(el, id) {
  let tbody = document.getElementById("tBody");
  tbody.innerHTML =
    tbody.innerHTML +
    '<td colspan="4">' +
    el[0] +
    "</td><td>Total do cliente</td><td>" +
    real(el[1]) +
    "</td>";
    let grupo = grupoPor(rowTable, "nome");
    let chave = Object.keys(grupo);
    grupo[chave[id]].map(addTableJuros);
}
function addTableData(el, id) {
    let tbody = document.getElementById("tBody");
    tbody.innerHTML =
      tbody.innerHTML +
      '<td></td><td>' +
      el[0] +
      "</td><td></td><td></td><td>Total da data</td><td>" +
      real(el[1]) +
      "</td>";
      let grupo = grupoPor(rowTable, "nome");
      let chave = Object.keys(grupo);
      grupo[chave[id]].map(addTableJuros);
  }
/* function ordGrupo(rowtable, obj) {
    let a = grupoPor(rowtable, obj);
    a = Object.keys(a)
      .sort()
      .reduce(function (acc, key) {
        acc[key] = a[key];
        return acc;
      }, {});
    a = Object.entries(a).map((e) => ({ [e[0]]: e[1] }));
    return a;
  } */
