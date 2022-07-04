class PasswordValidator {
  public password: string;
  public errors: string;

  private regex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*()+\-.,;?\^.,;?><:{}\[\]])[\w!@#$%&*()+\-.,;?\^.,;?><:{}\[\]]{6,12}$/;

  public constructor(password: string) {
    this.errors = "";
    this.password = this.validate(password);
  }

  private validate(password: string): string {
    if (password.length === 0) {
      this.errors += "password:password required|";

      return "";
    }

    if (!this.regex.test(password)) {
      this.errors += "password:invalid password|";

      return "";
    }

    return password.trim();
  }
}

export { PasswordValidator };
