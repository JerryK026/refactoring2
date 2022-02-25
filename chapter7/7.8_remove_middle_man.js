class Person {
  get manager() {
    return this._department.manager;
  }

  get department() {
    return this._department;
  }
}

const aPerson = new Person();
const manager = aPerson.department.manager;
