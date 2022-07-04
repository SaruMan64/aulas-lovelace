import { Account } from "../models";
import { GenerateNumberData } from "../validators/account";
import { v4 } from "uuid";

class GenerateAccountData {
  public async execute(id: string): Promise<Account> {
    const account = new GenerateNumberData();
    const agency = new GenerateNumberData();
    return {
      id: v4(),
      agency_number: agency.gerateNumber(4, "agency"),
      agency_verification_code: agency.gerateDV(),
      account_number: account.gerateNumber(4, "account"),
      account_verification_code: account.gerateDV(),
      balance: "0",
      user_id: id,
    } as Account;
  }
}

export { GenerateAccountData };
