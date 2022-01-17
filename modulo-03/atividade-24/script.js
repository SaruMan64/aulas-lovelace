function calcProduto() {
  const numa = document.getElementById("number-a").value;
  const numb = document.getElementById("number-b").value;
  const numc = document.getElementById("number-c").value;
  const numd = document.getElementById("number-d").value;

  let arr = [];
  arr.push(numa);
  arr.push(numb);
  arr.push(numc);
  arr.push(numd);

  function produto(a, b, c, d) {
    return a * b * c * d;
  }

  document.getElementById("produto").innerHTML =
    "O produto de " +
    arr[0] +
    " x " +
    arr[1] +
    " x " +
    arr[2] +
    " x " +
    arr[3] +
    " é igual a " +
    produto(...arr);
    return produto(...arr);
}

function concatArray() {
  const vetor1 = [1, 2, 3, 4];
  const vetor2 = ["um", "dois", "três", "quatro"];
  const vetor3 = [...vetor1, ...vetor2];

  document.getElementById("vetor1").innerHTML = JSON.stringify(vetor1, null, 2);
  document.getElementById("vetor2").innerHTML = JSON.stringify(vetor2, null, 2);
  document.getElementById("vetor3").innerHTML = JSON.stringify(vetor3, null, 2);

  return vetor3;
}

function maxRandom() {
  let arr = [];
  function randomMinMax(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }
  for (let i = 0; i < 10; i++) {
    arr.push(randomMinMax(1, 100));
  }
  document.getElementById("vetorRandom").innerHTML = JSON.stringify(
    arr,
    null,
    2
  );
  document.getElementById("maxNumber").innerHTML = "O maior número do vetor é " + Math.max(...arr);

    return Math.max(...arr);

}

concatArray();
maxRandom();