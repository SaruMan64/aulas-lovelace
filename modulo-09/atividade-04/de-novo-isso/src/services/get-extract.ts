import { APIResponse, Account } from "../models";
import { ExceptionTreatment } from "../utils";
import { GenerateNumberData } from "../validators/account";
import { AccountsTable } from "../clients/dao/postgres/accounts";
import { TransactionsTable } from "../clients/dao/postgres/transactions";

class GetExtractService {
  private accountsTable = AccountsTable;
  private transactionsTable = TransactionsTable;

  public async execute(account: Account): Promise<APIResponse> {
    try {
      const agency_number = new GenerateNumberData();
      agency_number.numbers = account.agency_number;
      agency_number.dv = account.agency_verification_code;
      agency_number.typeNumber = "agency";
      const account_number = new GenerateNumberData();
      account_number.numbers = account.account_number;
      account_number.dv = account.account_verification_code;
      agency_number.typeNumber = "account";

      //console.log("account", account);
      if (!account_number.validate() || !agency_number.validate()) {
        //console.log(`400: ${account_number.errors} ${agency_number.errors}`);
        throw new Error(`400: Error number Account`);
      }

      //console.log("lendo tabla");
      const accountExtract = await new this.accountsTable().get(
        account as Account
      );

      //console.log("accountExtract", accountExtract);

      const extract = await new this.transactionsTable().get(accountExtract.id);

      //console.log("extract", extract);

      if (extract) {
        const data = {
          ...accountExtract,
          extract: extract
            .map((data: any) => ({
              date: data.date,
              value: data.value,
              type: data.type,
              fee: data.fee,
            }))
            .reverse(),
        };
        //console.log(data);
        
        return {
          data: data,
          messages: [],
        } as APIResponse;
      }

      return {
        data: {},
        messages: ["there is no transaction for this user"],
      } as APIResponse;
    } catch (error) {
      throw new ExceptionTreatment(
        error as Error,
        500,
        "an error occurred while getting extract from the user"
      );
    }
  }
}

export { GetExtractService };
