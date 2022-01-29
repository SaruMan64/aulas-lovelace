//import { Calculadora } from "./module/Calculadora.js";

class Calculadora {
  constructor() {
    this.operand1 = null;
    this.operand2 = null;
    this.operation = null;
  }

  setOperand1(_operand1) {
    _operand1 = Number(_operand1);
    if (typeof _operand1 !== "number") {
      console.error(`The operand 1 (${_operand1}) is not a number.`);
      return false;
    }
    switch (this.operand2) {
      case null:
        this.operand1 = _operand1;
        return true;
      default:
        this.operand1 = _operand1;
        //this.operand1 = this.operand1 * 10 + _operand1;
        return true;
    }
  }
  setOperand2(_operand2) {
    _operand2 = Number(_operand2);
    if (typeof _operand2 !== "number") {
      console.error(`The operand 2 (${_operand2}) is not a number.`);
      return false;
    }
    switch (this.operand2) {
      case null:
        this.operand2 = _operand2;
        return true;
      default:
        this.operand2 = _operand2;
        //this.operand2 = this.operand2 * 10 + _operand2;
        return true;
    }
  }
  setOperation(_operation) {
    let typeOperation = ["+", "-", "*", "/"];
    if (typeOperation.filter((el) => el === _operation).length !== 1) {
      console.error(
        `The ${_operation} operator is wrong, one of these is valid: ${typeOperation}.`
      );
      return false;
    }
    if (this.operation === null) {
      this.operation = _operation;
      return true;
    }
  }
  getResult() {
    switch (this.operation) {
      case "+":
        return this.operand1 + this.operand2;
      case "-":
        return this.operand1 - this.operand2;
      case "/":
        return this.operand1 / this.operand2;
      case "*":
        return this.operand1 * this.operand2;
      default:
        return "Error in operator.";
    }
  }
  clearCalculator() {
    this.operand1 = null;
    this.operand2 = null;
    this.operation = null;
  }
}

const calc = new Calculadora();

const btnNumber = document.querySelectorAll(".btn.number");
let count = 0;
let num1 = "";
let num2 = "";
let operation;
const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");

btnNumber.forEach((el) =>
  el.addEventListener("click", (event) => {
    switch (count) {
      case 0:
        //console.log(event.target.value);
        num1 += event.target.value;
        display2.innerHTML = num1;
        break;
      case 1:
        //console.log(event.target.value);
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

const btn = document.querySelectorAll(".btn");
btn.forEach((el) =>
  el.addEventListener("click", (event) => {
    const mysound = document.getElementById("btn-sound");
    mysound.autoplay = "true";
    mysound.load();
  })
);
