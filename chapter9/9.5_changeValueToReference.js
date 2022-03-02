class Order {
  // 생성자 본문이 전역 저장소와 결합된다는 문제가 있다.
  // 이 점이 염려된다면 저장소를 생성자 매개변수로 전달하도록 수정하자.
  constructor(data) {
    this._number = data._number;
    // data.customer는 고객 ID를 의미한다.
    this._customer = new registerCustomer(data.customer);
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

// 저장소 객체. 고객 ID와 함께 등록할 수 있으며, ID 하나당 오직 하나의 고객 객체만 생성됨을 보장한다.
export function initialize() {
  _repositoryData = {};
  _repositoryData.customers = new Map();
}

export function registerCustomer(id) {
  if (!_repositoryData.customers.has(id))
    _repositoryData.customersset(id, new Customer(id));
  return findCustomer(id);
}

export function findCustomer(id) {
  return _repositoryData.customers.get(id);
}
