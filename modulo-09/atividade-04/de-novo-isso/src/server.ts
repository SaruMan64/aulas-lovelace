import express from "express";
import routes from "./routes";

const app = express();
app.use(routes);
app.post("/test", (req, res) => {
  res.send("Its working");
});

export { app };
