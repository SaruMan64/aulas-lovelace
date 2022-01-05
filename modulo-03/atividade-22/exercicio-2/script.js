function fontUpper() {
  let p = document.querySelector("p");
  p.style.fontSize = fontSize(0.1) + "rem";
}

function fontLower() {
  let p = document.querySelector("p");
  p.style.fontSize = fontSize(-0.1) + "rem";
}

const fontSize = (function () {
  let size = 1;
  return (x) => {
    size += x;
    if (size >= 0.5 && size <= 5) {
      return parseFloat(size.toFixed(1));
    } else {
      return parseFloat((size += -x).toFixed(1));
    }
  };
})();
