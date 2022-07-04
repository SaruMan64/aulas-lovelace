import { APIResponse, MakeDraft } from "../models";
import { ExceptionTreatment, FeesTax } from "../utils";
import { GenerateNumberData } from "../validators/account";
import { Balance } from "../clients/dao/postgres/balance";
import { AccountsTable } from "../clients/dao/postgres/accounts";
import { TransactionsTable } from "../clients/dao/postgres/transactions";
import { v4 } from "uuid";

class MakeDraftService {
  private feesValues = FeesTax;
  private accountsTable = AccountsTable;
  private transactionsTable = TransactionsTable;
  private balance = Balance;

  public async execute(draft: MakeDraft): Promise<APIResponse> {
    try {
      //console.log("draft", draft);

      const agency_number = new GenerateNumberData();
      agency_number.numbers = draft.account.agency_number;
      agency_number.dv = draft.account.agency_verification_code;
      agency_number.typeNumber = "agency";
      const account_number = new GenerateNumberData();
      account_number.numbers = draft.account.account_number;
      account_number.dv = draft.account.account_verification_code;
      agency_number.typeNumber = "account";

      //console.log("account", draft.account);
      if (!account_number.validate() || !agency_number.validate()) {
        throw new Error(`400: Error number Account`);
      }

      const account = await new this.accountsTable().get(draft.account);

      //console.log("account", account);

      const draftValue = new this.feesValues().draft(Number(draft.value));

      //console.log("draftValue", draftValue);

      const balance = await new this.balance().get(account);

      //console.log("balance", balance);

      const updated = await new this.balance().update(
        account,
        balance,
        -draftValue.value
      );

      //console.log("updated", updated);

      const validDraft: MakeDraft = {
        id: v4(),
        account: account,
        value: draftValue.value.toString(),
        type: "draft",
        date: new Date().toString(),
      };

      //console.log("validDraft", validDraft);

      const insertedTransaction = await new this.transactionsTable().makeDraft(
        validDraft as MakeDraft,
        draftValue.fee.toString()
      );

      //console.log("insertedTransaction", insertedTransaction);

      if (insertedTransaction) {
        return {
          data: {
            validDraft: validDraft.account.account_number,
            updated: updated.balance,
            fee: draftValue.fee,
          },
          messages: [],
        } as APIResponse;
      }

      return {
        data: {},
        messages: ["an error occurred while making draft"],
      } as APIResponse;
    } catch (error) {
      throw new ExceptionTreatment(
        error as Error,
        500,
        "an error occurred while making draft"
      );
    }
  }
}

export { MakeDraftService };
