import { Client } from "pg";
import { config } from "../../../config";

class PostgresDB {
  protected client: Client;

  public constructor() {
    this.client =
      new Client({
        connectionString: config.POSTGRES.CONNECTION_STRING,
        ssl: { rejectUnauthorized: false },
      }) ||
      new Client({
        user: config.POSTGRES.USER,
        password: config.POSTGRES.PASSWORD,
        database: config.POSTGRES.DATABASE,
        port: Number(config.POSTGRES.PORT),
        host: config.POSTGRES.HOST,
        ssl: { rejectUnauthorized: false },
      });
  }
}

export { PostgresDB };
