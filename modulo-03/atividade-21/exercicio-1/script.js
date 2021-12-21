function pi(decimal) {
  let p = document.querySelector("p");
  p.innerHTML = "Casas do número PI."
  for(let i = 0; i <= decimal; i++){
      p.innerHTML = p.innerHTML + "<br />" + Math.PI.toFixed(i)
  }
}

function decimal(callback) {
  var decimal = prompt("Por favor insira seu nome.");
  callback(decimal);
}