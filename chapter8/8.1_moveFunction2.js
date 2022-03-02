class Account {
  // 은행 이자 계산
  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0)
      result += this.type.overdraftCharge(this.daysOverdrawn);
    return result;
  }

  get overdraftCharge() {
    return this.type.overdraftCharge(this.daysOverdrawn);
  }
}

class AccountType {
  overdraftCharge(account) {
    if (this.isPremium) {
      const baseCharge = 10;
      if (account.daysOverdrawn <= 7) return baseCharge;
      else return baseCharge + (account.daysOverdrawn - 7) * 0.05;
    } else return account.daysOverdrawn * 1.75;
  }
}
