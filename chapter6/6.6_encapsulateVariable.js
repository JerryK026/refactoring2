let defaultOwnerData = { firstName: '마틴', lastName: '파울러' };

export function DefaultOwner() {
  // defaultOwnerData의 속성을 다시 대입하는 연산이 모두 무시된다.
  return new Person(defaultOwnerData);
}

export function setDefaultOwner() {
  defaultOwnerData = arg;
}

class Person {
  constructor(data) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get firstName() {
    return this._firstName;
  }
}
