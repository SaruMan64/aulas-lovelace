import { APIResponse, MakeTransfer } from "../models";
import { ExceptionTreatment, FeesTax } from "../utils";
import { GenerateNumberData } from "../validators/account";
import { Balance } from "../clients/dao/postgres/balance";
import { AccountsTable } from "../clients/dao/postgres/accounts";
import { TransactionsTable } from "../clients/dao/postgres/transactions";
import { v4 } from "uuid";

class MakeTransferService {
  private accountsTable = AccountsTable;
  private transactionsTable = TransactionsTable;
  private updateBalance = Balance;
  private feesTax = FeesTax;

  public async execute(transfer: MakeTransfer): Promise<APIResponse> {
    try {
      //console.log("transfer", transfer);

      const agency_number_to = new GenerateNumberData();
      agency_number_to.numbers = transfer.originAccount.agency_number;
      agency_number_to.dv = transfer.originAccount.agency_verification_code;
      agency_number_to.typeNumber = "agency";
      const account_number_to = new GenerateNumberData();
      account_number_to.numbers = transfer.originAccount.account_number;
      account_number_to.dv = transfer.originAccount.account_verification_code;
      account_number_to.typeNumber = "account";

      const agency_number_from = new GenerateNumberData();
      agency_number_from.numbers = transfer.destinyAccount.agency_number;
      agency_number_from.dv = transfer.destinyAccount.agency_verification_code;
      agency_number_from.typeNumber = "agency";
      const account_number_from = new GenerateNumberData();
      account_number_from.numbers = transfer.destinyAccount.account_number;
      account_number_from.dv =
        transfer.destinyAccount.account_verification_code;
      account_number_from.typeNumber = "account";

      if (
        !agency_number_to.validate() ||
        !agency_number_to.validate() ||
        !agency_number_from.validate() ||
        !agency_number_from.validate()
      ) {
        throw new Error(`400: 400: Error number Accounts`);
      }

      const existToAccount = await new this.accountsTable().get(
        transfer.originAccount
      );

      //console.log("existToAccount", existToAccount);

      const existFromAccount = await new this.accountsTable().get(
        transfer.destinyAccount
      );

      //console.log("existFromAccount", existFromAccount);

      if (!existToAccount || !existFromAccount) {
        return {
          data: {},
          messages: ["one of the accounts dosent exist"],
        } as APIResponse;
      }

      const transferValue = new this.feesTax().transfer(Number(transfer.value));

      //console.log("transferValue", transferValue);

      const originAccountBalance = await new this.updateBalance().get(
        existToAccount
      );

      //console.log("originAccountBalance", originAccountBalance);

      const destinyAccountBalance = await new this.updateBalance().get(
        existFromAccount
      );

      //console.log("destinyAccountBalance", destinyAccountBalance);

      const updatedOriginAccount = await new this.updateBalance().update(
        transfer.originAccount,
        originAccountBalance,
        -1 * transferValue.value
      );

      //console.log("updatedOriginAccount", updatedOriginAccount);

      const updatedDestinyAccount = await new this.updateBalance().update(
        transfer.destinyAccount,
        destinyAccountBalance,
        Number(transfer.value)
      );

      //console.log("updatedDestinyAccount", updatedDestinyAccount);

      const validTransfer: MakeTransfer = {
        id: v4(),
        originAccount: existToAccount,
        destinyAccount: existFromAccount,
        value: transfer.value,
        type: "transfer",
        date: new Date().toString(),
      };

      //console.log("validTransfer", validTransfer);

      const insertedTransaction =
        await new this.transactionsTable().makeTransfer(
          validTransfer as MakeTransfer,
          transferValue.fee.toString()
        );

      //console.log("insertedTransaction", insertedTransaction);

      if (insertedTransaction) {
        return {
          data: {
            validTransfer: {
              value: validTransfer.value,
              fee: transferValue.fee,
              type: validTransfer.type,
              date: validTransfer.date,
            },
            updated: {
              origin_balance: updatedOriginAccount.balance,
              destiny_balance: updatedDestinyAccount.balance,
            },
          },
          messages: [],
        } as APIResponse;
      }

      return {
        data: {},
        messages: ["Error Account"],
      } as APIResponse;
    } catch (error) {
      throw new ExceptionTreatment(error as Error, 500, "Error Account");
    }
  }
}

export { MakeTransferService };
