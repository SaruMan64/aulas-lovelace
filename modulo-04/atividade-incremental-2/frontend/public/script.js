const input = document.getElementById("input");
const select = document.getElementById("select");
let time = 0;

async function getFetch(_url, _req) {
  const url = _url;
  const req = _req;
  const response = await fetch(
    "http://localhost:44440/" + url + JSON.stringify(req),
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return data;
}

function reqConsultar() {
  if (!form.checkValidity()) {
    return false;
  }
  if (document.getElementById("select").value === "false") {
    return false;
  }

  const input = document.getElementById("input");
  const select = document.getElementById("select");

  consultar(select.value, input.value);
}

async function consultar(_type, _value) {
  const consulta = [_type, _value];
  const url = "consulta/";
  const resFeach = await getFetch(url, consulta);
  if (!resFeach) {
    return false;
  }
  //const data = await resFeach.json;
  addTable(resFeach);
}

async function addTable(_obj) {
  const data = await _obj;
  const table = document.getElementById("table");
  const tbody = document.getElementById("tbody");
  document.getElementById("insert").hidden = true;
  table.hidden = false;
  tbody.innerHTML = "";
  data.forEach((el) => {
    tbody.innerHTML += `
      <tr>
         <th scope="row">${el.id}</th>
         <td>${el.name}</td>
         <td>${el.email}</td>
         <th scope="row" class="delete">
           <button class="btn-delete" onclick="deletePerson(${el.id})">Delete</button>
         </th>
      </tr>
   `;
  });
}

async function incFetch(_type, _value) {
  const consulta = [_type, _value];
  const url = "incremental/";
  const resFeach = await getFetch(url, consulta);

  dataList(_type, resFeach);
}

async function dataList(_type, _json) {
  const type = _type;
  const json = await _json;
  const droplist = document.getElementById("droplist");
  droplist.innerHTML = "";
  json.forEach((el) => {
    droplist.innerHTML += `
     <option value="${el[type]}"> 
     `;
  });
}

function inserir() {
  document.getElementById("insert").hidden = false;
  document.getElementById("table").hidden = true;
}

async function append() {
  const nameAp = document.getElementById("nameAppend").value;
  const emailAp = document.getElementById("emailAppend").value;
  const obj = {
    name: nameAp,
    email: emailAp,
  };
  try {
    const resFeach = await fetch("http://localhost:44440/append", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: obj,
    });
    console.log(resFeach);
  } catch (e) {
    console.error(e);
  }
}

async function deletePerson(_id) {
  const id = _id;
  const resFeach = await fetch("http://localhost:44440/delete/" + id, {
    method: "DELETE",
  });
  document.location.reload(true);
}

input.addEventListener("input", function (evt) {
  const str = this.value.trim();
  if (!str || str.length === 0) {
    return false;
  }
  if (select.value === "false") {
    return false;
  }
  clearTimeout(time);
  setTimeout(() => {
    //console.log(str);
    incFetch(select.value, str);
  }, 2000);
});

input.addEventListener("click", function (evt) {
  const str = this.value.trim();
  if (!str || str.length === 0) {
    return false;
  }
  if (select.value === "false") {
    return false;
  }
  clearTimeout(time);
  setTimeout(() => {
    //console.log(str);
    incFetch(select.value, str);
  }, 2000);
});
