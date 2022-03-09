class Customer {
  set discountRate(aNumber) {
    assert(null === aNumber || aNumber >= 0);
    this._discountRate = aNumber;
  }

  applyDiscount(aNumber) {
    if (!this.discountRate) return aNumber;
    else {
      // 어서션을 세터에서 설정하는 게 낫다.
      // assert(this.discountRate >= 0);
      return aNumber - this.discountRate * aNumber;
    }
  }
}
