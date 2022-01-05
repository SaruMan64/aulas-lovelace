function calc() {
  if (!form.checkValidity()) {
    return false;
  }

  function init() {
    const input = document.getElementById("number");
    const p = document.querySelector("p");

    function multiply() {
      function createMultiplier(x) {
        return function (y) {
          return x * y;
        };
      }

      const multiplyBy5 = createMultiplier(5);
      p.innerHTML = multiplyBy5(input.value);
    }
    return multiply();
  }

  init();
}
