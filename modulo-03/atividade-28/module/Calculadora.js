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
};

export {Calculadora};