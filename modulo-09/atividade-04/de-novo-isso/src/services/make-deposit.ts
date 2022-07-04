import { APIResponse, MakeDeposit } from "../models";
import { ExceptionTreatment, FeesTax } from "../utils";
import { GenerateNumberData } from "../validators/account";
import { Balance } from "../clients/dao/postgres/balance";
import { AccountsTable } from "../clients/dao/postgres/accounts";
import { TransactionsTable } from "../clients/dao/postgres/transactions";
import { v4 } from "uuid";

class MakeDepositService {
  private feesValues = FeesTax;
  private accountsTable = AccountsTable;
  private transactionsTable = TransactionsTable;
  private balance = Balance;

  public async execute(deposit: MakeDeposit): Promise<APIResponse> {
    try {
      //console.log("deposit", deposit);

      const agency_number = new GenerateNumberData();
      agency_number.numbers = deposit.account.agency_number;
      agency_number.dv = deposit.account.agency_verification_code;
      agency_number.typeNumber = "agency";
      const account_number = new GenerateNumberData();
      account_number.numbers = deposit.account.account_number;
      account_number.dv = deposit.account.account_verification_code;
      agency_number.typeNumber = "account";

      //console.log("account", deposit.account);
      if (!account_number.validate() || !agency_number.validate()) {
        //console.log(`400: ${account_number.errors} ${agency_number.errors}`);
        throw new Error(`400: Error number Account`);
      }

      const account = await new this.accountsTable().get(deposit.account);

      //console.log("account", account);

      const depositValue = new this.feesValues().deposit(Number(deposit.value));

      //console.log("depositValue", depositValue);

      const balance = await new this.balance().get(account);

      //console.log("balance", balance);

      const updated = await new this.balance().update(
        account,
        balance,
        depositValue.value
      );

      //console.log("updated", updated);

      const validDeposit: MakeDeposit = {
        id: v4(),
        account: account,
        value: depositValue.value.toString(),
        type: "deposit",
        date: new Date().toString(),
      };

      //console.log("validDeposit", validDeposit);

      const insertedTransaction =
        await new this.transactionsTable().makeDeposit(
          validDeposit as MakeDeposit,
          depositValue.fee.toString()
        );

      //console.log("insertedTransaction", insertedTransaction);

      if (insertedTransaction) {
        return {
          data: {
            validDeposit: validDeposit.account.account_number,
            updated: updated.balance,
            fee: depositValue.fee,
          },
          messages: [],
        } as APIResponse;
      }

      return {
        data: {},
        messages: ["an error occurred while making deposit"],
      } as APIResponse;
    } catch (error) {
      throw new ExceptionTreatment(
        error as Error,
        500,
        "an error occurred while making deposit"
      );
    }
  }
}

export { MakeDepositService };
