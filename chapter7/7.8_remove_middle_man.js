class Person {
  get manager() {
    return this._department.manager;
  }
}

class Department {
  get manager() {
    return this._manager;
  }
}

const aPerson = new Person();
const manager = aPerson.manager;
