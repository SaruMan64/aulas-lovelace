const formInput = () => ({
  nome: document.getElementById("inputName").value.trim(),
  data: document.getElementById("inputDate").value.replace(/-/g, "/"),
  valor: document.getElementById("inputValue").value,
});
let rowTable = [];

function reverseData(str) {
  return str.split("/").reverse().join("/");
}

function addTableForm(el, id){
    if(id == (rowTable.length - 1)){
    const tmp = "</td><td>";
    let tbody = document.getElementById("tBody");
    tbody.innerHTML = tbody.innerHTML + "<tr><td>" + el.nome + tmp + reverseData(el.data) + tmp + real(Number(el.valor)) + tmp + "" + tmp + "" + tmp + "" + "</td></tr>";
    }
}

function addTableJuros(el, id){
    const tmp = "</td><td>";
    let tbody = document.getElementById("tBody");
    tbody.innerHTML = tbody.innerHTML + "<tr><td>" + el.nome + tmp + reverseData(el.data) + tmp + real(Number(el.valor)) + tmp + diasDeAtraso(el.data) + tmp + (jurosPorCento(el.data) * 100).toFixed(1) + "%" + tmp + real(valorTotal(el.data, el.valor)) + "</td></tr>";
}

function diasDeAtraso(data){
    const dataAtual = new Date((new Date(Date())).getFullYear(), (new Date(Date())).getMonth(), (new Date(Date())).getDate());
    const dataCompra = new Date(data);
    let diasDeAtraso = (dataAtual.getTime() - dataCompra.getTime()) / (1000 * 3600 * 24);
    
    if (diasDeAtraso >= 0){
        return Number(diasDeAtraso.toFixed(0));
    }
    else{
        return "Dentro do Prazo";
    }
}

function jurosPorCento(diasAt){
    if(diasDeAtraso(diasAt) == "Dentro do Prazo"){
        return 0;
    }
    let juros = 0.02 + (0.001 * diasDeAtraso(diasAt));
    return juros;
}

function valorTotal(diasAt, valor){
    let valorTotal = (jurosPorCento(diasAt) * parseFloat(valor)) + parseFloat(valor);
    return valorTotal;
}

function real(valor){
    return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function adicionar() {
    if (!document.getElementById("form").checkValidity()){
        return false;
    }
    rowTable.push(formInput());
    document.getElementById("form").reset()
    rowTable.map(addTableForm)
    return rowTable;
}

function limpar(){
    rowTable = [];
    document.getElementById("tBody").innerHTML = " ";
    return rowTable;
}
function calcularJuros(){
    document.getElementById("tBody").innerHTML = " ";
    rowTable.map(addTableJuros);
}