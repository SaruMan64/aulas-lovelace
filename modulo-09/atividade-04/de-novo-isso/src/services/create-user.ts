import { APIResponse, User } from "../models";
import { ExceptionTreatment } from "../utils";
import { UserDataValidator } from "../validators/user/index";
import { UsersTable } from "../clients/dao/postgres/users";
import { v4 } from "uuid";

class CreateUserService {
  private userDataValidator = UserDataValidator;
  private usersTable = UsersTable;

  public async execute(user: User): Promise<any> {
    try {
      const validUserData = new this.userDataValidator(user);

      if (validUserData.errors) {
        throw new Error(`400: ${validUserData.errors}`);
      }

      const existingUser = await new this.usersTable().get(user);
      if (existingUser) {
        return {
          data: existingUser[0],
          messages: [],
        };
      }

      validUserData.user.id = v4();

      const insertedUser = await new this.usersTable().insert(
        validUserData.user as User
      );

      if (insertedUser) {
        return {
          data: validUserData.user,
          messages: [],
        } as APIResponse;
      }

      return {
        data: {},
        messages: ["an error occurred while creating user"],
      } as APIResponse;
    } catch (error) {
      throw new ExceptionTreatment(
        error as Error,
        500,
        "an error occurred while inserting user on database"
      );
    }
  }
}

export { CreateUserService };
