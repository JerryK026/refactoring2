class Account {
  constructor(number, type, interestRate) {
    this._number = number;
    this._type = type;
    // 리팩터링 전 이자율이 다른 계좌가 있는 작업이 있는지 확인해야 한다.
    assert(interestRate === this._type.interestRate);
    this._interestRate = interestRate;
  }

  get interestRate() {
    return this._type.interestRate;
  }
}

class AccountType {
  constructor(nameString, interestRate) {
    this._name = nameString;
    this._interestRate = interestRate;
  }

  get interestRate() {
    return this._interestRate;
  }
}
