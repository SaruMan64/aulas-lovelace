//const mf = require("./mod-fetch");

const mf = {
  fetchPOST: async function (_URL, _dataAppend) {
    const URL = _URL;
    const dataAppend = _dataAppend;
    const fetchInit = await fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataAppend),
    });
    return fetchInit;
  },

  fetchGET: async function (_URL, _dataAppend = "") {
    const URL = _URL;
    const dataAppend = _dataAppend;
    const fetchInit = await fetch(URL + dataAppend, {
      method: "GET",
    });
    const fetchInitJson = await fetchInit.json();
    return fetchInitJson;
  },
};

async function anniversary() {
  const month = document.getElementById("anniversary").value;
  const data = await mf.fetchGET(
    "http://localhost:4000/anniversary?month=",
    month
  );
  console.log(data);
  document.querySelector("pre").innerHTML = JSON.parse(
    JSON.stringify(data, null, 2)
  );
}
//function employees() {}
async function extension() {
  const data = await mf.fetchGET("http://localhost:4000/extension");
  console.log(data);
  document.querySelector("pre").innerHTML = JSON.parse(
    JSON.stringify(data, null, 2)
  );
}

const dataFunctions = {
  birth: function (data) {
    //headers
    let headName = document.getElementById("firstHeader");
    headName.innerHTML = "Nome";
    let headbirth = document.getElementById("secondHeader");
    headbirth.innerHTML = "Aniversário";
    //body
    response.innerHTML = "";
    data.forEach((element) => {
      let row = document.createElement("tr");
      let cellName = document.createElement("td");
      cellName.appendChild(document.createTextNode(element.name));
      let cellBirth = document.createElement("td");
      cellBirth.appendChild(document.createTextNode(element.birth));
      row.appendChild(cellName);
      row.appendChild(cellBirth);
      response.appendChild(row);
    });
  },
};
