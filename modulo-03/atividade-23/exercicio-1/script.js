function calc() {
  if (!form.checkValidity()) {
    return false;
  }

  const number = document.getElementById("number");

  function fatorial(_n) {
    let n = _n;
    if (n === 0) {
      return true;
    }
    //console.log(n);
    return n * fatorial(n - 1);
  }

  //console.log(fatorial(number.value));

  document.querySelector("p").innerHTML =
    "Valor do fatorial de " + number.value + " é " + fatorial(number.value);
}
