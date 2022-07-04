class GenerateNumberData {
  public numbers: string = "";
  public typeNumber: string = "";
  public dv: string = "";
  public errors: string = "";
  private numberArray: number[] = [];

  public gerateNumber(ndigit: number, typeNumber: string) {
    this.typeNumber = typeNumber;

    return (() => {
      let numberString = "";
      for (let i = 0; i < ndigit; i++) {
        numberString += String(Math.floor(Math.random() * (9 + 1)));
      }
      this.numbers = numberString;
      return this.numbers;
    })();
  }

  public gerateDV(): string {
    if (this.dv) {
      this.errors = `validator digits:${this.typeNumber} validator digit already exists|`;
      this.dv = "";
      return "";
    }

    this.dv = this.modEleven();
    return this.dv;
  }

  private modEleven(): string {
    this.numberArray = this.numbers.split("").map((n) => Number(n));
    const modEleven =
      this.numberArray
        .reverse()
        .map((n, i) => {
          return n * (i + 2);
        })
        .reduce((accumulator, current) => {
          return accumulator + current;
        }, 0) % 11;

    if (modEleven === 11) {
      return "0";
    } else if (modEleven === 10) {
      return "X";
    } else {
      return String(11 - modEleven);
    }
  }

  public validate(numbers: string = this.numbers): boolean {
    if (!numbers) {
      this.errors = `validator digits:${this.typeNumber} number does not exist|`;
      return false;
    }

    if (numbers.length < 4) {
      this.errors = `validator digits:${this.typeNumber} number is short|`;
      return false;
    }

    if (!this.modEleven()) {
      this.errors += `validator digits:${this.typeNumber} number does not exist|`;
      return false;
    }

    if (this.modEleven() !== this.dv) {
      this.errors += `validator digits:${this.typeNumber} number does not exist|`;
      return false;
    }

    this.dv = this.modEleven();
    return true;
  }
}

export { GenerateNumberData };
