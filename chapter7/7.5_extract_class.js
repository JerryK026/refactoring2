class Person {
  constructor() {
    this._telephonNumber = new TelephoneNumber();
  }

  get name() {
    return this._name;
  }

  set name(arg) {
    this._name = arg;
  }

  get telephoneNumber() {
    return this._telephonNumber.toString();
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }

  set officeAreaCode(arg) {
    return (this._telephonNumber.areaCode = arg);
  }

  get officeNumber() {
    return this._telephonNumber.number;
  }

  set officeNumber(arg) {
    this._telephonNumber.number = arg;
  }
}

class TelephoneNumber {
  get AreaCode() {
    return this._AreaCode;
  }

  set AreaCode(arg) {
    this._AreaCode = arg;
  }

  get number() {
    return this._number;
  }

  set number(arg) {
    this._number = arg;
  }

  toString() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`;
  }
}
