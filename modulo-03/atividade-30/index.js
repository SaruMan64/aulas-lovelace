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


$(document).ready(function () {

  const calc = new Calculadora();

  let count = 0;
  let num1 = "";
  let num2 = "";
  let operation;
  const display1 = $("#display1");
  const display2 = $("#display2");;

  $('.btn.number').on('click', function () {
    switch (count) {
      case 0:
        //console.log($(this).attr('value'));
        num1 += $(this).attr('value');
        display2.text(num1);
        break;
      case 1:
        //console.log($(this).attr('value'));
        num2 += $(this).attr('value');
        display2.text(num2);
        break;
    }
  });

  $('.btn.operation').on('click', function () {
    if (count === 0) {
      calc.setOperand1(num1);
      operation = $(this).attr('value');
      //console.log($(this).attr('value'));
      calc.setOperation(operation);
      display1.text(`${num1} ${operation}`);
      display2.text('');
      count = 1;
    }
  });

  $('.btn.clear').on('click', function () {
    calc.clearCalculator();
    num1 = "";
    num2 = "";
    count = 0;
    display1.text("");
    display2.text("");
  });

  $('.btn.result').on('click', function () {
    calc.setOperand2(num2);
    let result = calc.getResult();
    if (result.toString().length <= 14) {
      display1.text(`${num1} ${operation} ${num2}`)
      display2.text(result);
      //console.log("result " + result);
      num1 = result;
      calc.setOperand1(result);
    }
  });

  $("body").prepend(`
  <audio id="btn-sound">
      <source
        src="https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-216.mp3"
      />
    </audio>
  `);

  $('.btn').on('click', function () {
    const mysound = document.getElementById("btn-sound");
    mysound.autoplay = "true";
    mysound.load();
  });
});