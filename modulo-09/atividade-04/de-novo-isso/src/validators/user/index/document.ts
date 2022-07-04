class DocumentValidator {
  public document: string;
  public errors: string;

  private regex =
    /((\d{2})[.]?(\d{3})[.]?(\d{3})[/]?(\d{4})[-]?(\d{2}))|((\d{3})[.]?(\d{3})[.]?(\d{3})[-]?(\d{2}))/gm;
  static errors: any;

  public constructor(document: string) {
    this.errors = "";
    this.document = this.validate(document);
  }

  private validate(document: string): string {
    if (document.length === 0) {
      this.errors += "document:document required|";
      return "";
    }

    if (!this.regex.test(document)) {
      this.errors += "document:invalid document|";
      return "";
    }

    return document.trim();
  }
}

export { DocumentValidator };
