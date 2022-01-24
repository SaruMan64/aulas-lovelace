module.exports = function active(_id) {
  const id = _id;
  const btn = document.getElementById(id);

  switch (id) {
    case "consult":
      console.log("ai");
      btn.setAttribute("class", "btn-nav active");
      document.getElementById("append").setAttribute("class", "btn-nav");
      break;
    case "append":
      console.log("ui");
      btn.setAttribute("class", "btn-nav active");
      document.getElementById("consult").setAttribute("class", "btn-nav");
      break;
  }
};


/* function active(_id) {
  const id = _id;
  const btn = document.getElementById(id);

  switch (id) {
    case "consult":
      btn.setAttribute("class", "btn-nav bnt-active");
      btn.hidden = false;
      document.getElementById("append").setAttribute("class", "btn-nav");
      document.getElementById("main-append").hidden = true;
      break;
    case "append":
      btn.setAttribute("class", "btn-nav bnt-active");
      btn.hidden = false;
      document.getElementById("consult").setAttribute("class", "btn-nav");
      document.getElementById("main-consult").hidden = true;
      break;
  }
} */