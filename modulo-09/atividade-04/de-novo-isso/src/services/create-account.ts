import { v4 } from "uuid";
import { CreateUserService } from ".";
import { APIResponse, Account, User } from "../models";
import { ExceptionTreatment } from "../utils";
import { AccountsTable } from "../clients/dao/postgres/accounts";
import { GenerateAccountData } from "../utils";

class CreateAccountService {
  private createUserService = CreateUserService;
  private accountsTable = AccountsTable;
  private generateAccountData = GenerateAccountData;

  public async execute(user: User): Promise<APIResponse> {
    try {
      const newUser = await new this.createUserService().execute(user);
      let newAccount = await new this.generateAccountData().execute(
        newUser.data.id
      );

      let existingAccount = await new this.accountsTable().get(newAccount);
      while (existingAccount) {
        newAccount = await new this.generateAccountData().execute(
          newUser.data.id
        );
        existingAccount = await new this.accountsTable().get(newAccount);
      }

      newAccount.id = v4();

      const insertedAccount = await new this.accountsTable().insert(
        newAccount as Account
      );
      const data = { ...newUser.data, account: insertedAccount[0] };
      delete data.id;
      delete data.password;
      delete data.account.id;
      delete data.account.user_id;
      delete data.account.balace;
      data.birthdate = String(data.birthdate).split("T")[0];

      //console.log(data);

      if (insertedAccount) {
        return {
          data: data,
          messages: [],
        } as APIResponse;
      }

      return {
        data: {},
        messages: ["an error occurred while creating account"],
      } as APIResponse;
    } catch (error) {
      throw new ExceptionTreatment(
        error as Error,
        500,
        "an error occurred while inserting account on database"
      );
    }
  }
}

export { CreateAccountService };
