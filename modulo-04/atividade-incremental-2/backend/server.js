const consult = require("./components/consult");
const incremental = require("./components/incremental");
const append = require("./components/append");
const deletePerson = require("./components/deletePerson");

const cors = require("cors");
const express = require("express");
const app = express();
const port = 44440;

app.use(cors());
app.use(express.json());

app.get("/consulta/:content", async (req, res) => {
  const objReq = JSON.parse(req.params.content);
  const resCliente = await consult(objReq);

  if (resCliente.length) {
    res.json(resCliente);
  } else {
    res.send("404");
  }
});

app.get("/incremental/:content", async (req, res) => {
  const incReq = JSON.parse(req.params.content);
  const resCliente = await incremental(incReq);

  if (resCliente.length) {
    res.json(resCliente);
  } else {
    res.send("404");
  }
});

app.post("/append", async (req, res) => {
  console.log(req.body);
  res.json(await append(req.body));
});

app.delete("/delete/:id", async (req, res) => {
  console.log(req.params.id);
  res.json(await deletePerson(req.params.id));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
