function price(order) {
  // 가격(price) = 기본 가격 - 수량 할인 + 배송비
  const basePrice = order.quantity * order.itemPrice;
  ㅌ;
  const quantityDiscount =
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);
  // 가능한 임시 변수를 적게 해서 리턴하라고 했는데?
  // -> 이런 경우에는 로직을 인지하기 좋게 임시 변수로 나눈 것이다. (여러 함수로 쪼갠 것과 같은 효과)
  // 따라서 나중에 수정하기도 더 쉽기 때문에 임시 변수로 나눈 것 같다.
  return basePrice - price + shipping;
}

/* ------------------------------------------------ */

class Order {
  constructor(aRecord) {
    this._data = aRecord;
  }

  get quantity() {
    return this._data.quantity;
  }
  get itemPrice() {
    return this._data.itemPrice;
  }

  get price() {
    return this.basePrice - this.quantityDiscount + this.shipping;
  }
  // basePrice라는 이름이 Order 클래스 전체에 적용된다. 이럴 때 변수가 아닌 메서드로 추출한다.
  get basePrice() {
    return this.quantity * this.itemPrice;
  }
  get quantityDiscount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }
  get shipping() {
    return Math.min(this.basePrice * 0.1, 100);
  }
}
