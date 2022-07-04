import { PostgresDB } from ".";
import { User } from "../../../models";

class UsersTable extends PostgresDB {
  public async insert(user: User): Promise<any> {
    try {
      await this.client.connect();
      //console.log("connected");
      //console.log("add new user", user);

      const insertUserQuery = `
      INSERT INTO public.users (
                    id,
                    name,
                    email,
                    birthdate,
                    password,
                    document
                    ) VALUES (
                      $1,
                      $2,
                      $3,
                      $4,
                      $5,
                      $6
                      ) RETURNING *
                      `;

      //console.log("query");
      const result = await this.client.query(insertUserQuery, [
        user.id,
        user.name,
        user.email,
        user.birthdate,
        user.password,
        user.document,
      ]);
      //console.log("consulta");

      //console.log("result", result.rows);

      this.client.end();

      if (result.rows.length !== 0) {
        //console.log("adicionado");
        return result.rows;
      }

      return false;
    } catch (error) {
      //console.log(error);
      this.client.end();
      throw new Error("503: service temporarily unavailable");
    }
  }

  public async get(user: User): Promise<any> {
    try {
      await this.client.connect();
      //console.log("connected");
      const getAccountQuery = `
            SELECT
                *
            FROM public.users
            WHERE
                document = $1
            `;

      const result = await this.client.query(getAccountQuery, [user.document]);

      this.client.end();

      if (result.rows.length !== 0) {
        return result.rows;
      }

      return false;
    } catch (error) {
      this.client.end();
      throw new Error("503: service temporarily unavailable");
    }
  }
}

export { UsersTable };
