class Order {
  constructor(data) {
    this._number = data._number;
    // data.customer는 고객 ID를 의미한다.
    this._customer = new Customer(data.customer);
    // 다른 데이터를 읽어온다.
  }
  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}
