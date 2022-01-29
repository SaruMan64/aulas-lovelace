import {Calculadora} from "./Calculadora.js";
const calc = new Calculadora();

const btnNumber = document.querySelectorAll(".btn.number");
let count = 0;
let num1 = "";
let num2 = "";

btnNumber.forEach((el) =>
  el.addEventListener("click", (event) => {
    switch (count) {
      case 0:
        console.log(event.target.value);
        num1 += event.target.value;
        break;
      case 1:
        console.log(event.target.value);
        num2 += event.target.value;
        break;
    }
  })
);

const bntOperation = document.querySelectorAll(".btn.operation");
bntOperation.forEach((el) =>
  el.addEventListener("click", (event) => {
    if (count === 0) {
      calc.setOperand1(num1);
      console.log(event.target.value);
      calc.setOperation(event.target.value);
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
});

const btnResult = document.querySelector(".btn.result");
btnResult.addEventListener("click", (event) => {
  calc.setOperand2(num2);
  let result = calc.getResult();
  console.log("result " + result);
  calc.setOperand1(result);
});
