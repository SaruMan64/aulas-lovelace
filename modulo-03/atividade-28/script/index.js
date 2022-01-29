import { Calculadora } from "./Calculadora.js";
const calc = new Calculadora();

const btnNumber = document.querySelectorAll(".btn.number");
let count = 0;
let num1 = "";
let num2 = "";
let operation;
let countResult = 0;
const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");

btnNumber.forEach((el) =>
  el.addEventListener("click", (event) => {
    switch (count) {
      case 0:
        console.log(event.target.value);
        num1 += event.target.value;
        display2.innerHTML = num1;
        break;
      case 1:
        console.log(event.target.value);
        num2 += event.target.value;
        display2.innerHTML = num2;
        break;
    }
  })
);

const bntOperation = document.querySelectorAll(".btn.operation");
bntOperation.forEach((el) =>
  el.addEventListener("click", (event) => {
    if (count === 0) {
      calc.setOperand1(num1);
      operation = event.target.value;
      //console.log(event.target.value);
      calc.setOperation(operation);
      display1.innerHTML = num1 + " " + operation;
      display2.innerHTML = "";
      count = 1;
    }
  })
);

const btnClear = document.querySelector(".btn.clear");
btnClear.addEventListener("click", (event) => {
  calc.clearCalculator();
  num1 = "";
  num2 = "";
  count = 0;
  display1.innerHTML = "";
  display2.innerHTML = "";
});

const btnResult = document.querySelector(".btn.result");
btnResult.addEventListener("click", (event) => {
  calc.setOperand2(num2);
  let result = calc.getResult();
  if (result.toString().length <= 14) {
    display1.innerHTML = num1 + " " + operation + " " + num2;
    display2.innerHTML = result;
    //console.log("result " + result);
    num1 = result;
    calc.setOperand1(result);
  }
});
