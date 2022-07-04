import * as dotenv from "dotenv";

dotenv.config();

const config = {
  SERVER_PORT: parseInt(String(process.env.SERVER_PORT), 10) || 3333,
  POSTGRES: {
    CONNECTION_STRING: process.env.DBPG_STRING,
    HOST: process.env.DBPG_HOST,
    DATABASE: process.env.DBPG_DATABASE,
    PORT: process.env.DBPG_PORT,
    USER: process.env.DBPG_USER,
    PASSWORD: process.env.DBPG_PASSWORD,
  },
};

export { config };
