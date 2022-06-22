import express from "express";

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => res.send("<h1>Go to <a href='http://localhost:4000/ping'>ping</a></h1>"));
app.get("/ping", (req, res) => res.send("pong"));

app.listen(PORT, () =>
  console.log(`Server is running here http://localhost:${PORT}`)
);

