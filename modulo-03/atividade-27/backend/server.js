// my modules
const anniversary = require("./components/anniversary");
const append = require("./components/append");
const employees = require("./components/employees");
const extension = require("./components/extension-number");

// libraries
const cors = require("cors");
const express = require("express");
const app = express();
const port = 4000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "<h1>Acesse os modulos</h1><p>http://localhost:4000/anniversary/?month=(numero de 1 a 12)</p><p>http://localhost:4000/empoyees/?sector=(nome do setor)</p><p>http://localhost:4000/extension</p>"
  );
});

//localhost:4000/anniversary/?month=12

app.get("/anniversary", async (req, res) => {
  const month = req.query.month;
  const anniversaryJSON = await anniversary(month);

  res.send(anniversaryJSON);
});

app.get("/employees", async (req, res) => {
  const sector = req.query.sector;
  const employeesJSON = await employees(sector);

  res.send(employeesJSON);
});

app.get("/extension", async (req, res) => {
  //const number = req.query.number;
  const extensionJSON = await extension();

  res.send(extensionJSON);
});

app.post("/append", async (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
