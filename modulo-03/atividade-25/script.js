function sortInfArg(...arrArg) {
  console.log(arrArg);
  document.getElementById("arg").innerHTML = JSON.stringify(arrArg, null, 2);
  let str = [];
  let num = arrArg.filter((el) => {
    if (isNaN(Number(el))) {
      str.push(el);
    } else {
      return el;
    }
  });
  num.sort((a, b) => {
    return a - b;
  });
  str = str.sort((a, b) => {
    return a.localeCompare(b);
  });
  document.getElementById("arr").innerHTML = JSON.stringify(
    [...num, ...str],
    null,
    2
  );
  return [...num, ...str];
}

console.log(
  sortInfArg(
    1,
    20,
    "amor",
    3,
    "sorvete",
    40,
    5,
    "bolo",
    60,
    7,
    8,
    "Banana",
    9,
    10,
    "Abacate",
    "4",
    "6",
    "2"
  )
);
