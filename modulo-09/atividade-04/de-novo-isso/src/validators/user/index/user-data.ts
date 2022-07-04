import {
  DateValidator,
  EmailValidator,
  NameValidator,
  DocumentValidator,
  PasswordValidator,
} from ".";
import { User } from "../../../models";

class UserDataValidator {
  public user: Partial<User>;
  public errors: string;

  private nameValidator = NameValidator;
  private documentValidator = DocumentValidator;
  private dateValidator = DateValidator;
  private emailValidator = EmailValidator;
  private passwordValidator = PasswordValidator;

  public constructor(user: User) {
    this.errors = "";
    this.user = this.validate(user);
  }

  private validate(user: User): Partial<User> {
    const validName = new this.nameValidator(user.name);
    const validDocument = new this.documentValidator(user.document);
    const validBirthdate = new this.dateValidator(user.birthdate);
    const validEmail = new this.emailValidator(user.email);
    const validPassword = new this.passwordValidator(user.password);

    this.errors += this.errors.concat(
      `${validName.errors}${validDocument.errors}${validBirthdate.errors}${validEmail.errors}${validPassword.errors}`
    );

    const userData: Partial<User> = {
      name: validName.name,
      document: validDocument.document,
      birthdate: validBirthdate.date,
      email: validEmail.email,
      password: validPassword.password,
    };

    return userData;
  }
}

export { UserDataValidator };
