function Write() {
  if (document.getElementById("forms").checkValidity()) {
    let input = document.getElementById("input");
    let text = document.getElementById("text");
    const phrase = "Eu não sou licenciado pra fazer nada";
    let remainderInput = 0;
    let eraseText = 0;
    let temp = null;
    remainderInput = input.value % 11;
    eraseText = input.value / 11;

    document.getElementById("text").innerHTML = null;

    if (parseInt(input.value) > 11) {
      for (let i = 1; i <= remainderInput; i++) {
        temp = text.innerHTML + phrase + "<br />";
        text.innerHTML = temp;
        document.getElementById("erase").innerHTML = parseInt(eraseText);
      }
    } else {
      for (let i = 1; i <= input.value; i++) {
        temp = text.innerHTML + phrase + "<br />";
        text.innerHTML = temp;
      }
    }
  }
}
