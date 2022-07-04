import { app } from "./server";
import { config } from "./config";
import { DbTest } from "./clients/dao/postgres/test";

app.listen(config.SERVER_PORT, () =>
  console.log(`server listening on port http://localhost:${config.SERVER_PORT}`)
);

new DbTest().execute().then(() => console.log("success"));
