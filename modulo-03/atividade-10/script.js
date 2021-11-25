var change = false;
var operator;

function Operator(op){
    operator = op;
    switch (op){
        case "plus":
            document.getElementById("operator").innerHTML = "+";
            break;
        case "minus":
            document.getElementById("operator").innerHTML = "-";
            break;
        case "times":
            document.getElementById("operator").innerHTML = "*";
            break;
        case "divided":
            document.getElementById("operator").innerHTML = "/";
            break;
        case "remainder":
            document.getElementById("operator").innerHTML = "R/";
            break;
        case "power":
            document.getElementById("operator").innerHTML = "^";
            break;
        case "percentage":
            document.getElementById("operator").innerHTML = "%";
            break;
    }
}
function equal(){
    switch (operator){
        case "plus":
            plus();
            break;
        case "minus":
            minus();
            break;
        case "times":
            times();
            break;
        case "divided":
            divided();
            break;
        case "remainder":
            remainder();
            break;
        case "power":
            power();
            break;
        case "percentage":
            percentage();
            break;
    }
}
function plus() {
  const v = document.getElementById("form");
  if (v.checkValidity()) {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    document.getElementById("answer").value = parseFloat(x) + parseFloat(y);
  }
}
function minus() {
  const v = document.getElementById("form");
  if (v.checkValidity()) {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    document.getElementById("answer").value = parseFloat(x) - parseFloat(y);
  }
}
function times() {
  const v = document.getElementById("form");
  if (v.checkValidity()) {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    document.getElementById("answer").value = parseFloat(x) * parseFloat(y);
  }
}
function divided() {
  const v = document.getElementById("form");
  if (v.checkValidity()) {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    document.getElementById("answer").value = parseFloat(x) / parseFloat(y);
  }
}
function remainder() {
  const v = document.getElementById("form");
  if (v.checkValidity()) {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    document.getElementById("answer").value = parseFloat(x) % parseFloat(y);
  }
}
function power() {
  const v = document.getElementById("form");
  if (v.checkValidity()) {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    document.getElementById("answer").value = parseFloat(x) ** parseFloat(y);
  }
}
function percentage() {
  const v = document.getElementById("form");
  if (v.checkValidity()) {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    document.getElementById("answer").value =
      (parseFloat(x) * parseFloat(y)) / 100;
  }
}
function addNumber(number) {
  if (change == false) {
    let x = document.getElementById("x").value;
    let value = x + number;
    document.getElementById("x").value = value;
  } 
  else if (change == true) {
    let y = document.getElementById("y").value;
    let value = y + number;
    document.getElementById("y").value = value;
  }
}