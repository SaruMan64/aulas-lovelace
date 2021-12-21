function sortear(callback) {
  callback(6, 1000);
  document.querySelector("h2").innerHTML = "Valores Sorteados";
}

function random(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

function arrayRandom(n) {
  let i = 0;
  let arr = [];
  let r;

  while (i < n) {
    r = random(1, 60);
    if (!arr.includes(r)) {
      arr.push(r);

      i++;
    }
  }
  return arr;
}

function printArray(n, ms) {
  let numeros = document.getElementById("numeros");
  numeros.innerHTML = "";
  let i = 0;
  let arr = [];
  arr = arrayRandom(n);
  let time = setInterval(() => {
    numeros.innerHTML = numeros.innerHTML + "<p>" + arr[i] + "</p>";
    i = i + 1;
    if (i === n) {
      clearInterval(time);
    }
  }, ms);
}
