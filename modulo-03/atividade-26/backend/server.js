// my modules
const anniversary = require("./components/anniversary");
const employees = require("./components/employees");
const extension = require("./components/extension-number");

const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>hello word!</h1>");
});

app.get("/anniversary", (req, res) => {
  const month = req.query.month;
  // console.log(month);
  // console.log(anniversary(month));
  res.send(anniversary(month));
});

app.get("/employees", (req, res) => {
  const sector = req.query.sector;
  res.send(employees(sector));
});

app.get("/extension", (req, res) => {
  //const number = req.query.number;
  res.send(extension());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
