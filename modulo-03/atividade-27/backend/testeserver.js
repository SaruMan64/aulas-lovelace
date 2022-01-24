const anniversary = require("./components/anniversary");

const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

app.get("/", async (req, res) => {
  const anniversaryJSON = await anniversary(5);
  //console.log(banana);
  //console.log(abacate(5));
  res.json(anniversaryJSON);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
